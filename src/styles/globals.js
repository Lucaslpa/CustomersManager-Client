import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-size: 62.5%;
}

body * {
    font-size: 1.5rem !important;
}

h1,
h2,
h3,
h4 {
  margin: 0;
  padding: 0;
}


a {
  text-decoration: none;
}
`
