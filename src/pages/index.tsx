import { useSession } from 'next-auth/react'
import Router from 'next/router'
import { useEffect } from 'react'
import { Clientes as ClientesComponent } from '../templates/Clientes'

export default function Clientes() {
  const { data } = useSession()
  useEffect(() => {
    console.log(data)
    if (!data) {
      Router.push('/login')
    }
  }, [])

  return <div>{data && data.acessToken ? <ClientesComponent /> : null}</div>
}
