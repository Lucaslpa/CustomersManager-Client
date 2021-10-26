import { screen } from '@testing-library/dom'
import { List } from '.'
import { renderConfig } from '../../utils/renderConfig'
import { Customers } from '../../api/customerMock'

jest.mock('next-auth/react', () => ({
  useSession: () => ({
    data: {
      accessToken: '',
    },
  }),
}))

describe('List', () => {
  it('should match to snapshot', () => {
    renderConfig(<List customers={Customers} />)
    const lista = screen.getByLabelText(/lista/gi)
    expect(lista).toMatchSnapshot()
  })

  it('should hidden table in screen less than 768px', () => {
    renderConfig(<List customers={Customers} />)
    const table = screen.getByTestId('web')
    expect(table).toHaveStyleRule('display', 'none', {
      media: '(max-width: 768px)',
    })
  })

  it('should hidden section in screen greater than 768px', () => {
    renderConfig(<List customers={Customers} />)
    const table = screen.getByTestId('mobile')
    expect(table).toHaveStyleRule('display', 'none', {
      media: '(min-width: 768px)',
    })
  })
})
