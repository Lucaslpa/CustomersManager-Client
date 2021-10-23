import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { List } from '../../components/List'
import { Button } from '../../components/Button'
import * as S from './style'
import { LogOut } from '../../components/LogOut'
import { SelectPage } from '../../components/SelectPage'
import { clientes } from '../../api/ClienteMock'
import { useClientsContext } from '../../contexts/Clients'

export const Clientes = () => {
  const { data } = useSession()
  const { state } = useClientsContext()

  return (
    <S.Container>
      <LogOut />

      <S.Wrapper>
        <h1>Lista de clientes</h1>
        <div>
          <Link href="/cliente">
            <>
              <Button text="Adicionar cliente" size="small" />
            </>
          </Link>
        </div>
        {state ? <List clients={state.ClientsData} /> : null}
        <SelectPage />
      </S.Wrapper>
    </S.Container>
  )
}
