import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  border: solid 1px red;
  flex-direction: column;

  align-items: center;
  ${({ theme }) => css`
    & > h1 {
      font-size: ${theme.fonts.big};
      margin: ${theme.spaces.big} 0;
    }
    & > div {
      width: 100%;
      max-width: 80rem;
      padding:  ${theme.spaces.big};

  `}
`
