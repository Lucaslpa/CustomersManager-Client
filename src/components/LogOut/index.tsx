import Link from 'next/link'
import { Button } from '../Button'
import * as S from './style'

export const LogOut = () => (
  <S.Wrapper>
    <Link href="/">
      <>
        <Button text="Sair" />
      </>
    </Link>
  </S.Wrapper>
)
