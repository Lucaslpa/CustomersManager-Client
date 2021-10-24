import Router, { useRouter } from 'next/router'
import { Back } from '@styled-icons/entypo'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { ClientForm as Component } from '../../components/ClientForm'
import * as S from './style'
import { Button } from '../../components/Button'
import { LogOut } from '../../components/LogOut'
import { ClientGet } from '../../api/clients'
import { Client as ClientType } from '../../types/cliente'

export const ClienteForm = () => {
  const router = useRouter()
  const { data } = useSession()
  const [Client, setClient] = useState<ClientType | undefined>()
  const { id } = router.query

  async function handleGetClient() {
    const ClientFromApi = await ClientGet(String(id), data!.accessToken!)

    if (ClientFromApi) {
      setClient(ClientFromApi)
    }
  }

  useEffect(() => {
    if (data && data.accessToken && id) {
      handleGetClient()
    }
  }, [data, id])
  return (
    <S.Container>
      <LogOut />
      <S.Wrapper>
        <div>
          <Link href="/">
            <Button Icon={<Back width={20} />} />
          </Link>
          <h1>
            {id ? 'Atualizar dados do cliente' : 'Cadastrar novo cliente'}
          </h1>
        </div>

        <Component client={Client} />
      </S.Wrapper>
    </S.Container>
  )
}
