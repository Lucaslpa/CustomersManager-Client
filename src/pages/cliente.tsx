import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import Router from 'next/router'
import { ClienteForm } from '../templates/Form'

export default function Index() {
  const { data } = useSession()
  useEffect(() => {
    if (!data) {
      Router.push('/login')
    }
  }, [])

  return <div>{data && data.acessToken ? <ClienteForm /> : null}</div>
}
