import Head from 'next/head'
import { ListCustomers as Component } from '../templates/ListCustomers'

export default function List() {
  return (
    <>
      <Head>
        <title>Lista de clientes</title>
      </Head>
      <Component />
    </>
  )
}
