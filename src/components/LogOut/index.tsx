import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { Button } from '../Button'
import * as S from './style'

export const LogOut = () => (
  <S.Wrapper>
    <Link href="/">
      <>
        <Button
          text="Sair"
          type="button"
          onClick={() =>
            signOut({ callbackUrl: `http://localhost:3000/login` })
          }
        />
      </>
    </Link>
  </S.Wrapper>
)
