import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { SessionProvider } from 'next-auth/react'
import { ToastContainer } from 'react-toastify'
import { GlobalStyle } from '../styles/globals'
import { Theme } from '../styles/theme'
import { SelectContextProvider } from '../contexts/CustomersSelect'
import { CustomersContextProvider } from '../contexts/Customers'
import 'react-toastify/dist/ReactToastify.css'

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
        <CustomersContextProvider>
          <SelectContextProvider>
            <ToastContainer />
            <Component {...pageProps} />
          </SelectContextProvider>
        </CustomersContextProvider>
      </SessionProvider>
    </ThemeProvider>
  )
}
export default MyApp
