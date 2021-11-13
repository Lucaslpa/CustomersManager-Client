import { Api } from '../../api'

type Return = {
  login: boolean
  message: string
  token?: string
}

export const LoginAdministrator = async (login: {
  username: string
  password: string
}): Promise<Return> => {
  try {
    const response = await Api.post<{ token: string }>(
      '/administrator/login',
      login
    )
    if (response.status === 400)
      return { login: false, message: 'Admininistrador inexistente' }

    if (response.status !== 200 || !response.data.token)
      return { login: false, message: 'Algo inesperado aconteceu' }

    return {
      login: true,
      message: 'Login bem sucedido',
      token: response.data.token,
    }
  } catch (err) {
    return {
      login: false,
      message: 'Algo de inesperado aconteceu',
    }
  }
}
