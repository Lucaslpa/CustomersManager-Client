import * as S from './styles'
import { TextField } from '../TextField'
import { Button } from '../Button'

export const LoginForm = () => (
  <S.Wrapper aria-label="Form">
    <TextField
      placeholder="Email"
      size="medium"
      type="email"
      onChange={() => null}
    />
    <TextField
      placeholder="Senha"
      size="medium"
      type="password"
      onChange={() => null}
    />

    <Button text="Entrar" size="big" />
  </S.Wrapper>
)
