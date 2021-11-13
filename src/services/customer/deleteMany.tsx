import { Api } from '../../api'

export const DeleteMany = async (
  ids: string[],
  token: string
): Promise<boolean> => {
  const response = await Api.delete(`/clients`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      ids,
    },
  })

  if (response.status !== 200) return false
  return true
}
