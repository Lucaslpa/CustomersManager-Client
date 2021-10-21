import { signIn } from 'next-auth/react'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: 'login',
      name: 'auth',

      credentials: {},

      authorize: (credentials) => {
        const userLogin = JSON.parse(JSON.stringify(credentials))
        const user = { id: 1, username: 'asdasdas', password: '1' }

        if (userLogin.username !== user.username) {
          return null
        }
        if (userLogin.password !== user.password) {
          return null
        }

        if (!user) {
          throw new Error('error message')
        }
        return user
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
})
