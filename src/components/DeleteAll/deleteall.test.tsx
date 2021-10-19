import { screen } from '@testing-library/dom'
import { DeleteAll } from '.'
import { renderConfig } from '../../utils/renderConfig'

describe('DeleteAll', () => {
  it('should match to snapshot', () => {
    renderConfig(<DeleteAll selected={2} />)
    const deleteAll = screen.getByLabelText(/Deletar todos/gi).parentElement
    expect(deleteAll).toMatchSnapshot()
  })
})
