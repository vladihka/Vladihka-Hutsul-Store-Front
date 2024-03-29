import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import clientPromise from "../../../lib/mongodb"
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';



export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_FRONT_ID,
      clientSecret: process.env.GOOGLE_FRONT_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
};

export default NextAuth(authOptions)