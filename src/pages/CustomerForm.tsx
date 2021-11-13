import Head from 'next/head'
import Router from 'next/router'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { Loading } from '../components/Loading'
import { CustomerForm as Component } from '../templates/CustomerForm'
import { Authentication } from '../components/authentication'

export default function CustomForm() {
  const { status } = useSession()

  if (status !== 'authenticated') {
    return <Authentication />
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
