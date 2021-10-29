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
  ): Promise<httpResponse> => {
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

    if (response.status !== 200) {
      return {
        status: response.status,
        data: {
          updated: false,
          message: 'Falha ao tentar atualizar cliente',
        },
      }
    }

    return {
      status: response.status,
      data: {
        updated: true,
        message: 'Cliente atualizado com sucesso',
      },
    }
  }

  CreateOne = async (
    client: ApiTypes.CustomerToCreate | Record<string, unknown>
  ): Promise<httpResponse> => {
    let response = await Api.post<httpResponse>(`/clients`, client, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    })

    if (response.data.status === 409)
      return {
        status: response.data.status,
        data: {
          created: false,
          message: 'Cliente já criado',
        },
      }
    if (response.data.status !== 200)
      return {
        status: response.data.status,
        data: {
          created: false,
          message: 'Falha ao criar cliente',
        },
      }

    return {
      status: response.data.status,
      data: {
        created: true,
        message: 'Sucesso ao criar cliente',
      },
    }
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
