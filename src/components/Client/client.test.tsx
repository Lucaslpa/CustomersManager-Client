import { screen } from '@testing-library/dom'
import { ClientMobile, ClientWeb } from '.'
import { renderConfig } from '../../utils/renderConfig'

describe('ClientForm', () => {
  it('clientMobile should match to snapshot', () => {
    renderConfig(<ClientMobile />)
    const cell = screen.getByLabelText('cliente')
    expect(cell).toMatchSnapshot()
  })
  it('clientMobile should match to snapshot', () => {
    renderConfig(<ClientWeb />)
    const cell = screen.getByLabelText('cliente')
    expect(cell).toMatchSnapshot()
  })
})
