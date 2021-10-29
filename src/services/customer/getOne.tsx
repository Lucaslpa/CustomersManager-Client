import { Api } from '../../api'
import { httpResponse } from '../../types/httpResponse'
import * as ApiTypes from '../../types/Customer'

export const GetOne = async (
  id: string,
  token: string
): Promise<ApiTypes.Customer> => {
  const response = await Api.get<httpResponse>(`/clients/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  let CustomerFromApi = response.data.data.client
  delete CustomerFromApi.__v
  CustomerFromApi.id = CustomerFromApi._id
  delete CustomerFromApi._id

  return CustomerFromApi
}
