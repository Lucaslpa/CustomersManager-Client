import { TrashFill } from '@styled-icons/bootstrap'
import { useSession } from 'next-auth/react'
import * as S from './style'
import { useSelectContext } from '../../contexts/select'
import { useClientsContext } from '../../contexts/Clients'

import { Button } from '../Button'
import { ClientDeleteMany } from '../../api/clients'

export type props = {
  hidden?: boolean
}

export const DeleteAll = ({ hidden = false }: props) => {
  const { Selected, setSelected } = useSelectContext()
  const { state, setClientsContext } = useClientsContext()
  const { data } = useSession()

  function handleDeleteFromState() {
    const oldData = state.ClientsData
    const newData = oldData.filter((e) => {
      const find = Selected.find((id) => id === e.id)
      if (find) return null
      return find
    })
    if (newData) {
      setClientsContext!({ ...state, ClientsData: newData! })
    }
  }

  async function handleDeleteAll() {
    if (data && data.accessToken) {
      const DeleteAllResponse = await ClientDeleteMany(
        Selected,
        data.accessToken
      )
      if (DeleteAllResponse) {
        handleDeleteFromState()
      }
    }
  }

  return (
    <S.Wrapper hidden={hidden} data-testid="deleteAll">
      <strong>{Selected?.length} Selecionados</strong>

      <Button
        onClick={() => handleDeleteAll()}
        Icon={<TrashFill width={25} />}
        label="Deletar todos"
      />
    </S.Wrapper>
  )
}
