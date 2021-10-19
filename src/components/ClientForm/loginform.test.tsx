import { screen } from '@testing-library/dom'
import { ClientForm  } from '.'
import { renderConfig } from '../../utils/renderConfig'

describe('LoginForm', () => {
  it('should match to snapshot', () => {
    renderConfig(<ClientForm />)
    const form = screen.getByLabelText(/Form/gi)
    expect(form).toMatchSnapshot()
  })
})
