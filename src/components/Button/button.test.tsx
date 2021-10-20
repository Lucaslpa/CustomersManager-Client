import { screen } from '@testing-library/react'
import { Alarm } from '@styled-icons/bootstrap'
import { Button } from '.'
import { renderConfig } from '../../utils/renderConfig'

describe('Button', () => {
  it('Should render Button text if neither url or text is passed', () => {
    renderConfig(<Button />)

    const button = screen.getByText(/Button/gi)
    expect(button).toMatchSnapshot()
    expect(button).toBeInTheDocument()
  })
  it('Should render Button with a custom text', () => {
    renderConfig(<Button text="Login" />)

    const button = screen.getByText(/Login/gi)
    expect(button).toMatchSnapshot()
    expect(button).toBeInTheDocument()
  })

  it('Should render Button with a icon ', () => {
    renderConfig(<Button Icon={<Alarm />} label="Icon" />)

    const button = screen.getByRole('button')
    expect(button).toMatchSnapshot()
    expect(button.firstChild).toBeInTheDocument()
  })

  it('Should render Button small size', () => {
    renderConfig(<Button size="small" Icon={<Alarm />} />)

    const button = screen.getByRole('button')
    expect(button).toMatchSnapshot()
    expect(button).toHaveStyleRule('padding', '0.5rem')
  })

  it('Should render Button medium size', () => {
    renderConfig(<Button size="medium" text="Login" />)

    const button = screen.getByText(/Login/gi)
    expect(button).toMatchSnapshot()
    expect(button).toHaveStyleRule('max-width', '10rem')
  })
  it('Should render Button big size', () => {
    renderConfig(<Button size="big" text="Login" />)

    const button = screen.getByText(/Login/gi)
    expect(button).toMatchSnapshot()
    expect(button).toHaveStyleRule('max-width', '30rem')
  })

  it('Should execute function on click', () => {
    const funcMock = jest.fn(() => null)
    renderConfig(
      <Button text="Login" onClick={() => funcMock()} label="icon" />
    )

    const button = screen.getByLabelText('icon')
    button.click()
    expect(button).toMatchSnapshot()
    expect(funcMock).toBeCalledTimes(1)
  })
})
