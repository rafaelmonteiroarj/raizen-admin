import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/client';
import axios from 'axios';
import { Operation } from '@apollo/client';

import api from './api';

type AuthorizeProps = {
  email: string;
  password: string;
};

export const isAuthenticated = async (context: GetServerSidePropsContext) => {
  const session = await getSession(context);

  if (!session) {
    context.res.setHeader('Location', `/?callbackUrl=${context.resolvedUrl}`);
    context.res.statusCode = 302;
  }

  return session;
};

export const authenticate = async ({ email, password }: AuthorizeProps) => {
  const response = await api.post(`/graphql`, {
    query: `mutation ($input: AuthInput!) {
      login(data: $input) {
        user { id, name, email }
        access_token
      }
    }`,
    variables: { input: { email, password } }
  });

  const { data: res, status } = response;

  /** checking if exist error */
  if (res.errors) throw new Error(res.errors[0].message);

  // If no error and we have user data, return it
  if (status === 200 && res.data) {
    return {
      ...res.data.login.user,
      accessToken: res.data.login.access_token
    };
  }

  // Return null if user data could not be retrieved
  return null;
};

export const refreshToken = async (operation: Operation): Promise<void> => {
  const { headers: oldHeaders } = operation.getContext();

  const response = await axios.post(`/graphql`, {
    query: `mutation ($token: String!) {
        refreshToken(token: $token) {
        user { id, name, email }
        access_token
      }
    }`,
    variables: {
      token: oldHeaders.authorization.replace('Bearer ', '')
    }
  });

  const { data: res, status } = response;

  /** checking if exist error */
  if (res.errors) throw new Error(res.errors[0].message);

  // If no error and we have user data, return it
  if (status === 200 && res.data) {
    operation.setContext({
      headers: {
        ...oldHeaders,
        authorization: `Bearer ${res.data.refreshToken.access_token}`
      }
    });
  }
};
