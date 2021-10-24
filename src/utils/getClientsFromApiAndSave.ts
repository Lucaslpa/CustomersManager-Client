import { ClientGetMany } from '../api/clients'
import { state } from '../contexts/Clients/index'

export async function handleGetClientDataToSaveInContext(
  Page: number,
  token: string
) {
  try {
    const { docs, hasPrevPage, page, pageCount, totalDocs, hasNextPage } =
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
      hasNextPage,
    } as unknown as state

    return newState
  } catch (error) {
    console.log(error)
  }

  return null
}
