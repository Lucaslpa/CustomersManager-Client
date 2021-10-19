import styled, { css } from 'styled-components'

const width = {
  medium: () => css`
    max-width: 30rem;
  `,
  big: () => css`
    max-width: 100%;
  `,
  small: () => css`
    max-width: 20rem;
  `,
}

type props = {
  size: 'medium' | 'big' | 'small'
  error: boolean
}

export const Wrapper = styled.div<props>`
  ${({ theme, size, error }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spaces.medium};
    ${width[size]()}
    ${error
      ? css`
          color: ${theme.colors.warning};
        `
      : null}
    label {
      font-size: ${theme.fonts.big};
      margin: ${theme.spaces.medium} 0;
    }
  `}
`
export const Input = styled.input<{ error: boolean }>`
  ${({ theme, error }) => css`
    display: flex;
       font: : ${theme.fonts.small};
       outline-color: ${error ? theme.colors.warning : theme.colors.primary};
       padding: ${theme.spaces.medium} ${theme.spaces.small};
       border: 1px solid ${error ? theme.colors.warning : 'black'};
    
  `}
`
