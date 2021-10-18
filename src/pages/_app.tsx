import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ReactNode } from 'react'
import { GlobalStyle } from '../styles/globals'

function MyApp({ Component, pageProps }: AppProps): ReactNode {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
