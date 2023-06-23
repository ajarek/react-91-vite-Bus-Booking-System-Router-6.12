import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import './FormPayment.css'
import { useEffect } from 'react'
export const FormPayment = ({ onSubmit, amount }) => {
  const schema = yup.object().shape({
    amount: yup.string(),
    cardNumber: yup.string().required(),
    expiryDate: yup.string().required(),
    cvv:yup.string().required(),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        amount:'',
        cardNumber: '',
        expiryDate:'',
        cvv:''
      })
    }
  }, [formState, reset])

  return (
    <form className='form-payment' onSubmit={handleSubmit(onSubmit)}>
      <div className='wrapper-input'>
        <label htmlFor='cardNumber'>Amount</label>
        <input
          type='text'
          value={amount}
          {...register('amount')}
        />
        <p>{errors.amount?.message}</p>
      </div>

      <div className='wrapper-input'>
        <label htmlFor='cardNumber'>Card Number</label>
        <input
          type='text'
          placeholder='1234 5678 9012 3456'
          {...register('cardNumber')}
        />
        <p>{errors.cardNumber?.message}</p>
      </div>
      <div className='wrapper-input'>
        <label htmlFor='expiryDate'>Expiry Date</label>
        <input
          type='text'
          placeholder='MM/YYYY'
          {...register('expiryDate')}
        />
        <p>{errors.expiryDate?.message}</p>
      </div>
     
      <div className='wrapper-input'>
        <label htmlFor='cvv'>CVV</label>
        <input
          type='text'
          placeholder='123'
          {...register('cvv')}
        />
        <p>{errors.cvv?.message}</p>
      </div>
     
      <div className='wrapper-input'>
        <input
          type='submit'
          value='Pay'
        />
      </div>
    </form>
  )
}
