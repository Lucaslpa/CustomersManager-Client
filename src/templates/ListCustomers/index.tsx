import Link from 'next/link'
import { useEffect } from 'react'
import { List } from '../../components/List'
import { Button } from '../../components/Button'
import * as S from './style'
import { LogOut } from '../../components/LogOut'
import { SelectPage } from '../../components/SelectPage'
import { useCustomersContext } from '../../contexts/Customers'
import { useRedirectToLoginIfHasNoSession } from '../../Hooks/redirectToLogin'
import { useSetNewClientsContext } from '../../Hooks/setNewClientsContext'

export const ListCustomers = () => {
  const { CustomersContext } = useCustomersContext()
  useRedirectToLoginIfHasNoSession()
  const setNewCustomersContext = useSetNewClientsContext()

  useEffect(() => {
    setNewCustomersContext(1)
  }, [])

  return (
    <S.Container>
      <LogOut />

      <S.Wrapper>
        <h1>Lista de clientes</h1>
        <div>
          <Link href="/CustomerForm">
            <Button text="Adicionar cliente" size="small" />
          </Link>
        </div>
        {CustomersContext ? (
          <List customers={CustomersContext.Customers} />
        ) : null}
        <SelectPage />
      </S.Wrapper>
    </S.Container>
  )
}
