import { screen } from '@testing-library/dom'
import { LoginForm } from '.'
import { renderConfig } from '../../utils/renderConfig'



describe('LoginForm', () => {
  it('should match to snapshot', () => {
    renderConfig(<LoginForm />)
    const form = screen.getByLabelText(/Form/gi)
    expect(form).toMatchSnapshot()
  })
})
