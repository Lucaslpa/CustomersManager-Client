import { FormEvent, useState } from 'react'
import { signIn } from 'next-auth/react'
import { LoginForm } from '../../components/LoginForm'
import * as S from './style'
import { LabelStatus } from '../../components/Label'
import { useManageLabelErrorLogin } from '../../Hooks/manageLabelErrorLogin'

export const Login = () => (
  <S.Wrapper>
    <h1>Seja bem vindo(a)</h1>
    <LoginForm />
  </S.Wrapper>
)
