import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { Edit } from '@styled-icons/entypo'
import { TrashFill } from '@styled-icons/bootstrap'
import * as S from './style'
import { Button } from '../Button'
import { Customer } from '../../types/Customer'
import { useSelectContext } from '../../contexts/CustomersSelect'
import { useCustomersContext } from '../../contexts/Customers'
import { DeleteOne } from '../../services/customer/deleteOne'
import { useDeleteCustomer } from './hooks/deleteThisCustomer'
import { useCheckCustomer } from './hooks/checkCustomer'

type props = {
  customer: Customer
}

export const CustomerWeb = ({ customer }: props) => {
  const handleDeleteThisCustomer = useDeleteCustomer()
  const { isChecked, handleCheckCustomer } = useCheckCustomer(customer.id)

  return (
    <S.WrapperWeb aria-label="cliente">
      <td style={{ textAlign: 'center' }}>
        <input
          type="checkbox"
          onChange={(e) => {
            handleCheckCustomer()
          }}
          checked={isChecked}
        />
      </td>
      <td>
        <h3>{customer.name}</h3>
      </td>
      <td>
        <span>{customer.email}</span>
      </td>
      <td style={{ textAlign: 'center' }}>
        <Link passHref href={`/CustomerForm?id=${customer.id}`}>
          <Button Icon={<Edit width={20} />} label="Editar" />
        </Link>
        <Button
          Icon={<TrashFill width={20} />}
          label="Deletar"
          onClick={() => handleDeleteThisCustomer(customer.id)}
        />
      </td>
    </S.WrapperWeb>
  )
}

export const CustomerMobile = ({ customer }: props) => {
  const handleDeleteThisCustomer = useDeleteCustomer()
  const { isChecked, handleCheckCustomer } = useCheckCustomer(customer.id)

  return (
    <S.WrapperMobile
      selected={isChecked}
      aria-label="cliente"
      onClick={() => handleCheckCustomer()}
    >
      <h3>{customer.name}</h3>
      <span>{customer.email}</span>
      <div>
        <Link passHref href={`/CustomerForm?id=${customer.id}`}>
          <Button Icon={<Edit width={20} />} label="Editar" />
        </Link>
        <Button
          Icon={<TrashFill width={20} />}
          label="Deletar"
          onClick={() => handleDeleteThisCustomer(customer.id)}
        />
      </div>
    </S.WrapperMobile>
  )
}
