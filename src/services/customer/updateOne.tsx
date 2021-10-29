import { Api } from '../../api'
import { httpResponse } from '../../types/httpResponse'
import * as ApiTypes from '../../types/Customer'

type Return = {
  updated: boolean
  message: string
}

export const UpdateOne = async (
  id: string,
  data: ApiTypes.CustomerToUpdate,
  token: string
): Promise<Return> => {
  const response = await Api.put<httpResponse>(`/clients/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (response.data.status !== 200) {
    return {
      updated: false,
      message: 'Falha ao tentar atualizar cliente',
    }
  }

  return {
    updated: true,
    message: 'Cliente atualizado com sucesso',
  }
}
