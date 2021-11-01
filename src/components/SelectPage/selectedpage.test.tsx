import { screen, fireEvent } from '@testing-library/react'
import { SelectPage } from '.'
import { renderConfig } from '../../utils/renderConfig'

jest.mock('next-auth/react', () => ({
  useSession: () => ({
    data: {
      accessToken: '',
    },
  }),
}))

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      page: 1,
    },
  }),
}))

describe('SelectPage', () => {
  it('', () => {
    console.log()
  })
})
