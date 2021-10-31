import Head from 'next/head'
import { Login as Component } from '../templates/Login'

export default function Login() {
  return (
    <>
      <Head>
        <title>Entrada do administrador</title>
      </Head>
      <Component />
    </>
  )
}
