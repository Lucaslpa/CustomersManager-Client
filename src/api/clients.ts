import { Api } from './api'
import * as ApiTypes from '../types/cliente'
import { httpResponse } from '../types/httpResponse'

export const ClientDelete = async (
  id: string,
  token: string
): Promise<httpResponse> => {
  const response = await Api.delete<httpResponse>(`/clients/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  console.log('response', response)
  return response.data
}

export const ClientUpdate = async (
  id: string,
  token: string
): Promise<string> => {
  const response: { status: number; data: { success: string } } = await Api.put(
    `/clients/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  return response.data.success
}

export const ClientCreate = async (
  client: ApiTypes.Client,
  token: string
): Promise<ApiTypes.newCreatedClient> => {
  const response = await Api.post(`/clients`, client, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data.newClient
}

export const ClientGet = async (
  id: string,
  token: string
): Promise<ApiTypes.GetClient> => {
  const response = await Api.get(`/clients/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data.client
}

export const ClientGetMany = async (
  page: number,
  token: string
): Promise<ApiTypes.ClientGetMany> => {
  const response = await Api.get<any>(`/clients?page=${page}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((e) => e.data)
    .catch((error) => error.response)
  return response.data.clients
}

export const ClientDeleteMany = async (
  ids: string[],
  token: string
): Promise<number> => {
  const response: {
    status: number
    data: {
      clients: {
        deletedCount: number
      }
    }
  } = await Api.delete(`/clients`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      ids,
    },
  })

  return response.data.clients.deletedCount
}
