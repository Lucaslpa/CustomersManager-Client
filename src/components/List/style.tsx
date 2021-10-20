import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${media.greaterThan('medium')`
      section {
          display: none;
      }
    `}

  ${media.lessThan('medium')`
      table {
          display: none;
      }
    `}
`

export const WrapperMobile = styled.section``

export const WrapperWeb = styled.table`
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
`

export const Thead = styled.thead`
  border: solid 1px green;
  width: 100%;
  font-size: 1rem;

  tr {
    ${({ theme }) => css`
      font-size: ${theme.fonts.big};
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      padding: ${theme.spaces.medium};
      border-bottom: solid 1px #e6e6e6;
      color: ${theme.colors.primary};
      td {
        width: 100%;

        font-weight: bold;
      }
    `}
  }
`
