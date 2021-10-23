import { useEffect } from 'react'
import { ClientGetMany } from '../api/clients'
import { useClientsContext } from '../contexts/Clients/index'

export const useGetClientsFromApiAndSaveInContextClients = (
  Page: number,
  token: string
) => {
  const { state, setClientsContext } = useClientsContext()

  async function handleGetDatasToSaveInApi() {
    try {
      const { docs, hasPrevPage, page, pageCount, totalDocs } =
        await ClientGetMany(Page, token)

      const newDocs = docs
        .map((e) => {
          delete e.__v
          return e
        })
        .map((e) => {
          e.id = e._id
          delete e._id
          return e
        })
      const newState = {
        ClientsData: newDocs,
        hasPrevPage,
        page,
        pageCount,
        totalDocs,
      } as unknown as typeof state

      if (newState) {
        setClientsContext!(newState)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleGetDatasToSaveInApi()
  }, [])

  return state
}
