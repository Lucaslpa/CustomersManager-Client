import { TrashFill } from '@styled-icons/bootstrap'
import { useSession } from 'next-auth/react'
import * as S from './style'
import { useSelectContext } from '../../contexts/CustomersSelect'
import { useCustomersContext } from '../../contexts/Customers'

import { Button } from '../Button'
import { CustomerApi } from '../../api/Customer'

export type props = {
  hidden?: boolean
}

export const DeleteAll = ({ hidden = false }: props) => {
  const { Selected } = useSelectContext()
  const { CustomersContext, setCustomersContext } = useCustomersContext()
  const { data } = useSession()
  const customApi = new CustomerApi(data?.accessToken || '')

  function handleDeleteCustomersContext() {
    const oldCustomers = CustomersContext.Customers
    const newCustomers = oldCustomers.filter((e) => {
      const find = Selected.find((id) => id === e.id)
      if (find) return null
      return find
    })
    if (newCustomers) {
      setCustomersContext!({ ...CustomersContext, Customers: newCustomers! })
    }
  }

  async function handleDeleteManyCustomers() {
    if (data && data.accessToken) {
      const DeleteAllResponse = await customApi.DeleteMany(Selected)
      if (DeleteAllResponse) {
        handleDeleteCustomersContext()
      }
    }
  }

  return (
    <S.Wrapper hidden={hidden} data-testid="deleteAll">
      <strong>{Selected?.length || 0} Selecionados</strong>

      <Button
        onClick={() => handleDeleteManyCustomers()}
        Icon={<TrashFill width={25} />}
        label="Deletar todos"
      />
    </S.Wrapper>
  )
}
