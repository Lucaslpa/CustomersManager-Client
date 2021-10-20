import { screen } from '@testing-library/dom'
import { DeleteAll } from '.'
import { renderConfig } from '../../utils/renderConfig'

describe('DeleteAll', () => {
  it('should match to snapshot', () => {
    renderConfig(<DeleteAll selected={2} />)
    const deleteAll = screen.getByTestId(/deleteAll/gi)
    expect(deleteAll).toMatchSnapshot()
  })
})
