import { TrashFill } from '@styled-icons/bootstrap'
import * as S from './style'
import { Button } from '../Button'

export type props = {
  hidden?: boolean
  selected: number
}

export const DeleteAll = ({ selected = 0, hidden = false }: props) => (
  <S.Wrapper hidden={hidden}>
    <strong>{selected} Selecionados</strong>

    <Button Icon={<TrashFill width={25} />} label="Deletar todos" />
  </S.Wrapper>
)
