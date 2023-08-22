import { ShoppingCartSimple } from '@phosphor-icons/react'
import { Counter } from '../../../../components/Counter'
import { AddCard, CardContainer, Price } from './styles'
import { useState } from 'react'
import { useRequests } from '../../../../hooks/requests'

export interface DonutType {
  id: string
  flavor: string
  description: string
  price: number
  tags: string[]
  avatar: string
}

interface CardProps {
  donut: DonutType
}

export function DonutCard({ donut }: CardProps) {
  const { addRequest, requests, updateRequest } = useRequests()
  const donutInRequest = requests.find(
    (request) => request.donut.id === donut.id,
  )

  const [quantity, setQuantity] = useState(donutInRequest?.quantity ?? 1)

  function handleUpdateQuantity(newQuantity: number) {
    if (newQuantity > 0) {
      setQuantity(newQuantity)
      if (donutInRequest) {
        updateRequest({ ...donutInRequest, quantity: newQuantity })
      }
    }
  }

  function handleAddNewRequest() {
    addRequest({
      id: String(new Date().getTime()),
      donut,
      quantity,
      value: donut.price * quantity,
    })
  }

  return (
    <CardContainer>
      <div>
        <img src={`/donuts/${donut.avatar}`} alt="donut de morango" />
        <ul>
          {donut.tags &&
            donut.tags.map((tag) => <li key={tag + donut.id}>{tag}</li>)}
        </ul>
        <h3>{donut.flavor}</h3>
        <p>{donut.description}</p>
      </div>
      <footer>
        <Price>
          <strong>
            {donut.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </strong>
        </Price>
        <div>
          <Counter
            quantity={quantity}
            onUpdateQuantity={handleUpdateQuantity}
          />
          <AddCard
            onClick={handleAddNewRequest}
            inCart={!!donutInRequest}
            title={
              donutInRequest ? 'Já está no carrinho' : 'Adicionar ao carrinho'
            }
          >
            <ShoppingCartSimple weight="fill" />
          </AddCard>
        </div>
      </footer>
    </CardContainer>
  )
}
