import { Api } from '../../api'
import { httpResponse } from '../../types/httpResponse'
import * as ApiTypes from '../../types/Customer'

export const GetOne = async (
  id: string,
  token: string
): Promise<ApiTypes.Customer | string> => {
  const response = await Api.get<{ error: string } | { client: any }>(
    `/client/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  if ('error' in response.data) {
    return response.data.error
  }
  console.log(response)

  let CustomerFromApi = response.data.client
  delete CustomerFromApi.__v
  CustomerFromApi.id = CustomerFromApi._id
  delete CustomerFromApi._id

  return CustomerFromApi
}
