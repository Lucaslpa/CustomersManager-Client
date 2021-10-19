import { screen, fireEvent } from '@testing-library/react'
import { TextField } from '.'
import { renderConfig } from '../../utils/renderConfig'

describe('TextField', () => {
  it('should render warning', () => {
    renderConfig(
      <TextField onChange={() => null} placeholder="Email" error type="email" />
    )
    const input = screen.queryByLabelText(/Email text field/gi)

    expect(input?.parentElement).toMatchSnapshot()
    expect(input?.parentElement).toHaveStyleRule('color', '#fa1919')
    expect(input).toHaveStyleRule('outline-color', '#fa1919')
  })

  it('should exec func onChange', () => {
    const funcMock = jest.fn(() => null)
    renderConfig(
      <TextField
        onChange={() => funcMock()}
        placeholder="Email"
        error
        type="email"
      />
    )
    const input = screen.queryByLabelText(/Email text field/gi)
    fireEvent.change(input!, { target: { value: 'email@gmail.com' } })
    expect(funcMock).toBeCalled()
  })

  it('should render medium size', () => {
    renderConfig(
      <TextField
        onChange={() => null}
        placeholder="Email"
        size="medium"
        type="email"
      />
    )
    const input = screen.queryByLabelText(/Email text field/gi)
    expect(input?.parentElement).toHaveStyleRule('max-width', '30rem')
  })

  it('should render small  size', () => {
    renderConfig(
      <TextField
        onChange={() => null}
        placeholder="Email"
        size="small"
        type="email"
      />
    )
    const input = screen.queryByLabelText(/Email text field/gi)
    expect(input?.parentElement).toHaveStyleRule('max-width', '20rem')
  })

  it('should render big  size', () => {
    renderConfig(
      <TextField
        onChange={() => null}
        placeholder="Email"
        size="big"
        type="email"
      />
    )
    const input = screen.queryByLabelText(/Email text field/gi)
    expect(input?.parentElement).toHaveStyleRule('max-width', '100%')
  })

  it('should hidden label when label props is false', () => {
    renderConfig(
      <TextField
        onChange={() => null}
        placeholder="Email"
        size="big"
        type="email"
        label={false}
      />
    )
    const label = screen.queryByText(/Email/gi)
    expect(label).not.toBeInTheDocument()
  })
})
