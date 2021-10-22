import { Api } from './api'
import { Client } from '../types/cliente'

export const ClientDelete = async (
  id: string,
  token: string
): Promise<string> => {
  const response: { status: number; data: { success: string } } =
    await Api.delete(`/clients/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

  return response.data.success
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

type newClient = {
  address: string
  birthday: string
  cpf: string
  email: string
  name: string
  phone: string
  surname: string
  _id: string
  __v: number
}

export const ClientCreate = async (
  client: Client,
  token: string
): Promise<newClient> => {
  const response: {
    status: number
    data: {
      newClient: newClient
    }
  } = await Api.post(`/clients`, client, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data.newClient
}

type returnClient = {
  _id: string
  address: string
  birthday: string
  cpf: string
  email: string
  name: string
  phone: string
  surname: string
  __v: number
}

export const ClientGet = async (
  id: string,
  token: string
): Promise<newClient> => {
  const response: {
    status: number
    data: {
      client: returnClient
    }
  } = await Api.get(`/clients/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data.client
}

export const ClientGetMany = async (
  page: number,
  token: string
): Promise<returnClient[]> => {
  const response: {
    status: number
    data: {
      clients: returnClient[]
    }
  } = await Api.get(`/clients?page=${page}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

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
