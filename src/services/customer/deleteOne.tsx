import { Api } from '../../api'

export const DeleteOne = async (
  id: string,
  token: string
): Promise<boolean> => {
  const response = await Api.delete(`/client/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (response.status !== 200) return false

  return true
}
