import styled, { css } from 'styled-components'

type props = {
  hidden?: boolean
}

export const Wrapper = styled.div<props>`
  ${({ theme, hidden }) => css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    font-size: ${theme.fonts.big};
    transition: 0.3s;
    position: fixed;
    top: 0;
    left: 0;
    ${hidden
      ? css`
          pointer-events: none;
          opacity: 0;
        `
      : css`
          pointer-events: all;
          opacity: 1;
        `}
    padding: ${theme.spaces.small} ${theme.spaces.medium};
    background-color: ${theme.colors.primary};
    color: white;
  `}
`
