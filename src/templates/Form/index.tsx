import { useRouter } from 'next/router'
import { Back } from '@styled-icons/entypo'
import Link from 'next/link'
import { ClientForm as Component } from '../../components/ClientForm'
import * as S from './style'
import { Button } from '../../components/Button'

export const ClienteForm = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <S.Container>
      <S.Wrapper>
        <div>
          <Link passHref href="/clientes">
            <Button Icon={<Back width={20} />} />
          </Link>
          <h1>
            {id ? 'Atualizar dados do cliente' : 'Cadastrar novo cliente'}
          </h1>
        </div>

        <Component />
      </S.Wrapper>
    </S.Container>
  )
}
