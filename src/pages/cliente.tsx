import Router from 'next/router'
import { ClienteForm } from '../templates/Form'
import { useRedirectToLoginIfHasNoSession } from '../Hooks/redirectToLogin'

export default function Index() {
  const data = useRedirectToLoginIfHasNoSession()
  return <div>{data && data.accessToken ? <ClienteForm /> : null}</div>
}
