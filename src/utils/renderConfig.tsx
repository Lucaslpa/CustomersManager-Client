import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { ReactElement } from 'react'
import { getSession, SessionProvider } from 'next-auth/react'
import { Theme } from '../styles/theme'

export const renderConfig = (ComponentToTest: ReactElement) =>
  render(<ThemeProvider theme={Theme}>{ComponentToTest}</ThemeProvider>)
