import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h1 {
    ${({ theme }) => css`
      font-size: ${theme.fonts.xbig};
      margin: ${theme.spaces.big} 0;
    `}
  }
`
