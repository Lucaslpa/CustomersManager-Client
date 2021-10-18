import * as S from './styles'

export type props = {
  placeholder: string
  onChange: (value: string) => void
  type: string
}

export const TextField = ({ placeholder, onChange, type }: props) => (
  <S.Wrapper>
    <label htmlFor={placeholder}>{placeholder}</label>
    <input
      onChange={(e) => onChange(e.target.value)}
      id={placeholder}
      type={type}
      placeholder={placeholder}
    />
  </S.Wrapper>
)
