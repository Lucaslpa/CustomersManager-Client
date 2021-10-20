import { screen } from '@testing-library/dom'
import { List } from '.'
import { renderConfig } from '../../utils/renderConfig'

describe('List', () => {
  it('should match to snapshot', () => {
    renderConfig(<List />)
    const lista = screen.getByLabelText(/lista/gi)
    expect(lista).toMatchSnapshot()
  })

  it('should hidden table in screen less than 768px', () => {
    renderConfig(<List />)
    const table = screen.getByTestId('web')
    expect(table).toHaveStyleRule('display', 'none', {
      media: '(max-width: 768px)',
    })
  })

  it('should hidden section in screen greater than 768px', () => {
    renderConfig(<List />)
    const table = screen.getByTestId('mobile')
    expect(table).toHaveStyleRule('display', 'none', {
      media: '(min-width: 768px)',
    })
  })
})
