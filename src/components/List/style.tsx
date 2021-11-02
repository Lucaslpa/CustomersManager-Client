import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
`

export const WrapperMobile = styled.section`
  width: 100%;
  ${media.greaterThan('medium')`
      
          display: none;
  
    `}
`

export const WrapperWeb = styled.table`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: solid 0.5px #e6e6e63b;
  max-width: 80rem;
  margin: 0 auto;
  ${media.lessThan('medium')`
      
          display: none;
  
    `}
`

export const Thead = styled.thead`
  font-size: 1rem;

  tr {
    ${({ theme }) => css`
      font-size: ${theme.fonts.big};
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      padding: ${theme.spaces.medium};
      border: solid 1px #d1d1d167;
      color: ${theme.colors.primary};
      td {
        width: 100%;

        font-weight: bold;
      }
    `}
  }
`
