import { Counter } from '../../../../components/Counter'
import { OrderContainer, RemoveButton } from './styles'

import { Trash } from '@phosphor-icons/react'
import { useRequests } from '../../../../hooks/requests'
import { RequestType } from '../../../../reducers/requests/reducer'

interface RequestProps {
  request: RequestType
}

export function Request({ request }: RequestProps) {
  const { updateRequest, removeRequest } = useRequests()

  function handleUpdateRequest(newQuantity: number) {
    if (newQuantity > 0) {
      const newRequest: RequestType = {
        ...request,
        quantity: newQuantity,
        value: newQuantity * request.donut.price,
      }
      updateRequest(newRequest)
    }
  }
  function handleRemoveRequest() {
    removeRequest(request.id)
  }
  return (
    <OrderContainer>
      <div>
        <img src={`/donuts/${request.donut.avatar}`} alt="" />
        <div>
          <h2>{request.donut.flavor}</h2>
          <div>
            <Counter
              quantity={request.quantity}
              onUpdateQuantity={handleUpdateRequest}
            />
            <RemoveButton onClick={handleRemoveRequest}>
              <Trash />
              Remover
            </RemoveButton>
          </div>
        </div>
      </div>
      <strong>
        {request.value.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </strong>
    </OrderContainer>
  )
}
