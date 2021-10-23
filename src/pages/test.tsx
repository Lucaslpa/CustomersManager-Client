import { useEffect } from 'react'
import { LoginAdministrator } from '../api/admnistrator'

export default function Test() {
  useEffect(() => {
    async function p() {
      const a = await LoginAdministrator({
        password: '123',
        username: 'lucass',
      })
      console.log('bom', a)
      return a
    }
    p()
  }, [])

  return (
    <div>
      <h1>hello teste</h1>
    </div>
  )
}
