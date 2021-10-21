import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { Button } from '../Button'
import * as S from './style'

export const LogOut = () => (
  <S.Wrapper>
    <Link href="/">
      <>
        <Button text="Sair" type="button" onClick={() => signIn()} />
      </>
    </Link>
  </S.Wrapper>
)
