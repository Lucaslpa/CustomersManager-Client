import { useEffect, useState } from 'react'
import * as S from './style'

export type props = {
  status: 'success' | 'warning'
  text: string
}

export const LabelStatus = ({ status, text }: props) => (
  <S.Wrapper status={status} aria-label={status}>
    <strong>{text}</strong>
  </S.Wrapper>
)
