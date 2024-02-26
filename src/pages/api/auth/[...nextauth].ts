import type { NextAuthOptions } from 'next-auth';
// eslint-disable-next-line import/no-extraneous-dependencies
import NextAuth from 'next-auth/next';
// eslint-disable-next-line import/no-extraneous-dependencies
import CreadentialsProvider from 'next-auth/providers/credentials';

// eslint-disable-next-line unused-imports/no-unused-vars
const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CreadentialsProvider({
      type: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const user: any = { id: 1, email, password };
        if (user) {
          return user;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    // eslint-disable-next-line unused-imports/no-unused-vars
    jwt({ token, account, user }) {
      if (account?.provider === 'credentials') {
        // eslint-disable-next-line no-param-reassign
        token.email = user.email;
      }
      return token;
    },

    async session({ session, token }: any) {
      if ('email' in token) {
        // eslint-disable-next-line no-param-reassign
        session.user.email = token.email;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
