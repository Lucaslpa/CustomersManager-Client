import * as yup from 'yup'

export const validateAll = yup.object().shape({
  address: yup.string().required(),
  birthday: yup.string().required(),
  cpf: yup.string().length(11).required(),
  email: yup.string().email().required(),
  name: yup.string().required(),
  phone: yup.string().min(10).max(12).required(),
  surname: yup.string().required(),
})

export const username = yup.string().required()

export const address = yup.string().required()

export const birthday = yup.string().required()

export const cpf = yup.string().length(11).required()

export const name = yup.string().min(5).required()

export const email = yup.string().email().required()

export const surname = yup.string().min(5).required()

const phone = yup.string().min(10).max(12).required()

export const LoginFormValidate = {
  phone,
  address,
  birthday,
  cpf,
  name,
  email,
  surname,
  validateAll,
}
