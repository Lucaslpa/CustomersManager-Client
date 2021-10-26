import styled, { css } from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 80rem;
  flex-direction: column;
  padding-top: 5rem;
  align-items: center;
  ${({ theme }) => css`
    & > h1 {
      font-size: ${theme.fonts.xbig};
      margin: ${theme.spaces.big} 0;
    }
    & > div {
      width: 100%;
      padding: 1rem;
      display: flex;
      justify-content: flex-end;
    }
  `}
`
