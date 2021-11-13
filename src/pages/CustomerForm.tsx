import Head from 'next/head'
import Router, { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

import { useEffect } from 'react'
import { CustomerForm as Component } from '../templates/CustomerForm'

export default function CustomForm() {
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
        <title>Formulário de clientes</title>
      </Head>
      <Component />
    </>
  )
}
