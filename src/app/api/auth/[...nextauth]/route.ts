import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { getDataByField } from "@/lib/firebase/service";

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials) {
        //
        const response = await getDataByField("users", "username", credentials?.username || "");
        const user: any = response[0];

        const passwordCorrect = await compare(credentials?.password || "", user.password);

        if (passwordCorrect) {
          return {
            id: user.id,
            username: user.username,
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile, user }: any) {
      if (account?.provider === "credentials") {
        token.id = user.id;
        token.username = user.username;
      }

      return token;
    },

    async session({ session, token }: any) {
      if ("id" in token) {
        session.user.id = token.id;
      }
      if ("username" in token) {
        session.user.username = token.username;
      }

      const accessToken = jwt.sign(token, process.env.NEXTAUTH_SECRET || "", {
        algorithm: "HS256",
      });

      session.token = accessToken;

      return session;
    },
  },
});

export { handler as GET, handler as POST };
