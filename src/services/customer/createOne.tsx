import { Api } from '../../api'
import * as ApiTypes from '../../types/Customer'

type Return = {
  created: boolean
  message: string
}

export const CreateOne = async (
  client: ApiTypes.CustomerToCreate,
  token: string
): Promise<Return> => {
  let response = await Api.post(`/clients`, client, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (response.status === 409)
    return {
      created: false,
      message: 'Cliente já criado',
    }
  if (response.status !== 200)
    return {
      created: false,
      message: 'Falha ao criar cliente',
    }

  return {
    created: true,
    message: 'Sucesso ao criar cliente',
  }
}
