import { InputContainer } from './styles'
import { Props } from '../../../../@types/inputMask'
import { useFormContext } from 'react-hook-form'
import { CheckoutFormData } from '../Form'

interface InputProps extends Props {
  name: keyof CheckoutFormData
}

export function Input({ name, ...props }: InputProps) {
  const { register } = useFormContext<CheckoutFormData>()

  return <InputContainer {...props} {...register(name)} />
}
