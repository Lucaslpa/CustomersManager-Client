import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { getSession, SessionProvider } from 'next-auth/react'
import { GlobalStyle } from '../styles/globals'
import { Theme } from '../styles/theme'
import { SelectContextProvider } from '../contexts/select'
import { ClientsContextProvider } from '../contexts/Clients'

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
        <ClientsContextProvider>
          <SelectContextProvider>
            <Component {...pageProps} />
          </SelectContextProvider>
        </ClientsContextProvider>
      </SessionProvider>
    </ThemeProvider>
  )
}
export default MyApp

export async function getServerSideProps(ctx: any) {
  const session = await getSession(ctx)

  return {
    props: {
      session,
    },
  }
}
