import { useState } from 'react'
import { useSession } from 'next-auth/react'
import * as S from './styles'
import { TextField } from '../TextField'
import { Button } from '../Button'
import { Customer, CustomerToCreate } from '../../types/Customer'
import { CustomerApi } from '../../api/Customer'

type props = {
  customer?: Customer
}

export const CustomerForm = ({ customer }: props) => {
  const [FormData, setFormData] = useState<
    CustomerToCreate | Record<string, unknown>
  >({})
  const { data } = useSession()
  const customerApi = new CustomerApi(data?.accessToken || '')
  async function handleSendForm() {
    if (!data || !data.accessToken || !FormData) return
    if (customer) {
      await customerApi.UpdateOne(customer.id, FormData)
      return
    }
    if (
      !FormData.address &&
      !FormData.birthday &&
      !FormData.cpf &&
      !FormData.email &&
      !FormData.name &&
      !FormData.phone &&
      !FormData.surname
    ) {
      return
    }

    await customerApi.CreateOne(FormData)
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
          defaultValue={customer ? customer.name : ''}
        />
        <TextField
          placeholder="Sobrenome"
          size="big"
          type="text"
          onChange={(textValue) => {
            setFormData({ ...FormData, surname: textValue })
          }}
          defaultValue={customer ? customer.surname : ''}
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
          defaultValue={customer ? customer.email : ''}
        />
        <div id="flex">
          <TextField
            placeholder="Telefone"
            size="big"
            type="tel"
            onChange={(textValue) => {
              setFormData({ ...FormData, phone: textValue })
            }}
            defaultValue={customer ? customer.phone : ''}
          />
          <TextField
            placeholder="Endereço"
            size="big"
            type="text"
            onChange={(textValue) => {
              setFormData({ ...FormData, address: textValue })
            }}
            defaultValue={customer ? customer.address : ''}
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
          defaultValue={customer ? customer.cpf : ''}
        />
        <TextField
          placeholder="Data de Nascimento"
          size="big"
          type="text"
          onChange={(textValue) => {
            setFormData({ ...FormData, birthday: textValue })
          }}
          defaultValue={customer ? customer.birth : ''}
        />
      </S.FieldSet>

      <S.buttonWrapper>
        <Button
          text={customer ? 'Salvar' : 'Cadastrar'}
          onClick={() => {
            handleSendForm()
          }}
          size="big"
        />
      </S.buttonWrapper>
    </S.Wrapper>
  )
}
