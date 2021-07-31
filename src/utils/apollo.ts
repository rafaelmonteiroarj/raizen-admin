import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  Observable
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import { Session } from 'next-auth';
import { useMemo } from 'react';

import { refreshToken } from './auth';

let apolloClient: ApolloClient<NormalizedCacheObject | null>;

function createApolloClient(session?: Session | null) {
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`
  });

  // Log any GraphQL errors or network error that occurred
  const errorLink = onError(
    ({ graphQLErrors, networkError, operation, forward }) => {
      if (graphQLErrors) {
        for (const err of graphQLErrors) {
          switch (err.message) {
            case 'Unauthorized':
              return new Observable(observer => {
                refreshToken(operation)
                  .then(() => forward(operation).subscribe(observer))
                  .catch(error => {
                    // No refresh or client token available, we force user to login
                    observer.error(error);
                  });
              });
          }
        }
      }

      if (networkError) console.log(`[Network error]: ${networkError}`);
    }
  );

  const authLink = setContext((_, { headers, session: clientSession }) => {
    const jwt = session?.jwt || clientSession?.jwt || '';
    const authorization = jwt ? `Bearer ${jwt}` : '';
    return { headers: { ...headers, authorization } };
  });

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authLink.concat(errorLink.concat(httpLink)),
    cache: new InMemoryCache()
  });
}

export function initializeApollo(
  initialState = null,
  session?: Session | null
) {
  // serves to check if an instance already exists, not to create another
  const apolloClientGlobal = apolloClient ?? createApolloClient(session);

  // if the page uses apollo Client on the client side
  // we hydrate the initial state here
  if (initialState) {
    apolloClientGlobal.cache.restore(initialState);
  }

  // always booting on SSR with clean cache
  if (typeof window === 'undefined') return apolloClientGlobal;
  // create apolloClient if it is on the client side
  apolloClient = apolloClient ?? apolloClientGlobal;

  return apolloClient;
}

export function useApollo(initialState = null, session?: Session) {
  const store = useMemo(
    () => initializeApollo(initialState, session),
    [initialState, session]
  );
  return store;
}
