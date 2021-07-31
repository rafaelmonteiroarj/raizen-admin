import NextAuth, { Session, User } from 'next-auth';
import Providers from 'next-auth/providers';
import { JWT } from 'next-auth/jwt';

import { authenticate } from 'utils/auth';
import { UnauthorizedException } from 'utils/exceptions/unauthorizedException';

type AuthorizeProps = {
  email: string;
  password: string;
};

export default NextAuth({
  jwt: {
    maxAge: 3600
  },
  pages: {
    signIn: '/'
  },
  providers: [
    Providers.Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Sign-in',
      async authorize({ email, password }: AuthorizeProps) {
        try {
          const response = await authenticate({ email, password });
          return response;
        } catch (err) {
          throw new UnauthorizedException(err.message);
        }
      }
    })
  ],
  callbacks: {
    session: async (session: Session, user: User) => {
      session.jwt = user.jwt;
      session.id = user.id;

      return Promise.resolve(session);
    },
    jwt: async (token: JWT, user: User) => {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.jwt = user.accessToken;
      }

      return Promise.resolve(token);
    }
  }
});
