import Head from 'next/head'
import { CustomerForm as Component } from '../../templates/CustomerForm'

export default function CustomForm() {
  return (
    <>
      <Head>
        <title>Formulário de clientes</title>
      </Head>
      <Component />
    </>
  )
}
