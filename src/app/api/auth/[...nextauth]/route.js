import NextAuth from "next-auth/next";
import { options } from "./options";

const handler = NextAuth(options)
// Methods for the authentication call
export { handler as GET, handler as POST}