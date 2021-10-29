import styled, { css } from 'styled-components'
import { ArrowRight as Right, ArrowLeft as Left } from '@styled-icons/bootstrap'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  ${({ theme }) => css`
    padding: ${theme.spaces.big};
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

const Hidden = css`
  opacity: 0;
  pointer-events: none;
`

const noHidden = css`
  width: 3rem;
`

export const ArrowRight = styled(Right)<{ hidden: boolean }>`
  ${({ hidden }) => css`
    ${hidden ? Hidden : noHidden}
  `}
`

export const ArrowLeft = styled(Left)<{ hidden: boolean }>`
  ${({ hidden }) => css`
    ${hidden ? Hidden : noHidden}
  `}
`
