import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { Clientes as ClientesComponent } from '../templates/Clientes'

export default function Clientes() {
  const c = useSession()
  useEffect(() => console.log('aaa', c.data), [c.data])

  return (
    <div>
      <ClientesComponent />
    </div>
  )
}
