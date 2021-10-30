import { Api } from '../../api'
import { httpResponse } from '../../types/httpResponse'

type Return = {
  login: boolean
  message: string
  token?: string
}

export const LoginAdministrator = async (login: {
  username: string
  password: string
}): Promise<Return> => {
  const response = await Api.post<httpResponse>('/administrator/login', login)

  if (response.data.status === 400)
    return { login: false, message: 'Admninistrador inexistente' }
  if (response.data.status !== 200 || !response.data.data.token)
    return { login: false, message: 'Algo inesperado aconteceu' }

  return {
    login: true,
    message: 'Login bem sucedido',
    token: response.data.data.token,
  }
}
