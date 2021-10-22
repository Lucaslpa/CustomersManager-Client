import { Api } from './api'

export const LoginAdministrator = async (): Promise<string> => {
  const jwtToken: { status: number; data: { token: string } } = await Api.post(
    '/administrator/login'
  )

  return jwtToken.data.token
}
