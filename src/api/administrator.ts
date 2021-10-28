import { Api } from './api'
import { httpResponse } from '../types/httpResponse'

export const LoginAdministrator = async (login: {
  username: string
  password: string
}): Promise<httpResponse> => {
  const response = await Api.post<httpResponse>('/administrator/login', login)
    .then((e) => e)
    .catch((error) => error.response)
  if (!response)
    return { status: 500, data: { error: 'Internal server error' } }
  return response.data
}
