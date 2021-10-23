import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react'
import { Client } from '../../types/cliente'

type state = {
  ClientsData: Client[]
  hasPrevPage: boolean
  page: number
  pageCount: number
  totalDocs: number
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
