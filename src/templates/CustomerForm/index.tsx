import { useRouter } from 'next/router'
import { Back } from '@styled-icons/entypo'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { CustomerForm as Component } from '../../components/CustomerForm'
import * as S from './style'
import { Button } from '../../components/Button'
import { LogOut } from '../../components/LogOut'
import { CustomerToCreate } from '../../types/Customer'
import { GetOne } from '../../services/customer/getOne'

export const CustomerForm = () => {
  const router = useRouter()
  const { id } = router.query
  const { data } = useSession()

  const accessToken = String(data?.accessToken)
  const [Customer, setCustomer] = useState<CustomerToCreate | undefined>()

  async function handleGetCustomer() {
    const customerFromApi = await GetOne(String(id), accessToken)

    if (typeof customerFromApi === 'string') {
      router.push('CustomersList/1')
      return
    }

    setCustomer(customerFromApi)
  }

  useEffect(() => {
    handleGetCustomer()
  }, [data, id])

  return (
    <S.Container>
      <LogOut />
      <S.Wrapper>
        <div>
          <Link passHref href="/CustomersList/1">
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
