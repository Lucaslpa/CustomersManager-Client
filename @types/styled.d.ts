import { Theme } from '../src/styles/theme'

declare module 'styled-components' {
  type theme = typeof Theme
  export interface DefaultTheme extends theme {}
}
