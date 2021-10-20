import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 80rem;
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div {
    width: 100%;
    ${({ theme }) => css`
      h1 {
        color: black;
        font-size: ${theme.fonts.xbig};
        margin: ${theme.spaces.big} 0;
        text-align: center;
      }
    `}
  }
`
