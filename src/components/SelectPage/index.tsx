import { useState, useEffect } from 'react'
import { ArrowRight, ArrowLeft } from '@styled-icons/bootstrap'
import { useCustomersContext } from '../../contexts/Customers'
import * as S from './style'
import { useSetNewClientsContext } from '../../Hooks/setNewClientsContext'

export const SelectPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { CustomersContext } = useCustomersContext()
  function goNextPage() {
    const sum = currentPage + 1
    if (sum < 1) return
    setCurrentPage(sum)
  }

  function goBackPage() {
    const subtract = currentPage - 1
    if (subtract < 1) return
    setCurrentPage(subtract)
  }
  const setNewClientsContext = useSetNewClientsContext()

  useEffect(() => {
    setNewClientsContext(currentPage)
  }, [currentPage])

  return (
    <S.Wrapper>
      <div>
        <ArrowLeft
          width={25}
          aria-label="voltar"
          onClick={() => goBackPage()}
          style={
            !CustomersContext.hasPrevPage
              ? { pointerEvents: 'none' }
              : { pointerEvents: 'all' }
          }
        />
        <span aria-label="página atual">{currentPage}</span>
        <ArrowRight
          width={25}
          aria-label="próximo"
          onClick={() => goNextPage()}
          style={
            !CustomersContext.hasNextPage
              ? { pointerEvents: 'none' }
              : { pointerEvents: 'all' }
          }
        />
      </div>
    </S.Wrapper>
  )
}
