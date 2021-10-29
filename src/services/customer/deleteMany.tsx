import { Api } from '../../api'
import { httpResponse } from '../../types/httpResponse'

export const DeleteMany = async (
  ids: string[],
  token: string
): Promise<boolean> => {
  const response = await Api.delete<httpResponse>(`/clients`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      ids,
    },
  })

  if (response.data.status !== 200) return false
  return true
}
