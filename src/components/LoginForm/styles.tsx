import styled, { css, keyframes } from 'styled-components'
import { Spinner9 } from '@styled-icons/icomoon'

export const Wrapper = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spaces.medium};
    width: 100%;
    max-width: 33rem;
    button {
      margin-top: ${theme.spaces.big};
    }
    > div {
      padding: 0;
      margin-bottom: ${theme.spaces.big};
    }
  `}
`

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const LoadingIcon = styled(Spinner9)`
  animation: 2s linear ${spin} infinite;
  width: 1.4rem;
`
