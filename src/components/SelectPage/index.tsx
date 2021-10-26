import { useState, useEffect } from 'react'
import { ArrowRight, ArrowLeft } from '@styled-icons/bootstrap'
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
    console.log(page)
  }, [page])

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
        <span aria-label="página atual">{CustomersContext.page}</span>
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
