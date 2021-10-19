import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const WrapperWeb = styled.tr`
  ${({ theme }) => css`
    font-size: ${theme.fonts.big};
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: ${theme.spaces.medium};
    border-bottom: solid 1px #e6e6e6;

    td {
      width: 100%;
    }
    button {
      margin: 0 ${theme.spaces.medium};
    }
  `}
`

export const WrapperMobile = styled.div`
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 13rem;
  border-bottom: solid 1px #e6e6e6;
  button {
    margin: 0 2rem;
  }
`
