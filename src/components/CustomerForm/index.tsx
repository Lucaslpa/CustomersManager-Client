import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { ToastContainer, toast } from 'react-toastify'
import { useRouter } from 'next/router'
import * as S from './styles'
import { TextField } from '../TextField'
import { Button } from '../Button'
import { CustomerToUpdate, CustomerToCreate } from '../../types/Customer'
import { LoginFormValidate as Validate } from '../../utils/LoginFormValidator'
import 'react-toastify/dist/ReactToastify.css'

type props = {
  customer?: CustomerToUpdate
}

type fields =
  | 'address'
  | 'birthday'
  | 'cpf'
  | 'email'
  | 'name'
  | 'phone'
  | 'surname'

export const CustomerForm = ({ customer }: props) => {
  const [FormData, setFormData] = useState<
    CustomerToCreate | CustomerToUpdate | Record<string, unknown>
  >({})
  const { data } = useSession()
  const [FieldsValidate, setFieldsValidate] = useState({
    address: true,
    birthday: true,
    cpf: true,
    email: true,
    name: true,
    phone: true,
    surname: true,
  })
  const customerApi = new CustomerApi(data?.accessToken || '')
  const router = useRouter()
  const { id } = router.query

  const validateField = async (field: fields, value: string) => {
    const isValid = await Validate[field].isValid(value || '')
    if (!isValid) {
      setFieldsValidate({ ...FieldsValidate, [field]: false })
    } else {
      setFieldsValidate({ ...FieldsValidate, [field]: true })
    }

    setFormData({ ...FormData, [field]: value })
  }

  async function handleSendForm() {
    if (!data || !data.accessToken || !FormData) return
    const formIsValid = await Validate.ValidateAll(FormData)
    if (!formIsValid.FormIsValid) {
      toast.error('Dados inválidos.', { theme: 'colored' })
      setFieldsValidate(formIsValid.fieldsValidate)
      return
    }

    if (customer) {
      const res = await customerApi.UpdateOne(String(id), FormData)
      if (res.data.updated) {
        toast.success(res.data.message, { theme: 'colored' })
      } else {
        toast.error(res.data.message, { theme: 'colored' })
      }

      return
    }
    const res = await customerApi.CreateOne(FormData)
    if (res.data.created) {
      toast.success(res.data.message, { theme: 'colored' })
    } else {
      toast.error(res.data.message, { theme: 'colored' })
    }
  }

  useEffect(() => {
    if (customer) {
      setFormData(customer)
    }
  }, [customer])
  return (
    <>
      <ToastContainer />
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
            text={customer ? 'Salvar' : 'Cadastrar'}
            type="submit"
            size="big"
          />
        </S.buttonWrapper>
      </S.Wrapper>
    </>
  )
}
