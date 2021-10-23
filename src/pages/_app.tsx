import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { getSession, SessionProvider } from 'next-auth/react'
import { GlobalStyle } from '../styles/globals'
import { Theme } from '../styles/theme'
import { SelectContextProvider } from '../contexts/select'

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps): ReactNode {
  return (
    <ThemeProvider theme={Theme}>
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
      <SessionProvider session={session}>
        <SelectContextProvider>
          <Component {...pageProps} />
        </SelectContextProvider>
      </SessionProvider>
    </ThemeProvider>
  )
}
export default MyApp

export async function getServerSideProps(ctx: any) {
  return {
    props: {
      session: await getSession(ctx),
    },
  }
}
