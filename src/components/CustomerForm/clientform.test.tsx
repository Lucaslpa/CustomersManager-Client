import { screen } from '@testing-library/dom'
import { CustomerForm } from '.'
import { renderConfig } from '../../utils/renderConfig'

jest.mock('next-auth/react', () => ({
  useSession: () => ({
    data: {
      accessToken: '',
    },
  }),
}))

jest.mock('next/router', () => ({
  push() {
    return null
  },
  useRouter: () => ({
    query: {
      page: 1,
    },
  }),
}))

describe('CustomerForm', () => {
  it('should match to snapshot', () => {
    renderConfig(<CustomerForm />)
    const form = screen.getByLabelText(/Form/gi)
    expect(form).toMatchSnapshot()
  })
})
