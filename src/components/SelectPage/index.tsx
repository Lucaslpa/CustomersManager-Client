import { useState, useEffect } from 'react'
import { ArrowRight, ArrowLeft } from '@styled-icons/bootstrap'
import { useClientsContext } from '../../contexts/Clients'
import * as S from './style'
import { useSetNewClientsContext } from '../../Hooks/setNewClientsContext'

export const SelectPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { state } = useClientsContext()
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
            !state.hasPrevPage
              ? { pointerEvents: 'none' }
              : { pointerEvents: 'all' }
          }
        />
        <span aria-label="página atual">{state.page}</span>
        <ArrowRight
          width={25}
          aria-label="próximo"
          onClick={() => goNextPage()}
          style={
            !state.hasNextPage
              ? { pointerEvents: 'none' }
              : { pointerEvents: 'all' }
          }
        />
      </div>
    </S.Wrapper>
  )
}
