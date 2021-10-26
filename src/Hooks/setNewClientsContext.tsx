import { useSession } from 'next-auth/react'
import { useCustomersContext } from '../contexts/Customers'
import { handleGetClientDataToSaveInContext } from '../utils/getClientsFromApiAndSave'

export const useSetNewClientsContext = () => {
  const { data } = useSession()
  const { CustomersContext, setCustomersContext } = useCustomersContext()
  async function setNewCustomersContext(page: number) {
    if (data && data.accessToken) {
      const token = data.accessToken
      const currentClientsPage = page || 1
      setCustomersContext!({ ...CustomersContext, loading: true })

      const newClientsState = await handleGetClientDataToSaveInContext(
        currentClientsPage,
        token
      )
      if (!newClientsState) return
      setCustomersContext!(newClientsState)
    }
  }

  return setNewCustomersContext
}
