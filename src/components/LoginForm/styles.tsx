import styled, { css } from 'styled-components'

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
