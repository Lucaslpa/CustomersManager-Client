import { Customer as CustomerType } from '../types/Customer'

export const Customer = {
  address: '12 quadra 5',
  birth: '12/56/3',
  cpf: '232244',
  email: '3sdsdluca@gmail',
  name: 'usersa',
  phone: '22424',
  surname: 'mestre',
} as CustomerType

export const Customers = [
  { ...Customer, cpf: '23232624' },
  { ...Customer, cpf: '23232324' },
  { ...Customer, cpf: '23232343' },
  { ...Customer, cpf: '23263224' },
  { ...Customer, cpf: '23273224' },
] as CustomerType[]
