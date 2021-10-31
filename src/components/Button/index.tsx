/* eslint-disable react/display-name */
import { ReactElement, forwardRef } from 'react'
import * as S from './styles'

type sizeType = 'small' | 'medium' | 'big'
export type props = {
  Icon?: ReactElement
  text?: string
  label?: string
  size?: sizeType
  onClick?: () => void
  type?: 'button' | 'submit'
}

export const Button = forwardRef(
  (
    { text, Icon, label, size = 'small', onClick, type = 'button' }: props,
    ref
  ) => (
    <S.Button onClick={onClick} aria-label={label} type={type} size={size}>
      {!text && !Icon ? 'Button' : null}
      {Icon && !text ? Icon : null}
      {text && !Icon ? text : null}
    </S.Button>
  )
)
