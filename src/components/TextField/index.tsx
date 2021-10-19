import * as S from './styles'

export type props = {
  placeholder: string
  onChange: (value: string) => void
  type: 'email' | 'password' | 'text' | 'tel'
  size?: 'medium' | 'big' | 'small'
  label?: boolean
  error?: boolean
}

export const TextField = ({
  placeholder,
  onChange,
  type,
  size = 'small',
  label = true,
  error = false,
}: props) => (
  <S.Wrapper size={size} error={error}>
    {label ? <label htmlFor={placeholder}>{placeholder}</label> : null}
    <S.Input
      aria-label={`${placeholder} text field`}
      onChange={(e) => onChange(e.target.value)}
      id={placeholder}
      type={type}
      placeholder={placeholder}
      error={error}
    />
  </S.Wrapper>
)
