import { screen } from '@testing-library/dom'
import { CustomerMobile, CustomerWeb } from './index'
import { renderConfig } from '../../utils/renderConfig'
import { Customer } from '../../api/customerMock'

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
  useRoute() {
    return {
      query: {
        page: 1,
      },
    }
  },
}))

describe('Customer', () => {
  it('CustomerMobile should match to snapshot', () => {
    renderConfig(<CustomerMobile customer={Customer} />)
    const cell = screen.getByLabelText('cliente')
    expect(cell).toMatchSnapshot()
  })
  it('CustomerWeb should match to snapshot', () => {
    renderConfig(<CustomerWeb customer={Customer} />)
    const cell = screen.getByLabelText('cliente')
    expect(cell).toMatchSnapshot()
  })
})
