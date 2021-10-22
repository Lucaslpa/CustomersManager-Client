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
  checkAll: boolean
  setCheckAll?: Dispatch<SetStateAction<boolean>>
}

const Context = createContext<context>({ Selected: [], checkAll: false })

export const SelectContextProvider = ({
  children,
}: {
  children: React.ReactElement[] | React.ReactElement
}) => {
  const [Selected, setSelected] = useState<string[]>([])
  const [checkAll, setCheckAll] = useState<boolean>(false)

  return (
    <Context.Provider value={{ Selected, setSelected, checkAll, setCheckAll }}>
      {children}
    </Context.Provider>
  )
}

export const useSelectContext = () => {
  const ctx = useContext(Context)
  return ctx
}
