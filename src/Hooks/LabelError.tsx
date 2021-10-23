import { useState } from 'react'

export const useManageLabelErrorLogin = () => {
  const [Error, setError] = useState<string>('')

  function openError(message: string) {
    if (Error) return
    setError(message)
    setTimeout(() => setError(''), 2000)
  }

  return { Error, openError }
}
