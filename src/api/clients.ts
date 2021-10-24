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
  return response.data
}

export const ClientUpdate = async (
  id: string,
  data: ApiTypes.ClientToUpdate,
  token: string
): Promise<boolean> => {
  const response = await Api.put<ApiTypes.ClientUpdate>(
    `/clients/${id}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((res) => res.data)
    .catch((e) => e.response)
  return response.data.success
}

export const ClientCreate = async (
  client: ApiTypes.ClientToCreate,
  token: string
): Promise<ApiTypes.newCreatedClient> => {
  const response = await Api.post<ApiTypes.newCreatedClient>(
    `/clients`,
    client,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((res) => res.data)
    .catch((e) => e.response)

  const newCreantedClient = response.data.newClient
  return newCreantedClient
}

export const ClientGet = async (
  id: string,
  token: string
): Promise<ApiTypes.Client> => {
  const response = await Api.get<ApiTypes.GetClient>(`/clients/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((r) => r.data)
    .catch((e) => e.response)
  let ClientFromApi = response.data.client
  delete ClientFromApi.__v
  ClientFromApi.id = ClientFromApi._id
  delete ClientFromApi._id
  ClientFromApi.birth = ClientFromApi.birthday
  delete ClientFromApi.birthday

  return ClientFromApi
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

export const ClientDeleteMany = async (ids: string[], token: string) => {
  const response = await Api.delete<ApiTypes.DeleteAll>(`/clients`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      ids,
    },
  })
    .then((res) => res.data)
    .catch((error) => console.log(error.response))
  if (!response || !response.data) return response
  return response.data.clients.deletedCount
}
