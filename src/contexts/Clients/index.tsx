import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react'
import { Client } from '../../types/cliente'

export type state = {
  ClientsData: Client[]
  hasPrevPage: boolean
  page: number
  pageCount: number
  totalDocs: number
  hasNextPage: boolean
}

type context = {
  state: state
  setClientsContext?: Dispatch<SetStateAction<state>>
}

const defaultState = {
  ClientsData: [],
  hasPrevPage: false,
  page: 1,
  pageCount: 1,
  totalDocs: 1,
  hasNextPage: false,
} as state

const Context = createContext<context>({
  state: defaultState,
})

export const ClientsContextProvider = ({
  children,
}: {
  children: React.ReactElement[] | React.ReactElement
}) => {
  const [State, setClientsContext] = useState<state>(defaultState)

  return (
    <Context.Provider value={{ state: State, setClientsContext }}>
      {children}
    </Context.Provider>
  )
}

export const useClientsContext = () => {
  const ctx = useContext(Context)
  return ctx
}
