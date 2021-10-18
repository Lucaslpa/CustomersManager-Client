import { GlobalStyle } from '../src/styles/globals'
import { Theme } from '../src/styles/theme'
import { ThemeProvider } from 'styled-components'

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Story />
      </ThemeProvider>
    </>
  ),
]
