import { useSession } from 'next-auth/react'
import Router from 'next/router'
import { useEffect } from 'react'
import { useGetClientsFromApiAndSaveInContextClients } from '../Hooks/getClientsFromApiAndSave'
import { Clientes as ClientesComponent } from '../templates/Clientes'

export default function Clientes() {
  const { data } = useSession()
  useEffect(() => {
    if (!data || !data.accessToken) {
      Router.push('/login')
    }
  }, [])

  useGetClientsFromApiAndSaveInContextClients(1, data!.accessToken!)

  return <div>{data && data.accessToken ? <ClientesComponent /> : null}</div>
}
