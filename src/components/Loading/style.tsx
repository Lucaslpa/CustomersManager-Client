import styled, { keyframes } from 'styled-components'
import { Spinner9 } from '@styled-icons/icomoon'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center !important;
  align-items: center;
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
  width: 3rem;
  fill: blue;
`
