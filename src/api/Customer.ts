import { Api } from './api'
import * as ApiTypes from '../types/Customer'
import { httpResponse } from '../types/httpResponse'

export class CustomerApi {
  private readonly token: string

  constructor(token: string) {
    this.token = token
  }

  DeleteOne = async (id: string): Promise<httpResponse> => {
    const response = await Api.delete<httpResponse>(`/clients/${id}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    })
    return response.data
  }

  UpdateOne = async (
    id: string,
    data: ApiTypes.CustomerToUpdate
  ): Promise<boolean> => {
    const response = await Api.put<ApiTypes.CustomerUpdated>(
      `/clients/${id}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }
    )
      .then((res) => res.data)
      .catch((e) => e.response)
    return response.data.success
  }

  CreateOne = async (
    client: ApiTypes.CustomerToCreate | Record<string, unknown>
  ): Promise<ApiTypes.newCreatedCustomer> => {
    const response = await Api.post<ApiTypes.newCreatedCustomer>(
      `/clients`,
      client,
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }
    )
      .then((res) => res.data)
      .catch((e) => e.response)

    const newCreatedClient = response.data.newClient
    return newCreatedClient
  }

  GetOne = async (id: string): Promise<ApiTypes.Customer> => {
    const response = await Api.get<ApiTypes.GetCustomer>(`/clients/${id}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    })
      .then((r) => r.data)
      .catch((e) => e.response)

    let CustomerFromApi = response.data.client
    delete CustomerFromApi.__v
    CustomerFromApi.id = CustomerFromApi._id
    delete CustomerFromApi._id
    CustomerFromApi.birth = CustomerFromApi.birthday
    delete CustomerFromApi.birthday

    return CustomerFromApi
  }

  GetMany = async (page: number): Promise<ApiTypes.CustomerGetMany> => {
    const response = await Api.get<any>(`/clients?page=${page}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    })
      .then((e) => e.data)
      .catch((error) => error.response)
    return response.data.clients
  }

  DeleteMany = async (ids: string[]) => {
    const response = await Api.delete<ApiTypes.DeleteManyCustomers>(
      `/clients`,
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
        data: {
          ids,
        },
      }
    )
      .then((res) => res.data)
      .catch((error) => console.log(error.response))
    if (!response || !response.data) return response
    return response.data.clients.deletedCount
  }
}
