import Link from 'next/link'
import { List } from '../../components/List'
import { Button } from '../../components/Button'

import * as S from './style'
import { LogOut } from '../../components/LogOut'

export const Clientes = () => (
  <S.Container>
    <LogOut />

    <S.Wrapper>
      <h1>Lista de clientes</h1>
      <div>
        <Link href="/cliente" passHref>
          <Button text="Adicionar cliente" size="small" />
        </Link>
      </div>
      <List />
    </S.Wrapper>
  </S.Container>
)