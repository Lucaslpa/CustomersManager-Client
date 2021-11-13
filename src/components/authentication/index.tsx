import Router from 'next/router'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import * as S from './style'
import { Loading } from '../Loading'

export const Authentication = () => {
  const { status } = useSession()

  useEffect(() => {
    if (status === 'unauthenticated') {
      Router.push('/login')
    }
  }, [status])

  if (status === 'loading') {
    return (
      <S.Container>
        <Loading />
      </S.Container>
    )
  }

  if (status === 'unauthenticated') {
    return (
      <S.Container>
        <strong>Access denied. Redirecting to login screen.</strong>
      </S.Container>
    )
  }

  return null
}
