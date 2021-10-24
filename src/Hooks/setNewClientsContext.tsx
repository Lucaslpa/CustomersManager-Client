import { useEffect } from 'react'
import { useRedirectToLoginIfHasNoSession } from './redirectToLogin'
import { useClientsContext } from '../contexts/Clients'
import { handleGetClientDataToSaveInContext } from '../utils/getClientsFromApiAndSave'

export const useSetNewClientsContext = () => {
  const data = useRedirectToLoginIfHasNoSession()
  const { setClientsContext } = useClientsContext()
  async function setNewClientsContext(page: number) {
    if (data && data.accessToken) {
      const token = data.accessToken
      const currentClientsPage = page || 1
      const newClientsState = await handleGetClientDataToSaveInContext(
        currentClientsPage,
        token
      )
      if (!newClientsState) return
      setClientsContext!(newClientsState)
    }
  }

  return setNewClientsContext
}
