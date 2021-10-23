import { useEffect, useState } from 'react'
import * as S from './style'
import { ClientMobile, ClientWeb } from '../Client'
import { Client } from '../../types/cliente'
import { useSelectContext } from '../../contexts/select'
import { DeleteAll } from '../DeleteAll'
import { ClientGetMany } from '../../api/clients'

type props = {
  clients: Client[]
}

export const ListWeb = ({
  clients,
  onCheckAll,
}: {
  clients: Client[]
  onCheckAll: (isCheck: boolean) => void
}) => (
  <S.WrapperWeb data-testid="web">
    <S.Thead>
      <tr>
        <td style={{ textAlign: 'center' }}>
          <input
            type="checkbox"
            onChange={(e) => onCheckAll(e.target.checked)}
          />
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
      {clients.map((client) => (
        <ClientWeb client={client} key={client.cpf} />
      ))}
    </tbody>
  </S.WrapperWeb>
)

export const ListMobile = ({ clients }: props) => (
  <S.WrapperMobile data-testid="mobile">
    {clients.map((client) => (
      <ClientMobile client={client} key={client.cpf} />
    ))}
  </S.WrapperMobile>
)

export const List = ({ clients }: props) => {
  const { Selected, setSelected } = useSelectContext()
  let hiddenDeleteAll = !Selected[0]

  function handleCheckAll(isCheck: boolean) {
    const cpfs = clients.map((client) => client.cpf)
    if (isCheck) {
      setSelected!(cpfs)
      return
    }
    setSelected!([])
  }

  return (
    <S.Wrapper aria-label="lista">
      <DeleteAll hidden={hiddenDeleteAll} />
      <ListWeb clients={clients} onCheckAll={handleCheckAll} />
      <ListMobile clients={clients} />
    </S.Wrapper>
  )
}
