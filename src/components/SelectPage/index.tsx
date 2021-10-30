import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useCustomersContext } from '../../contexts/Customers'
import * as S from './style'

export const SelectPage = () => {
  const { CustomersContext } = useCustomersContext()
  const router = useRouter()
  const { page } = router.query
  function goNextPage() {
    const nextPage = Number(page) + 1
    if (nextPage < 1) return
    router.push(`/CustomersList/${nextPage}`)
  }

  function goBackPage() {
    const backPage = Number(page) - 1
    if (backPage < 1) return
    router.push(`/CustomersList/${backPage}`)
  }

  return (
    <S.Wrapper>
      <span>Total de clientes: {CustomersContext.totalDocs}</span>
      <div>
        <S.ArrowLeft
          width={25}
          aria-label="voltar"
          onClick={() => goBackPage()}
          hidden={!CustomersContext.hasPrevPage}
        />
        <span aria-label="página atual">
          {CustomersContext.page} de {CustomersContext.pageCount}
        </span>
        <S.ArrowRight
          width={25}
          aria-label="próximo"
          onClick={() => goNextPage()}
          hidden={!CustomersContext.hasNextPage}
        />
      </div>
    </S.Wrapper>
  )
}
