import Link from 'next/link'
import * as S from './styles'
import { TextField } from '../TextField'
import { Button } from '../Button'

export const LoginForm = () => (
  <S.Wrapper aria-label="Form">
    <TextField
      placeholder="Usuário"
      size="medium"
      type="text"
      onChange={() => null}
    />
    <TextField
      placeholder="Senha"
      size="medium"
      type="password"
      onChange={() => null}
    />

    <Link href="/clientes" passHref>
      <Button text="Entrar" size="big" />
    </Link>
  </S.Wrapper>
)
