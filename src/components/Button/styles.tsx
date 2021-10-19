import styled, { css } from 'styled-components'
import Image from 'next/image'

type buttonProps = {
  size: 'small' | 'medium' | 'big'
}
const width = {
  big: () => css`
    max-width: 30rem;
  `,
  medium: () => css`
    max-width: 10rem;
  `,
  small: () => css`
    ${({ theme }) => css`
      width: auto;
      padding: ${theme.spaces.small};
    `}
  `,
}

export const Button = styled.button<buttonProps>`
  ${({ theme, size }) => css`
    border: none;
    border-radius: ${theme.radius};
    color: white;
    cursor: pointer;
    font-size: ${theme.fonts.medium};
    width: 100%;
    background-color: ${theme.colors.primary};
    padding: ${theme.spaces.big} ${theme.spaces.small};
    ${width[size]()}
    &:hover {
      background-color: ${theme.colors.primaryDark};
    }
  `}
`

export const Img = styled(Image)`
  max-height: 2rem;
  max-width: 2.3rem;
  width: 100%;
`
