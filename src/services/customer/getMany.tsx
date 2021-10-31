/* eslint-disable camelcase */
import { Api } from '../../api'
import { httpResponse } from '../../types/httpResponse'
import * as ApiTypes from '../../types/Customer'

type customerFromApi = {
  _id?: string
  address: string
  birthday: string
  cpf: string
  email: string
  name: string
  phone: string
  surname: string
  created_at?: string
  updatedAt?: string
  __v?: number
  id?: string
}

export const GetMany = async (
  page: number,
  token: string
): Promise<ApiTypes.CustomerGetMany | null> => {
  const response = await Api.get<httpResponse>(`/clients?page=${page}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (response.data.status !== 200) return null
  const customersFromApi = response.data.data.clients.docs

  const customers = customersFromApi.map((customer: customerFromApi) => {
    delete customer.__v
    customer.id = customer._id
    delete customer._id
    delete customer.created_at
    delete customer.updatedAt

    return customer
  })

  return { ...response.data.data.clients, customers }
}
