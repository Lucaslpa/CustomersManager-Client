import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/globals'
import { Theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps): ReactNode {
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

      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default MyApp
