import * as S from './style'

export type props = {
  status: 'success' | 'warning'
  text: string
  show: boolean
}

export const LabelStatus = ({ status, text, show = false }: props) => (
  <S.Wrapper show={show} status={status} aria-label={status}>
    <strong>{text}</strong>
  </S.Wrapper>
)
