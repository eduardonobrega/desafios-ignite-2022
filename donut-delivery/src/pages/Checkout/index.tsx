import { useRequests } from '../../hooks/requests'
import { Aside } from './components/Aside'
import { Form } from './components/Form'
import { CheckoutContainer } from './styles'
import { EmptyCart } from './components/EmptyCart/index'

export function Checkout() {
  const { requests } = useRequests()

  const emptyCart = requests.length === 0

  return (
    <CheckoutContainer>
      {emptyCart ? (
        <EmptyCart />
      ) : (
        <>
          <Form />
          <Aside />
        </>
      )}
    </CheckoutContainer>
  )
}
