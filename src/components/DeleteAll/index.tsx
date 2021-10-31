import { TrashFill } from '@styled-icons/bootstrap'
import { useSession } from 'next-auth/react'

import * as S from './style'
import { useSelectContext } from '../../contexts/CustomersSelect'
import { useCustomersContext } from '../../contexts/Customers'
import { Button } from '../Button'
import { DeleteMany } from '../../services/customer/deleteMany'

export type props = {
  hidden?: boolean
}

export const DeleteAll = () => {
  const { Selected, setSelected } = useSelectContext()
  const { CustomersContext, setCustomersContext } = useCustomersContext()
  const { data } = useSession()
  const accessToken = String(data?.accessToken)

  function handleDeleteCustomersFromContext() {
    const oldCustomers = CustomersContext.customers
    const newCustomers = oldCustomers.filter((e) => {
      const find = Selected.find((id) => id === e.id)
      if (find) return null
      return find
    })
    if (newCustomers) {
      setCustomersContext!({ ...CustomersContext, customers: newCustomers! })
      setSelected!([])
    }
  }

  async function handleDeleteManyCustomers() {
    if (data && accessToken) {
      const DeleteAllResponse = await DeleteMany(Selected, accessToken)
      if (DeleteAllResponse) {
        handleDeleteCustomersFromContext()
      }
    }
  }

  return (
    <S.Wrapper hidden={!Selected.length} data-testid="deleteAll">
      <strong>{Selected?.length || 0} Selecionados</strong>

      <Button
        onClick={() => handleDeleteManyCustomers()}
        Icon={<TrashFill width={25} />}
        label="Deletar todos"
      />
    </S.Wrapper>
  )
}
