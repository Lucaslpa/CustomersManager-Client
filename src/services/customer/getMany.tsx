/* eslint-disable camelcase */
import { Api } from '../../api'
import { httpResponse } from '../../types/httpResponse'
import * as ApiTypes from '../../types/Customer'

type customerFromApi = {
  id?: string
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
}

export const GetMany = async (
  page: number,
  token: string
): Promise<ApiTypes.CustomerGetMany | null> => {
  try {
    const response = await Api.get<{ clients: any }>(`/clients/${page}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (response.status !== 200) return null
    const customersFromApi = response.data.clients.docs
    delete response.data.clients.docs

    const customers = customersFromApi.map((customer: customerFromApi) => {
      delete customer.__v
      customer.id = customer._id
      delete customer._id
      delete customer.created_at
      delete customer.updatedAt

      return customer
    })

    console.log('customers', customers)

    return { ...response.data.clients, customers }
  } catch (error) {
    return null
  }
}
