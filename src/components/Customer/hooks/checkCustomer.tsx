import { useState, useEffect } from 'react'
import { useSelectContext } from '../../../contexts/CustomersSelect'

export const useCheckCustomer = (customerID: string) => {
  const { Selected, setSelected } = useSelectContext()
  const [isChecked, setIsChecked] = useState(false)

  function handleCheckCustomer() {
    const verifyIfIsInSelectedContext = Selected.find((ID) => ID === customerID)
    const checked = verifyIfIsInSelectedContext

    if (checked) {
      const selectedContextWithoutElement = Selected.filter(
        (ID: string) => ID !== customerID
      )
      setSelected!(selectedContextWithoutElement)
      return
    }
    setSelected!([...Selected, customerID])
  }

  function handleCheckIfIsSelected() {
    const IsSelected = Selected.find((ID) => ID === customerID)
    if (IsSelected) setIsChecked(true)
    if (!IsSelected) setIsChecked(false)
  }

  useEffect(() => handleCheckIfIsSelected(), [Selected])

  return {
    isChecked,
    handleCheckCustomer,
  }
}
