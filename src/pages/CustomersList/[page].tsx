import Head from 'next/head'
import { useSession } from 'next-auth/react'
import Router from 'next/router'
import { useEffect } from 'react'
import { ListCustomers as Component } from '../../templates/ListCustomers'
import { Authentication } from '../../components/authentication'

export default function List() {
  const { status } = useSession()

  if (status !== 'authenticated') {
    return <Authentication />
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
