import * as S from './styles'

export type props = {
  placeholder: string
  onChange: (value: string) => void
  type: 'email' | 'password' | 'text' | 'tel'
  size?: 'medium' | 'big' | 'small'
  label?: boolean
  error?: boolean
  defaultValue?: string
}

export const TextField = ({
  placeholder,
  onChange,
  type,
  size = 'small',
  label = true,
  error = false,
  defaultValue,
}: props) => (
  <S.Wrapper size={size} error={error}>
    {label ? <label htmlFor={placeholder}>{placeholder}</label> : null}
    <S.Input
      defaultValue={defaultValue}
      aria-label={`${placeholder} text field`}
      onChange={(e) => onChange(e.target.value)}
      id={placeholder}
      type={type}
      placeholder={placeholder}
      error={error}
    />
  </S.Wrapper>
)
