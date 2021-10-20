import { useState } from 'react'

export const useManageLabelErrorLogin = () => {
  const [loginError, setLoginError] = useState<boolean>(false)

  function openError() {
    if (loginError) return
    setLoginError(true)
    setTimeout(() => setLoginError(false), 2000)
  }

  return {loginError, openError}
}
