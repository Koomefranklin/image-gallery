import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      authorize: async ({ email, password }) => {
        // TODO: Implement your database logic here to verify the email and password.
        // If the credentials are valid, return a user object.
        // Otherwise, return null.
        return null;
      },
    }),
  ],
})
