import { screen } from '@testing-library/dom'
import { DeleteAll } from '.'
import { renderConfig } from '../../utils/renderConfig'

jest.mock('next-auth/react', () => ({
  useSession: () => ({
    data: {
      accessToken: '',
    },
  }),
}))

describe('DeleteAll', () => {
  it('should match to snapshot', () => {
    renderConfig(<DeleteAll />)
    const deleteAll = screen.getByTestId(/deleteAll/gi)
    expect(deleteAll).toMatchSnapshot()
  })
})
