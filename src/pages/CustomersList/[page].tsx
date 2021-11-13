import Head from 'next/head'
import { useSession } from 'next-auth/react'
import Router from 'next/router'
import { useEffect } from 'react'
import { ListCustomers as Component } from '../../templates/ListCustomers'

export default function List() {
  const { status } = useSession()

  useEffect(() => {
    if (status === 'unauthenticated') {
      Router.push('/login')
    }
  }, [status])

  if (status === 'loading') {
    return <div>loading...</div>
  }

  if (status === 'unauthenticated') {
    return <div>access denied. Redirecting to login.</div>
  }

  return (
    <>
      <Head>
        <title>Lista de clientes</title>
      </Head>
      <Component />
    </>
  )
}
