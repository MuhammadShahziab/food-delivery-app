import NextAuth, { getServerSession } from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/app/models/User";
// import ConnectDB from "@/app/dbConnect/Connect";
// import GoogleProvider from "next-auth/providers/google";
// import { MongoDBAdapter } from "@auth/mongodb-adapter";
// import clientPromise from "@libs/mongoConnect";

import * as mongoose from "mongoose";
import UserInfo from "@app/models/UserInfo";
import ConnectDB from "@app/dbConnect/Connect";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  // adapter: MongoDBAdapter(clientPromise),
  session: {
    jwt: true, // Ensure JWT session is enabled if using JWT sessions
  },
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        username: {
          label: "Email",
          type: "email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log({ credentials }, "check credential");
        const email = credentials?.email;
        const password = credentials?.password;

        await ConnectDB();
        const user = await User.findOne({ email });
        const passwordOk = user && bcrypt.compareSync(password, user.password);
        console.log(user, "check user");
        console.log(passwordOk, "check passwordOk");
        if (passwordOk) {
          return user;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
};

export const isAdmin = async () => {
  const session = await getServerSession(authOptions);
  const userEmail = session?.user.email;
  if (!userEmail) {
    return false;
  }
  const userInfo = await UserInfo.findOne({ email: userEmail });
  if (!userInfo) {
    return false;
  }
  return userInfo.admin;
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
