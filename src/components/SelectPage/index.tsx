import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useCustomersContext } from '../../contexts/Customers'
import * as S from './style'
import { useSetNewClientsContext } from '../../Hooks/setNewClientsContext'

export const SelectPage = () => {
  const { CustomersContext } = useCustomersContext()
  const router = useRouter()
  const { page } = router.query
  function goNextPage() {
    const sum = Number(page) + 1
    if (sum < 1) return
    router.push(`/CustomersList/${sum}`)
  }

  function goBackPage() {
    const subtract = Number(page) - 1
    if (subtract < 1) return
    router.push(`/CustomersList/${subtract}`)
  }
  const setNewClientsContext = useSetNewClientsContext()

  useEffect(() => {
    setNewClientsContext(Number(page) || 1)
  }, [page])

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
