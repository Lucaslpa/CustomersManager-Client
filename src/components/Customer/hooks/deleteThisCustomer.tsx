import { useSession } from 'next-auth/react'
import { DeleteOne } from '../../../services/customer/deleteOne'
import { useCustomersContext } from '../../../contexts/Customers'

export const useDeleteCustomer = () => {
  const { data } = useSession()
  const accessToken = String(data?.accessToken)
  const { CustomersContext, setCustomersContext } = useCustomersContext()

  function handleDeleteCustomerFromCustomersContext(customerID: string) {
    const newCustomers = CustomersContext.customers.filter(
      (customerFilter) => customerFilter.id !== customerID
    )
    setCustomersContext!({
      ...CustomersContext,
      customers: newCustomers,
    })
  }

  async function handleDeleteThisClient(customerID: string) {
    if (data && accessToken) {
      const deleteFromApi = await DeleteOne(customerID, accessToken)

      if (deleteFromApi) {
        handleDeleteCustomerFromCustomersContext(customerID)
      }
    }
  }

  return handleDeleteThisClient
}
