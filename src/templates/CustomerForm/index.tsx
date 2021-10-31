import { useRouter } from 'next/router'
import { Back } from '@styled-icons/entypo'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CustomerForm as Component } from '../../components/CustomerForm'
import * as S from './style'
import { Button } from '../../components/Button'
import { LogOut } from '../../components/LogOut'
import { CustomerToCreate } from '../../types/Customer'
import { useRedirectToLoginIfHasNoSession } from '../../Hooks/redirectToLogin'
import { GetOne } from '../../services/customer/getOne'

export const CustomerForm = () => {
  const router = useRouter()
  const { id } = router.query

  const data = useRedirectToLoginIfHasNoSession()
  const accessToken = String(data?.accessToken)
  const [Customer, setCustomer] = useState<CustomerToCreate | undefined>()

  async function handleGetCustomer() {
    if (!data || !data.accessToken || !id) return

    const customerFromApi = await GetOne(String(id), accessToken)
    setCustomer(customerFromApi)
  }

  useEffect(() => {
    handleGetCustomer()
  }, [data, id])

  if (!accessToken) return <div />

  return (
    <S.Container>
      <LogOut />
      <S.Wrapper>
        <div>
          <Link href="/CustomersList/1">
            <Button Icon={<Back width={20} />} />
          </Link>
          <h1>
            {Customer ? 'Atualizar dados do cliente' : 'Cadastrar novo cliente'}
          </h1>
        </div>

        <Component customer={Customer} />
      </S.Wrapper>
    </S.Container>
  )
}
