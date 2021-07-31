import Example from 'components/Example';
import { GET_USERS } from 'graphql/queries/users';
import { GetServerSidePropsContext } from 'next';
import { initializeApollo } from 'utils/apollo';

import { isAuthenticated } from 'utils/auth';

export default function Home({ error, data }: { error: string; data: any }) {
  console.log('catch error: ', error);
  console.log('return: ', data);
  return <Example />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await isAuthenticated(context);
  const apolloClient = initializeApollo(null, session);

  /** check session */
  if (!session) return { props: {} };

  try {
    const { data } = await apolloClient.query({ query: GET_USERS });
    return {
      props: {
        data
      }
    };
  } catch (err) {
    return {
      props: {
        error: err.message
      }
    };
  }
}
