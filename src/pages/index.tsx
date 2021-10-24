import { useEffect } from 'react'
import { handleGetClientDataToSaveInContext } from '../utils/getClientsFromApiAndSave'
import { Clientes as ClientesComponent } from '../templates/Clientes'

import { useSetNewClientsContext } from '../Hooks/setNewClientsContext'

export default function Clientes() {
  const setNewClientsContext = useSetNewClientsContext()
  useEffect(() => {
    setNewClientsContext(1)
  }, [])

  return (
    <div>
      <ClientesComponent />
    </div>
  )
}
