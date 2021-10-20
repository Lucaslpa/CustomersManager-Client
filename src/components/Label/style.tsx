import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export type props = {
  status: 'success' | 'warning'
  show: boolean
}

const enter = css`
  animation-name: enter;
  animation-duration: 0.3s;

  animation-fill-mode: forwards;
  @keyframes enter {
    from {
      transform: translateX(100%);
    }

    to {
      transform: translateX(0%);
    }
  }
`

const out = css`
  animation-name: out;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;

  @keyframes out {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(100%);
    }
  }
`

export const Wrapper = styled.div<props>`
  ${({ theme, status, show }) => css`
    transform: translateX(100%);

    ${show ? enter : out}
    position: absolute;
    color: white;
    font-size: ${theme.fonts.big};
    background-color: ${status === 'success'
      ? theme.colors.success
      : theme.colors.warning};
    padding: ${theme.spaces.medium};
    top: 0;
    right: 0;
    width: 100%;
    max-width: 30rem;
    ${media.greaterThan('medium')`
        padding: ${theme.spaces.big};
       max-width: 50rem;
       font-size: ${theme.fonts.xbig}
      `}
  `}
`
