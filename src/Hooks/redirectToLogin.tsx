import { useSession, getSession } from 'next-auth/react'
import { useEffect } from 'react'
import Router from 'next/router'

export const useRedirectToLoginIfHasNoSession = () => {
  const { data } = useSession()
  useEffect(() => {
    if (!data || !data.accessToken) {
      Router.push('/login')
    }
  }, [])
  if (!data || !data.accessToken) return null
  return data
}
