export type Client = {
  name: string
  surname: string
  email: string
  address: string
  phone: string
  cpf: string
  birth: string
  id: string
}

export type ClientGetMany = {
  docs: Array<{
    address: string
    birthday: string
    cpf: string
    email: string
    name: string
    phone: string
    surname: string
    __v?: number
    _id?: string
    id?: string
  }>
  hasPrevPage: boolean
  limit: number
  nextPage: null
  page: number
  pageCount: number
  pagingCounter: number
  prevPage: null
  totalDocs: number
}

export type newCreatedClient = {
  address: string
  birthday: string
  cpf: string
  email: string
  name: string
  phone: string
  surname: string
  _id: string
  __v: number
}

export type GetClient = {
  _id: string
  address: string
  birthday: string
  cpf: string
  email: string
  name: string
  phone: string
  surname: string
  __v: number
}
