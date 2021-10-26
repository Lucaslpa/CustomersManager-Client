import Router, { useRouter } from 'next/router'
import { Back } from '@styled-icons/entypo'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { CustomerForm as Component } from '../../components/CustomerForm'
import * as S from './style'
import { Button } from '../../components/Button'
import { LogOut } from '../../components/LogOut'
import { CustomerApi } from '../../api/Customer'
import { Customer as CustomerType } from '../../types/Customer'
import { useRedirectToLoginIfHasNoSession } from '../../Hooks/redirectToLogin'

export const CustomerForm = () => {
  const router = useRouter()
  const { id } = router.query

  const data = useRedirectToLoginIfHasNoSession()

  const [Customer, setCustomer] = useState<CustomerType | undefined>()
  const customerApi = new CustomerApi(data?.accessToken || '')

  async function handleGetCustomer() {
    if (!data || !data.accessToken || !id) return
    customerApi
      .GetOne(String(id))
      .then((customer) => setCustomer(customer))
      .catch((error) => console.log(error.response))
  }

  useEffect(() => {
    handleGetCustomer()
  }, [data, id])

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
