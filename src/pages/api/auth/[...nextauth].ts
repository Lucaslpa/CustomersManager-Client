import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { LoginAdministrator } from '../../../api/administrator'

export default NextAuth({
  session: {
    jwt: true,
    maxAge: 1 * 24 * 60 * 60,
    updateAge: 1 * 60 * 60,
  },
  jwt: {
    maxAge: 1 * 24 * 60 * 60,
    secret: process.env.SECRET_KEY,
  },

  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.accessToken = user.token
      }
      return token
    },
    session: ({ session, token }) => {
      session.accessToken = token.accessToken

      return session
    },
  },
  providers: [
    CredentialsProvider({
      id: 'login',
      name: 'auth',

      credentials: {},

      authorize: async (credentials) => {
        const userLogin = JSON.parse(JSON.stringify(credentials))
        const response = await LoginAdministrator({
          password: userLogin.password,
          username: userLogin.username,
        })
        if (response.data.error) {
          throw new Error(response.data.error)
        } else {
          const { token } = response.data

          return { token }
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
})
