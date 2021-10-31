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
    border-bottom: solid 0.5px #e6e6e63b;

    td {
      width: 100%;
    }
    button {
      margin: 0 ${theme.spaces.medium};
    }
  `}
`

type wrapperMobileProps = {
  selected: boolean
}

export const WrapperMobile = styled.div<wrapperMobileProps>`
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 13rem;
  border: solid 0.5px #e6e6e63b;
  ${({ selected, theme }) => css`
    background-color: ${selected ? theme.colors.selected : null};
  `};
  button {
    margin: 0 2rem;
  }
`
