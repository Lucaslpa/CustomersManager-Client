import { Client } from '../types/cliente'

export const cliente = {
  address: '12 quadra 5',
  birth: '12/56/3',
  cpf: '232244',
  email: '3sdsdluca@gmail',
  name: 'usersa',
  phone: '22424',
  surname: 'mestre',
} as Client

export const clientes = [
  { ...cliente, cpf: '23232624' },
  { ...cliente, cpf: '23232324' },
  { ...cliente, cpf: '23232343' },
  { ...cliente, cpf: '23263224' },
  { ...cliente, cpf: '23273224' },
]
