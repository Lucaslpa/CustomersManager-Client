import { useSession } from 'next-auth/react'
import { useCustomersContext } from '../contexts/Customers'
import { getAndConvertCustomersFromApiToContextFormat } from '../utils/getClientsFromApiAndSave'

export const useSetNewClientsContext = () => {
  const { data } = useSession()
  const { CustomersContext, setCustomersContext } = useCustomersContext()

  async function setNewCustomersContext(page: number) {
    if (data && data.accessToken) {
      const token = data.accessToken
      const currentPage = page || 1
      setCustomersContext!({ ...CustomersContext, loading: true })

      const newCustomersContext =
        await getAndConvertCustomersFromApiToContextFormat(currentPage, token)
      if (!newCustomersContext) return
      setCustomersContext!(newCustomersContext)
    }
  }

  return setNewCustomersContext
}
