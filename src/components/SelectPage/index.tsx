import { useState } from 'react'
import { ArrowRight, ArrowLeft } from '@styled-icons/bootstrap'
import * as S from './style'

export const SelectPage = () => {
  const [currentPage, setCurrentPage] = useState(1)

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

  return (
    <S.Wrapper>
      <div>
        <ArrowLeft
          width={25}
          aria-label="voltar"
          onClick={() => goBackPage()}
        />
        <span aria-label="página atual">{currentPage}</span>
        <ArrowRight
          width={25}
          aria-label="próximo"
          onClick={() => goNextPage()}
        />
      </div>
    </S.Wrapper>
  )
}
