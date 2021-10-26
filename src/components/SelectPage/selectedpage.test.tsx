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

describe('SelectPage', () => {
  it('should  change actual value', () => {
    renderConfig(<SelectPage />)
    const currentPage = screen.getByLabelText(/página atual/gi).textContent

    const goNext = screen.getByLabelText(/próximo/gi)
    expect(currentPage).toBe('1')
    fireEvent.click(goNext)
    const newCurrentPage = screen.getByLabelText(/página atual/gi).textContent

    expect(newCurrentPage).toBe('2')
  })
})
