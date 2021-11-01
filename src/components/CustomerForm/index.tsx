import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import * as S from './styles'
import { TextField } from '../TextField'
import { Button } from '../Button'
import { CustomerToCreate } from '../../types/Customer'
import { CreateOne } from '../../services/customer/createOne'
import { UpdateOne } from '../../services/customer/updateOne'
import { useRedirectToLoginIfHasNoSession } from '../../Hooks/redirectToLogin'

import { LoginFormValidate as Validate } from '../../utils/LoginFormValidator'

type props = {
  customer?: CustomerToCreate
}

type fields =
  | 'address'
  | 'birthday'
  | 'cpf'
  | 'email'
  | 'name'
  | 'phone'
  | 'surname'

export const CustomerForm = ({
  customer = {
    address: '',
    birthday: '',
    cpf: '',
    email: '',
    name: '',
    phone: '',
    surname: '',
  },
}: props) => {
  const [FormData, setFormData] = useState<CustomerToCreate>(customer)

  const [FieldsValidate, setFieldsValidate] = useState({
    address: true,
    birthday: true,
    cpf: true,
    email: true,
    name: true,
    phone: true,
    surname: true,
  })

  const router = useRouter()
  const { id } = router.query
  const data = useRedirectToLoginIfHasNoSession()
  const accessToken = String(data?.accessToken)

  const validateField = async (field: fields, value: string) => {
    const isValid = await Validate[field].isValid(value || '')

    if (!isValid) {
      setFieldsValidate({ ...FieldsValidate, [field]: false })
    } else {
      setFieldsValidate({ ...FieldsValidate, [field]: true })
    }

    setFormData({ ...FormData, [field]: value })
  }

  async function handleUpdateCustomer() {
    const updateResponse = await UpdateOne(String(id), FormData, accessToken)
    if (updateResponse.updated) {
      toast.success(updateResponse.message, { theme: 'colored' })
    } else {
      toast.error(updateResponse.message, { theme: 'colored' })
    }
  }

  async function handleCreateCustomer() {
    const createResponse = await CreateOne(FormData, accessToken)
    if (createResponse.created) {
      toast.success(createResponse.message, { theme: 'colored' })
    } else {
      toast.error(createResponse.message, { theme: 'colored' })
    }
  }

  async function handleValidateForm() {
    const validateForm = await Validate.ValidateAll(FormData)
    setFieldsValidate(validateForm.fieldsValidate)
    return validateForm.FormIsValid
  }

  async function handleSendForm() {
    if (!data || !data.accessToken || !FormData) return

    const formIsValid = await handleValidateForm()
    if (!formIsValid) {
      toast.error('Dados inválidos.', { theme: 'colored' })
      return
    }

    if (customer.cpf) {
      handleUpdateCustomer()
    } else {
      handleCreateCustomer()
    }
  }

  useEffect(() => setFormData(customer), [customer])

  return (
    <>
      <S.Wrapper
        aria-label="Form"
        onSubmit={(e) => {
          e.preventDefault()
          handleSendForm()
        }}
      >
        <S.FieldSet>
          <legend>Nome Completo</legend>
          <TextField
            error={!FieldsValidate.name}
            placeholder="Nome"
            size="big"
            type="text"
            onChange={(name) => validateField('name', name)}
            defaultValue={customer ? customer.name : ''}
          />
          <TextField
            error={!FieldsValidate.surname}
            placeholder="Sobrenome"
            size="big"
            type="text"
            onChange={(text) => validateField('surname', text)}
            defaultValue={customer ? customer.surname : ''}
          />
        </S.FieldSet>

        <S.FieldSet column>
          <legend>Contato</legend>
          <TextField
            error={!FieldsValidate.email}
            placeholder="Email"
            size="big"
            type="email"
            onChange={(text) => validateField('email', text)}
            defaultValue={customer ? customer.email : ''}
          />
          <div id="flex">
            <TextField
              error={!FieldsValidate.phone}
              placeholder="Telefone"
              size="big"
              type="tel"
              onChange={(text) => validateField('phone', text)}
              defaultValue={customer ? customer.phone : ''}
            />
            <TextField
              error={!FieldsValidate.address}
              placeholder="Endereço"
              size="big"
              type="text"
              onChange={(text) => validateField('address', text)}
              defaultValue={customer ? customer.address : ''}
            />
          </div>
        </S.FieldSet>

        <S.FieldSet>
          <legend>Outros</legend>
          <TextField
            error={!FieldsValidate.cpf}
            placeholder="CPF"
            size="big"
            type="text"
            onChange={(text) => validateField('cpf', text)}
            defaultValue={customer ? customer.cpf : ''}
          />
          <TextField
            error={!FieldsValidate.birthday}
            placeholder="Data de Nascimento"
            size="big"
            type="text"
            onChange={(text) => validateField('birthday', text)}
            defaultValue={customer ? customer.birthday : ''}
          />
        </S.FieldSet>

        <S.buttonWrapper>
          <Button
            text={customer.cpf ? 'Salvar' : 'Cadastrar'}
            type="submit"
            size="big"
          />
        </S.buttonWrapper>
      </S.Wrapper>
    </>
  )
}
