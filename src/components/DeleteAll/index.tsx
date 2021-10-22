import { TrashFill } from '@styled-icons/bootstrap'
import * as S from './style'
import { useSelectContext } from '../../contexts/select'
import { Button } from '../Button'

export type props = {
  hidden?: boolean
}

export const DeleteAll = ({  hidden = false }: props) => {
  const { Selected, setSelected } = useSelectContext()

  return (
    <S.Wrapper hidden={hidden} data-testid="deleteAll">
      <strong>{Selected?.length} Selecionados</strong>

      <Button Icon={<TrashFill width={25} />} label="Deletar todos" />
    </S.Wrapper>
  )
}
