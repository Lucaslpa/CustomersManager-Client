import Link from 'next/link'
import { GetServerSideProps } from 'next'
import { useState, FormEvent } from 'react'
import { getCsrfToken, signIn } from 'next-auth/react'
import Router from 'next/router'
import { ToastContainer, toast } from 'react-toastify'
import * as S from './styles'
import { TextField } from '../TextField'
import { Button } from '../Button'
import { useManageLabelErrorLogin } from '../../Hooks/LabelError'
import { LabelStatus } from '../Label'
import 'react-toastify/dist/ReactToastify.css'

type props = {
  csrfToken?: string | undefined
}

export const LoginForm = ({ csrfToken }: props) => {
  const [formValues, setFormValues] = useState({ username: '', password: '' })
  const { Error, openError } = useManageLabelErrorLogin()
  const notify = () => toast(Error)
  async function handleSignIn(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const loginResult = await signIn('login', {
      ...formValues,
      redirect: false,
    })
    if (loginResult.error) {
      openError(loginResult.error)
      toast.error(loginResult.error)
    } else {
      Router.push('/CustomersList/1')
    }
  }

  return (
    <S.Wrapper aria-label="Form" onSubmit={(e) => handleSignIn(e)}>
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <ToastContainer />
      <TextField
        placeholder="Usuário"
        size="medium"
        type="text"
        onChange={(username) => setFormValues({ ...formValues, username })}
      />
      <TextField
        placeholder="Senha"
        size="medium"
        type="password"
        onChange={(password) => setFormValues({ ...formValues, password })}
      />

      <Button text="Entrar" size="big" type="submit" />
    </S.Wrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async (context: any) => ({
  props: {
    csrfToken: await getCsrfToken(context),
  },
})
