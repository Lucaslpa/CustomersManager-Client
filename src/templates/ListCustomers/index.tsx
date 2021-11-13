import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { PersonAdd } from '@styled-icons/evaicons-solid'
import { useSession } from 'next-auth/react'
import { List } from '../../components/List'
import { Button } from '../../components/Button'
import * as S from './style'
import { LogOut } from '../../components/LogOut'
import { SelectPage } from '../../components/SelectPage'
import { useCustomersContext } from '../../contexts/Customers'
import { Loading } from '../../components/Loading'
import { GetMany } from '../../services/customer/getMany'

export const ListCustomers = () => {
  const router = useRouter()
  const { page } = router.query
  const { status, data } = useSession()

  const accessToken = String(data?.accessToken)

  const { CustomersContext, setCustomersContext } = useCustomersContext()

  async function handleGetCustomersAndPutInCustomersContext() {
    const PageOne = 1
    const PageFromQueryParams = Number(page)
    const currentPageOfCustomers = PageFromQueryParams || PageOne
    const customersFromApi = await GetMany(currentPageOfCustomers, accessToken)
    if (!customersFromApi) return
    setCustomersContext!({ ...customersFromApi, loading: false })
  }

  useEffect(() => {
    handleGetCustomersAndPutInCustomersContext()
  }, [page])

  return (
    <S.Container>
      <LogOut />

      <S.Wrapper>
        <h1>Lista de clientes</h1>
        <S.AddCustomer>
          <Link passHref href="/CustomerForm">
            <Button Icon={<PersonAdd width={25} />} size="small" />
          </Link>
        </S.AddCustomer>
        {!CustomersContext.loading ? (
          <List customers={CustomersContext.customers} />
        ) : (
          <Loading />
        )}
        <SelectPage />
      </S.Wrapper>
    </S.Container>
  )

  return null
}
