import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import {
  FormContainer,
  Fieldset,
  InputComplement,
  TypeOfPayment,
} from './styles'

import { Input } from '../Input'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useRequests } from '../../../../hooks/requests'

import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const checkoutFormValidationSchema = zod.object({
  zipCode: zod.string().length(9, { message: 'CEP Inválido' }),
  street: zod.string().min(1, {
    message: 'Campo obrigatório',
  }),
  number: zod.string().min(1, { message: 'Campo obrigatório' }),
  complement: zod.optional(zod.string()),
  district: zod.string().min(1, { message: 'Campo obrigatório' }),
  city: zod.string().min(1, { message: 'Campo obrigatório' }),
  state: zod.string().length(2, { message: 'Campo obrigatório' }).toLowerCase(),
  typeOfPayment: zod.string(),
})

export type CheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>

export function Form() {
  const { finalizeRequest } = useRequests()
  const navigate = useNavigate()

  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {
      zipCode: '',
      street: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      state: '',
      typeOfPayment: '',
    },
  })
  const { handleSubmit, watch } = checkoutForm

  const zipCode = watch('zipCode')
  const number = watch('number')
  const state = watch('state')

  function handleConfirmRequest(data: CheckoutFormData) {
    finalizeRequest()
    navigate('/success', { state: data })
  }

  return (
    <FormProvider {...checkoutForm}>
      <FormContainer
        id="checkoutForm"
        onSubmit={handleSubmit(handleConfirmRequest)}
      >
        <h1>Complete seu pedido</h1>
        <Fieldset>
          <h2>
            <MapPinLine color="#C47F17" />
            <div>
              Endereço de Entrega{' '}
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </h2>
          <div className="inputs">
            <Input
              mask={zipCode.length === 0 ? '' : '99999-999'}
              placeholder="CEP"
              required
              name="zipCode"
            />
            <Input mask="" placeholder="Rua" required name="street" />

            <div className="twoColumns">
              <Input
                mask={number.length === 0 ? '' : '9999'}
                placeholder="Número"
                required
                name="number"
              />
              <InputComplement>
                <Input placeholder="Complemento" mask="" name="complement" />
                <span>Opcional</span>
              </InputComplement>
            </div>

            <div className="threeColumns">
              <Input placeholder="Bairro" mask="" required name="district" />
              <Input placeholder="Cidade" mask="" required name="city" />
              <Input
                placeholder="UF"
                mask={state.length === 0 ? '' : 'aa'}
                required
                name="state"
              />
            </div>
          </div>
        </Fieldset>

        <Fieldset>
          <h2>
            <CurrencyDollar color="#8047F8" />
            <div>
              Pagamento{' '}
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </h2>
          <div className="typesOfPayment">
            <TypeOfPayment htmlFor="credit">
              <CreditCard />
              Cartão de crédito
              <Input
                type="radio"
                name="typeOfPayment"
                id="credit"
                value="credit"
                mask=""
                required
              />
            </TypeOfPayment>
            <TypeOfPayment htmlFor="debit">
              <Bank />
              cartão de débito
              <Input
                type="radio"
                name="typeOfPayment"
                id="debit"
                value="debit"
                mask=""
                required
              />
            </TypeOfPayment>
            <TypeOfPayment htmlFor="money">
              <Money />
              dinheiro
              <Input
                type="radio"
                name="typeOfPayment"
                mask=""
                id="money"
                value="money"
                required
              />
            </TypeOfPayment>
          </div>
        </Fieldset>
      </FormContainer>
    </FormProvider>
  )
}
