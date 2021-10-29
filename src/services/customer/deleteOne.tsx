import { Api } from '../../api'
import { httpResponse } from '../../types/httpResponse'

export const DeleteOne = async (
  id: string,
  token: string
): Promise<boolean> => {
  const response = await Api.delete<httpResponse>(`/clients/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (response.data.status !== 200) return false

  return true
}
