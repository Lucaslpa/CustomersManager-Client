import { CustomerApi } from '../api/Customer'
import { CustomersContext } from '../contexts/Customers/index'

export async function handleGetClientDataToSaveInContext(
  Page: number,
  token: string
) {
  try {
    const customerApi = new CustomerApi(token)

    const { docs, hasPrevPage, page, pageCount, totalDocs, hasNextPage } =
      await customerApi.GetMany(Page)
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
      Customers: newDocs,
      hasPrevPage,
      page,
      pageCount,
      totalDocs,
      hasNextPage,
    } as unknown as CustomersContext

    return newState
  } catch (error) {
    console.log(error)
  }

  return null
}
