import * as S from './style'
import { Button } from '../Button'

export const ClientWeb = () => (
  <S.WrapperWeb aria-label="client">
    <td style={{ textAlign: 'center' }}>
      <input type="checkbox" />
    </td>

    <td>
      <h3>name</h3>
    </td>

    <td>
      <span>algumacoisaemail@</span>
    </td>
    <td style={{ textAlign: 'center' }}>
      <Button text="Deletar" label="Deletar" />
      <Button text="Editar" label="Editar" />
    </td>
  </S.WrapperWeb>
)

export const ClientMobile = () => (
  <S.WrapperMobile aria-label="client">
    <h3>Name</h3>
    <span>algumacoisaemail@gmail.com</span>
    <div>
      <Button text="Deletar" label="Deletar" />
      <Button text="Editar" label="Editar" />
    </div>
  </S.WrapperMobile>
)
