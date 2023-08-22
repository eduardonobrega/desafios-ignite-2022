import { useRequests } from '../../../../hooks/requests'
import { Request } from '../Request'
import { AsideContainer, ConfirmButton } from './styles'

export function Aside() {
  const { requests } = useRequests()

  const amount = requests.reduce((acc, request) => acc + request.value, 0)
  const delivery = 2
  return (
    <AsideContainer>
      <h1>Cafés selecionados</h1>
      <div>
        <ul>
          {requests.map((request) => (
            <li key={request.id}>
              <Request request={request} />
            </li>
          ))}
        </ul>
        <p>
          <span>Total de itens</span>{' '}
          <span>
            {amount.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </p>

        <p>
          <span>Entrega</span>{' '}
          <span>
            {delivery.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </p>

        <p>
          <strong>Total</strong>{' '}
          <strong>
            {requests.length !== 0
              ? (amount + delivery).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              : 'R$ 0,00'}
          </strong>
        </p>

        <ConfirmButton type="submit" form="checkoutForm">
          confirmar pedido
        </ConfirmButton>
      </div>
    </AsideContainer>
  )
}
