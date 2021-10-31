import * as S from './style'
import { CustomerMobile, CustomerWeb } from '../Customer'
import { Customer } from '../../types/Customer'
import { useSelectContext } from '../../contexts/CustomersSelect'
import { DeleteAll } from '../DeleteAll'

type props = {
  customers: Customer[]
}

export const ListCustomersWeb = ({
  customers,
  onCheckAll,
}: {
  customers: Customer[]
  onCheckAll: (isCheck: boolean) => void
}) => (
  <S.WrapperWeb data-testid="web">
    <S.Thead>
      <tr>
        <td style={{ textAlign: 'center' }}>
          <input
            type="checkbox"
            onChange={(e) => onCheckAll(e.target.checked)}
          />
        </td>

        <td>
          <span>Nome</span>
        </td>

        <td>
          <span>Email</span>
        </td>
        <td />
      </tr>
    </S.Thead>
    <tbody>
      {customers.map((customer) => (
        <CustomerWeb customer={customer} key={customer.cpf} />
      ))}
    </tbody>
  </S.WrapperWeb>
)

export const ListCustomersMobile = ({ customers }: props) => (
  <S.WrapperMobile data-testid="mobile">
    {customers.map((customer) => (
      <CustomerMobile customer={customer} key={customer.cpf} />
    ))}
  </S.WrapperMobile>
)

export const List = ({ customers }: props) => {
  const { setSelected } = useSelectContext()

  function handleCheckAll(isCheck: boolean) {
    const ids = customers.map((customer) => customer.id)
    if (isCheck) {
      setSelected!(ids)
      return
    }
    setSelected!([])
  }

  return (
    <S.Wrapper aria-label="lista">
      <DeleteAll />
      {customers && customers.length > 0 ? (
        <>
          <ListCustomersWeb customers={customers} onCheckAll={handleCheckAll} />
          <ListCustomersMobile customers={customers} />
        </>
      ) : null}
    </S.Wrapper>
  )
}
