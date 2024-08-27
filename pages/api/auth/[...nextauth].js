// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { FirestoreAdapter } from '@next-auth/firebase-adapter';
import { db } from '@/app/Firebase/firebase.config';

/**
 * Next Auth Configurations for the OAuth Signin
 */

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: FirestoreAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    jwt: true,
  },
  pages: {
    signIn: '/',
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
  debug: true,
});
