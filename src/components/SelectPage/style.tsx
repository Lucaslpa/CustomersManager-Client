import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fonts.big};
    svg {
      fill: ${theme.colors.primary};
      margin: 0 ${theme.spaces.medium};
      cursor: pointer; 
      &:hover {
        fill: ${theme.colors.secondary};
      }
    }
  `}
`
