import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { ListIcon } from '../../components/ListIcon'
import { ListItem, SuccessContainer } from './styles'
import deliveryman from '../../assets/deliveryman.svg'
import { useLocation } from 'react-router-dom'
import { CheckoutFormData } from '../Checkout/components/Form'

interface LocationType {
  state: CheckoutFormData
}
export function Success() {
  const { state: formData } = useLocation() as unknown as LocationType

  return (
    <SuccessContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <ul>
          <ListItem>
            <ListIcon iconColor="purple">
              <MapPin weight="fill" />
            </ListIcon>
            <p>
              Entrega em{' '}
              <strong>
                {formData.street.includes('Rua') ? '' : 'Rua'} {formData.street}
                ,{' '}
                {formData.number
                  .split('')
                  .filter((string) => string !== '_')
                  .join('')}
              </strong>{' '}
              <br />
              {formData.district} - {formData.city},{' '}
              {formData.state.toUpperCase()}
            </p>
          </ListItem>
          <ListItem>
            <ListIcon iconColor="yellow">
              <Timer weight="fill" />
            </ListIcon>
            <p>
              Previsão de entrega <br />
              <strong>20 min - 30 min</strong>
            </p>
          </ListItem>
          <ListItem>
            <ListIcon iconColor="darkYellow">
              <CurrencyDollar />
            </ListIcon>
            <p>
              Pagamento na entrega <br />
              {formData.typeOfPayment === 'credit' && (
                <strong>Cartão de Crédito</strong>
              )}
              {formData.typeOfPayment === 'debit' && (
                <strong>Cartão de Débito</strong>
              )}
              {formData.typeOfPayment === 'money' && <strong>Dinheiro</strong>}
            </p>
          </ListItem>
        </ul>
      </div>
      <img src={deliveryman} alt="Entregador em uma moto roxa" />
    </SuccessContainer>
  )
}
