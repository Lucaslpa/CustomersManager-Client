import { useRedirectToLoginIfHasNoSession } from '../Hooks/redirectToLogin'

export const Index = () => {
  useRedirectToLoginIfHasNoSession()
  return <></>
}
