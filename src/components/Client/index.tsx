import Link from 'next/link'
import { useEffect, useState } from 'react'
import * as S from './style'
import { Button } from '../Button'
import { Client } from '../../types/cliente'
import { useSelectContext } from '../../contexts/select'

type props = {
  client: Client
}

export const ClientWeb = ({ client }: props) => {
  const { Selected, setSelected } = useSelectContext()
  const [isSelected, setIsSelected] = useState(false)

  function handleCheckUncheck(cpf: string) {
    const verifyIfAlreadyExist = Selected.filter((CPF: string) => CPF === cpf)
    const AlreadyExist = verifyIfAlreadyExist

    if (AlreadyExist.length) {
      const selectedContextWithoutElement = Selected.filter(
        (CPF: string) => CPF !== cpf
      )
      setSelected!(selectedContextWithoutElement)
      return
    }
    setSelected!([...Selected, cpf])
  }

  function handleCheckIfIsSelected() {
    const IsSelected = Selected.filter((CPF: string) => CPF === client.cpf)[0]
    if (IsSelected) setIsSelected(true)
    if (!IsSelected) setIsSelected(false)
  }

  useEffect(() => handleCheckIfIsSelected(), [Selected])

  return (
    <S.WrapperWeb aria-label="cliente">
      <td style={{ textAlign: 'center' }}>
        <input
          type="checkbox"
          onChange={() => handleCheckUncheck(client.cpf)}
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
        <Button text="Deletar" label="Deletar" />
        <Link passHref href={`/cliente?cpf=${client.cpf}`}>
          <Button text="Editar" label="Editar" />
        </Link>
      </td>
    </S.WrapperWeb>
  )
}

export const ClientMobile = ({ client }: props) => (
  <S.WrapperMobile aria-label="client">
    <h3>{client.name}</h3>
    <span>{client.email}</span>
    <div>
      <Button text="Deletar" label="Deletar" />
      <Link href="/cliente?id=1">
        <Button text="Editar" label="Editar" />
      </Link>
    </div>
  </S.WrapperMobile>
)
