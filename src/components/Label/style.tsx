import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export type props = {
  status: 'success' | 'warning'
}

export const Wrapper = styled.div<props>`
  ${({ theme, status }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    transition: 0.4s;
    position: absolute;
    color: white;
    font-size: ${theme.fonts.medium};
    background-color: ${status === 'success'
      ? theme.colors.success
      : theme.colors.warning};
    padding: ${theme.spaces.medium};
    top: 0;
    right: 0;
    width: 100%;
    height: 4rem;
    ${media.greaterThan('medium')`
        
        font-size: ${theme.fonts.medium}
      `}
  `}
`
