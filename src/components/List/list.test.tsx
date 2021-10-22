import { screen } from '@testing-library/dom'
import { List } from '.'
import { renderConfig } from '../../utils/renderConfig'
import { clientes } from '../../api/ClienteMock'

describe('List', () => {
  it('should match to snapshot', () => {
    renderConfig(<List clients={clientes} />)
    const lista = screen.getByLabelText(/lista/gi)
    expect(lista).toMatchSnapshot()
  })

  it('should hidden table in screen less than 768px', () => {
    renderConfig(<List clients={clientes} />)
    const table = screen.getByTestId('web')
    expect(table).toHaveStyleRule('display', 'none', {
      media: '(max-width: 768px)',
    })
  })

  it('should hidden section in screen greater than 768px', () => {
    renderConfig(<List clients={clientes} />)
    const table = screen.getByTestId('mobile')
    expect(table).toHaveStyleRule('display', 'none', {
      media: '(min-width: 768px)',
    })
  })
})
