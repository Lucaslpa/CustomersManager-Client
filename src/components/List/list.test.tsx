import { screen } from '@testing-library/dom'
import { List } from '.'
import { renderConfig } from '../../utils/renderConfig'

describe('List', () => {
  it('should match to snapshot', () => {
    renderConfig(<List />)
    const lista = screen.getByLabelText(/lista/gi)
    expect(lista).toMatchSnapshot()
  })
})
