import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { PersonAdd } from '@styled-icons/evaicons-solid'
import { List } from '../../components/List'
import { Button } from '../../components/Button'
import * as S from './style'
import { LogOut } from '../../components/LogOut'
import { SelectPage } from '../../components/SelectPage'
import { useCustomersContext } from '../../contexts/Customers'
import { useRedirectToLoginIfHasNoSession } from '../../Hooks/redirectToLogin'
import { useSetNewClientsContext } from '../../Hooks/setNewClientsContext'
import { Loading } from '../../components/Loading'

export const ListCustomers = () => {
  const router = useRouter()
  const { page } = router.query

  const { CustomersContext, setCustomersContext } = useCustomersContext()
  useRedirectToLoginIfHasNoSession()
  const setNewCustomersContext = useSetNewClientsContext()

  useEffect(() => {
    setNewCustomersContext(Number(page) || 1)
  }, [])

  return (
    <S.Container>
      <LogOut />

      <S.Wrapper>
        <h1>Lista de clientes</h1>
        <div>
          <Link href="/CustomerForm">
            <Button Icon={<PersonAdd width={25} />} size="small" />
          </Link>
        </div>
        {!CustomersContext.loading ? (
          <List customers={CustomersContext.Customers} />
        ) : (
          <Loading />
        )}
        <SelectPage />
      </S.Wrapper>
    </S.Container>
  )
}
