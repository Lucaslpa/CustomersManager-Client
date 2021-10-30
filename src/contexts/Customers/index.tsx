import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react'
import { Customer } from '../../types/Customer'

export type CustomersContext = {
  customers: Customer[]
  hasPrevPage: boolean
  page: number
  pageCount: number
  totalDocs: number
  hasNextPage: boolean
  loading: boolean
}

type context = {
  CustomersContext: CustomersContext
  setCustomersContext?: Dispatch<SetStateAction<CustomersContext>>
}

const defaultState = {
  customers: [],
  hasPrevPage: false,
  page: 1,
  pageCount: 1,
  totalDocs: 1,
  hasNextPage: false,
  loading: true,
} as CustomersContext

const Context = createContext<context>({
  CustomersContext: defaultState,
})

export const CustomersContextProvider = ({
  children,
}: {
  children: React.ReactElement[] | React.ReactElement
}) => {
  const [CustomersState, setCustomersContext] =
    useState<CustomersContext>(defaultState)

  return (
    <Context.Provider
      value={{ CustomersContext: CustomersState, setCustomersContext }}
    >
      {children}
    </Context.Provider>
  )
}

export const useCustomersContext = () => {
  const ctx = useContext(Context)
  return ctx
}
