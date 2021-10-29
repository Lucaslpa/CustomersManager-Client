export type Customer = {
  name: string
  surname: string
  email: string
  address: string
  phone: string
  cpf: string
  birthday: string
  id: string
}

export type CustomerToUpdate = {
  address?: string
  cpf?: string
  birthday?: string
  email?: string
  name?: string
  surname?: string
  phone?: string
}

export type CustomerUpdated = {
  success: string
}

export type CustomerGetMany = {
  customers: Array<{
    address: string
    birthday: string
    cpf: string
    email: string
    name: string
    phone: string
    surname: string
    id: string
  }>
  hasPrevPage: boolean
  hasNextPage: boolean
  limit: number
  nextPage: null
  page: number
  pageCount: number
  pagingCounter: number
  prevPage: null
  totalDocs: number
}

export type CustomerToCreate = {
  address: string
  cpf: string
  birthday: string
  email: string
  name: string
  surname: string
  phone: string
}

export type newCreatedCustomer = {
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

export type GetCustomer = {
  birth?: string

  _id?: string
  address: string
  birthday?: string
  cpf: string
  email: string
  name: string
  phone: string
  surname: string
  __v?: number
  id?: string
}

export type DeleteManyCustomers = {
  status: number
  data: {
    clients: {
      deletedCount: number
    }
  }
}
