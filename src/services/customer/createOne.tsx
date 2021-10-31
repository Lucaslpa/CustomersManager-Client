import { Api } from '../../api'
import { httpResponse } from '../../types/httpResponse'
import * as ApiTypes from '../../types/Customer'

type Return = {
  created: boolean
  message: string
}

export const CreateOne = async (
  client: ApiTypes.CustomerToCreate,
  token: string
): Promise<Return> => {
  let response = await Api.post<httpResponse>(`/clients`, client, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  console.log(response)

  if (response.data.status === 409)
    return {
      created: false,
      message: 'Cliente já criado',
    }
  if (response.data.status !== 200)
    return {
      created: false,
      message: 'Falha ao criar cliente',
    }

  return {
    created: true,
    message: 'Sucesso ao criar cliente',
  }
}
