import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import * as S from './style'
import { Button } from '../Button'
import { Client } from '../../types/cliente'
import { useSelectContext } from '../../contexts/select'
import { ClientDelete } from '../../api/clients'
import { useClientsContext } from '../../contexts/Clients'

type props = {
  client: Client
}

export const ClientWeb = ({ client }: props) => {
  const { Selected, setSelected } = useSelectContext()
  const [isSelected, setIsSelected] = useState(false)
  const { data } = useSession()
  const { state, setClientsContext } = useClientsContext()

  function handleCheckUncheck(id: string) {
    const verifyIfAlreadyExist = Selected.find((ID) => ID === id)
    const AlreadyExist = verifyIfAlreadyExist

    if (AlreadyExist) {
      const selectedContextWithoutElement = Selected.filter(
        (ID: string) => ID !== id
      )
      setSelected!(selectedContextWithoutElement)
      return
    }
    setSelected!([...Selected, id])
  }

  function handleCheckIfIsSelected() {
    const IsSelected = Selected.find((ID) => ID === client.id)
    if (IsSelected) setIsSelected(true)
    if (!IsSelected) setIsSelected(false)
  }

  useEffect(() => handleCheckIfIsSelected(), [Selected])

  async function handleDeleteThisClient(id: string) {
    if (data && data.accessToken) {
      const res = await ClientDelete(id, data.accessToken)
      if (res.data.success) {
        const newClientsData = state.ClientsData.filter(
          (cliente) => cliente.id !== id
        )
        setClientsContext!({ ...state, ClientsData: newClientsData })
      }
    }
  }

  return (
    <S.WrapperWeb aria-label="cliente">
      <td style={{ textAlign: 'center' }}>
        <input
          type="checkbox"
          onChange={() => handleCheckUncheck(client.id)}
          checked={isSelected}
        />
      </td>
      <td>
        <h3>{client.name}</h3>
      </td>
      <td>
        <span>{client.name}</span>
      </td>
      <td style={{ textAlign: 'center' }}>
        <Button
          text="Deletar"
          label="Deletar"
          onClick={() => handleDeleteThisClient(client.id)}
        />
        <Link passHref href={`/cliente?id=${client.id}`}>
          <Button text="Editar" label="Editar" />
        </Link>
      </td>
    </S.WrapperWeb>
  )
}

export const ClientMobile = ({ client }: props) => {
  const { data } = useSession()

  async function handleDeleteThisClient(id: string) {
    if (data && data.accessToken) {
      ClientDelete(id, data.accessToken)
    }
  }
  return (
    <S.WrapperMobile aria-label="client">
      <h3>{client.name}</h3>
      <span>{client.email}</span>
      <div>
        <Button
          text="Deletar"
          label="Deletar"
          onClick={() => handleDeleteThisClient(client.id)}
          type="button"
        />
        <Link href={`/cliente?id=${client.id}`}>
          <Button text="Editar" label="Editar" type="button" />
        </Link>
      </div>
    </S.WrapperMobile>
  )
}
