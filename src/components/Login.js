import { NextAuth } from 'next-auth';
import { EmailProvider } from 'next-auth/providers';

export default NextAuth({
  providers: [
    EmailProvider({
      server: {
        host: 'localhost',
        port: 1025,
      },
    }),
  ],
});
