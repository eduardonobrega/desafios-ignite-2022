import { Minus, Plus } from '@phosphor-icons/react'
import { CounterContainer } from './styles'

interface CounterProps {
  quantity: number
  onUpdateQuantity: (newQuantity: number) => void
}

export function Counter({ quantity, onUpdateQuantity }: CounterProps) {
  return (
    <CounterContainer>
      <button onClick={() => onUpdateQuantity(quantity - 1)}>
        <Minus weight="bold" />
      </button>
      {quantity}
      <button onClick={() => onUpdateQuantity(quantity + 1)}>
        <Plus weight="bold" />
      </button>
    </CounterContainer>
  )
}
