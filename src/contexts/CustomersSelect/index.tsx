import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react'

type context = {
  Selected: string[]
  setSelected?: Dispatch<SetStateAction<string[]>>
}

const Context = createContext<context>({ Selected: [] })

export const SelectContextProvider = ({
  children,
}: {
  children: React.ReactElement[] | React.ReactElement
}) => {
  const [Selected, setSelected] = useState<string[]>([])

  return (
    <Context.Provider value={{ Selected, setSelected }}>
      {children}
    </Context.Provider>
  )
}

export const useSelectContext = () => {
  const ctx = useContext(Context)
  return ctx
}
