import * as S from './style'
import { ClientMobile, ClientWeb } from '../Client'

export const ListWeb = () => (
  <S.WrapperWeb data-testid="web">
    <S.Thead>
      <tr>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox" />
        </td>

        <td>
          <span>Nome</span>
        </td>

        <td>
          <span>Email</span>
        </td>
        <td />
      </tr>
    </S.Thead>
    <tbody>
      <ClientWeb />
      <ClientWeb />
      <ClientWeb />
      <ClientWeb />
      <ClientWeb />
      <ClientWeb />
      <ClientWeb />
      <ClientWeb />
      <ClientWeb />
    </tbody>
  </S.WrapperWeb>
)

export const ListMobile = () => (
  <S.WrapperMobile data-testid="mobile">
    <ClientMobile />
    <ClientMobile />
    <ClientMobile />
    <ClientMobile />
    <ClientMobile />
    <ClientMobile />
    <ClientMobile />
    <ClientMobile />
    <ClientMobile />
    <ClientMobile />
  </S.WrapperMobile>
)

export const List = () => (
  <S.Wrapper aria-label="lista">
    <ListWeb />
    <ListMobile />
  </S.Wrapper>
)
