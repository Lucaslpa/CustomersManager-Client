import { LoginForm } from '../../components/LoginForm'
import * as S from './style'
import { LabelStatus } from '../../components/Label'
import { useManageLabelErrorLogin } from '../../Hooks/manageLabelErrorLogin'

export const Login = () => {
  const { loginError, openError } = useManageLabelErrorLogin()

  return (
    <S.Wrapper>
      {loginError ? <LabelStatus text="Algo errado" status="warning" /> : null}
      <h1 onClick={() => openError()}>Seja bem vindo(a)</h1>
      <LoginForm />
    </S.Wrapper>
  )
}
