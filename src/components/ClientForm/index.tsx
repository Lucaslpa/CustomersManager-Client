import router from 'next/router'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import * as S from './styles'
import { TextField } from '../TextField'
import { Button } from '../Button'
import { Client, ClientToCreate } from '../../types/cliente'
import { ClientUpdate, ClientCreate } from '../../api/clients'

type props = {
  client?: Client
}

export const ClientForm = ({ client }: props) => {
  const [FormData, setFormData] = useState<
    ClientToCreate | Record<string, unknown>
  >({})
  const { data } = useSession()

  async function handleSendForm() {
    if (!data || !data.accessToken || !FormData) return
    if (client) {
      await ClientUpdate(client.id, FormData, data.accessToken)
      return
    }
    if (
      FormData.address &&
      FormData.birthday &&
      FormData.cpf &&
      FormData.email &&
      FormData.name &&
      FormData.phone &&
      FormData.surname
    ) {
      await ClientCreate(FormData, data.accessToken)
    }
  }
  return (
    <S.Wrapper aria-label="Form">
      <S.FieldSet>
        <legend>Nome Completo</legend>
        <TextField
          placeholder="Nome"
          size="big"
          type="text"
          onChange={(textValue) => {
            setFormData({ ...FormData, name: textValue })
          }}
          defaultValue={client ? client.name : ''}
        />
        <TextField
          placeholder="Sobrenome"
          size="big"
          type="text"
          onChange={(textValue) => {
            setFormData({ ...FormData, surname: textValue })
          }}
          defaultValue={client ? client.surname : ''}
        />
      </S.FieldSet>

      <S.FieldSet column>
        <legend>Contato</legend>
        <TextField
          placeholder="Email"
          size="big"
          type="email"
          onChange={(textValue) => {
            setFormData({ ...FormData, email: textValue })
          }}
          defaultValue={client ? client.email : ''}
        />
        <div id="flex">
          <TextField
            placeholder="Telefone"
            size="big"
            type="tel"
            onChange={(textValue) => {
              setFormData({ ...FormData, phone: textValue })
            }}
            defaultValue={client ? client.phone : ''}
          />
          <TextField
            placeholder="Endereço"
            size="big"
            type="text"
            onChange={(textValue) => {
              setFormData({ ...FormData, address: textValue })
            }}
            defaultValue={client ? client.address : ''}
          />
        </div>
      </S.FieldSet>

      <S.FieldSet>
        <legend>Outros</legend>
        <TextField
          placeholder="CPF"
          size="big"
          type="text"
          onChange={(textValue) => {
            setFormData({ ...FormData, cpf: textValue })
          }}
          defaultValue={client ? client.cpf : ''}
        />
        <TextField
          placeholder="Data de Nascimento"
          size="big"
          type="text"
          onChange={(textValue) => {
            setFormData({ ...FormData, birthday: textValue })
          }}
          defaultValue={client ? client.birth : ''}
        />
      </S.FieldSet>

      <S.buttonWrapper>
        <Button
          text={client ? 'Salvar' : 'Cadastrar'}
          onClick={() => {
            handleSendForm()
          }}
          size="big"
        />
      </S.buttonWrapper>
    </S.Wrapper>
  )
}
