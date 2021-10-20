import Link from 'next/link'
import { List } from '../../components/List'
import { Button } from '../../components/Button'

import * as S from './style'
import { LogOut } from '../../components/LogOut'
import { SelectPage } from '../../components/SelectPage'
import { DeleteAll } from '../../components/DeleteAll'

export const Clientes = () => (
  <S.Container>
    <LogOut />
    <DeleteAll hidden={false} selected={1} />
    <S.Wrapper>
      <h1>Lista de clientes</h1>
      <div>
        <Link href="/cliente">
          <>
            <Button text="Adicionar cliente" size="small" />
          </>
        </Link>
      </div>
      <List />
      <SelectPage />
    </S.Wrapper>
  </S.Container>
)
