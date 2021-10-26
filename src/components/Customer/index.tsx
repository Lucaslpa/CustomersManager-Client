import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import * as S from './style'
import { Button } from '../Button'
import { Customer } from '../../types/Customer'
import { useSelectContext } from '../../contexts/CustomersSelect'
import { CustomerApi } from '../../api/Customer'
import { useCustomersContext } from '../../contexts/Customers'

type props = {
  customer: Customer
}

export const CustomerWeb = ({ customer }: props) => {
  const { Selected, setSelected } = useSelectContext()
  const [isSelected, setIsSelected] = useState(false)
  const { data } = useSession()
  const customerApi = new CustomerApi(data?.accessToken || '')
  const { CustomersContext, setCustomersContext } = useCustomersContext()

  function handleCheckUncheck(id: string) {
    const verifyIfAlreadyExist = Selected.find((ID) => ID === id)
    const AlreadyExist = verifyIfAlreadyExist

    if (AlreadyExist) {
      const selectedContextWithoutElement = Selected.filter(
        (ID: string) => ID !== id
      )
      setSelected!(selectedContextWithoutElement)
      return
    }
    setSelected!([...Selected, id])
  }

  function handleCheckIfIsSelected() {
    const IsSelected = Selected.find((ID) => ID === customer.id)
    if (IsSelected) setIsSelected(true)
    if (!IsSelected) setIsSelected(false)
  }

  useEffect(() => handleCheckIfIsSelected(), [Selected])

  async function handleDeleteThisClient(id: string) {
    if (data && data.accessToken) {
      const res = await customerApi.DeleteOne(id)
      if (res.data.success) {
        const newCustomers = CustomersContext.Customers.filter(
          (customerFilter) => customerFilter.id !== id
        )
        setCustomersContext!({
          ...CustomersContext,
          Customers: newCustomers,
        })
      }
    }
  }

  return (
    <S.WrapperWeb aria-label="cliente">
      <td style={{ textAlign: 'center' }}>
        <input
          type="checkbox"
          onChange={() => handleCheckUncheck(customer.id)}
          checked={isSelected}
        />
      </td>
      <td>
        <h3>{customer.name}</h3>
      </td>
      <td>
        <span>{customer.name}</span>
      </td>
      <td style={{ textAlign: 'center' }}>
        <Button
          text="Deletar"
          label="Deletar"
          onClick={() => handleDeleteThisClient(customer.id)}
        />
        <Link passHref href={`/CustomerForm?id=${customer.id}`}>
          <Button text="Editar" label="Editar" />
        </Link>
      </td>
    </S.WrapperWeb>
  )
}

export const CustomerMobile = ({ customer }: props) => {
  const { data } = useSession()
  const customerApi = new CustomerApi(data?.accessToken || '')
  async function handleDeleteThisClient(id: string) {
    if (data && data.accessToken) {
      customerApi.DeleteOne(id)
    }
  }
  return (
    <S.WrapperMobile aria-label="cliente">
      <h3>{customer.name}</h3>
      <span>{customer.email}</span>
      <div>
        <Button
          text="Deletar"
          label="Deletar"
          onClick={() => handleDeleteThisClient(customer.id)}
          type="button"
        />
        <Link href={`/CustomerForm?id=${customer.id}`}>
          <Button text="Editar" label="Editar" type="button" />
        </Link>
      </div>
    </S.WrapperMobile>
  )
}