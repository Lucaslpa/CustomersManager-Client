import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  padding: 5rem 0;

  align-items: center;
  ${({ theme }) => css`
    & > h1 {
      font-size: ${theme.fonts.xbig};
      margin: ${theme.spaces.big} 0;
    }
    & > div {
      width: 100%;
      max-width: 80rem;
      padding:  ${theme.spaces.big};

  `}
`
