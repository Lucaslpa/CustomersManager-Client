import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spaces.medium};
    width: 100%;
    max-width: 70rem;
    ${media.lessThan('medium')`
     max-width:40rem
    `}
    button {
      margin-top: ${theme.spaces.big};
    }
    div {
      padding: 0;
      margin-bottom: ${theme.spaces.big};
    }
  `}
`

type fieldsetProps = {
  column?: boolean
}

export const FieldSet = styled.fieldset<fieldsetProps>`
  ${({ theme, column }) => css`
    display: flex;
    border: none;
    ${media.lessThan('medium')`
     flex-direction: column;
    `}
    ${column
      ? css`
          flex-direction: column;
        `
      : css`
          flex-direction: row;
        `}
    legend {
      font-size: ${theme.fonts.big};
      font-weight: 600;
      color: ${theme.colors.primary};
    }
    #flex {
      display: flex;
      width: 100%;
      justify-content: space-between;
      padding: 0;
      ${media.lessThan('medium')`
     flex-direction: column;
    `}
      > div {
        padding: ${theme.spaces.medium};
      }
    }

    & > div {
      padding: ${theme.spaces.medium};
    }
  `}
`

export const buttonWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    flex-direction: row-reverse;
    padding: ${theme.spaces.big} !important;
    ${media.lessThan('small')`
      justify-content: center;
    `}
  `}
`
