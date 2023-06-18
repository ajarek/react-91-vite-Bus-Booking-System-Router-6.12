import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import './Form.css'
import { useEffect } from 'react'
export const Form = ({ onSubmit }) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    address: yup.string().required(),
    zip: yup.string().required(),
    city: yup.string().required(),
    country: yup.string().required(),
    money: yup.string().required(),
    pin: yup.string().required(),
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
        name: '',
        email: '',
        phone: '',
        address: '',
        zip: '',
        city: '',
        country: '',
        money: '',
        pin: '',
      })
    }
  }, [formState, reset])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='wrapper-input'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          placeholder='Alexei Ward'
          {...register('name')}
        />
        <p>{errors?.name?.message}</p>
      </div>
      <div className='wrapper-input'>
        <label htmlFor='email'>Email Address</label>
        <input
          type='email'
          placeholder='alexei@gmail.com'
          {...register('email')}
        />
        <p>{errors.email?.message}</p>
      </div>
      <div className='wrapper-input'>
        <label htmlFor='phone'>Phone Number</label>
        <input
          type='phone'
          placeholder='+1 202-555-0136'
          {...register('phone')}
        />
        <p>{errors.phone?.message}</p>
      </div>
      <div className='wrapper-input'>
        <label htmlFor='phone'>Your Address</label>
        <input
          type='text'
          placeholder='1137 Williams Avenue'
          {...register('address')}
        />
        <p>{errors.address?.message}</p>
      </div>
      <div className='wrapper-input'>
        <label htmlFor='phone'>ZIP Code</label>
        <input
          type='text'
          placeholder='10001'
          {...register('zip')}
        />
        <p>{errors.zip?.message}</p>
      </div>
      <div className='wrapper-input'>
        <label htmlFor='phone'>City</label>
        <input
          type='text'
          placeholder='New York'
          {...register('city')}
        />
        <p>{errors.city?.message}</p>
      </div>
      <div className='wrapper-input'>
        <label htmlFor='phone'>Country</label>
        <input
          type='country'
          placeholder='United States'
          {...register('country')}
        />
        <p>{errors.country?.message}</p>
      </div>
      <div className='wrapper-input'>
        <label htmlFor='phone'>e-Money Number</label>
        <input
          type='text'
          placeholder='238521996'
          {...register('money')}
        />
        <p>{errors.money?.message}</p>
      </div>
      <div className='wrapper-input'>
        <label htmlFor='phone'>e-Money PIN</label>
        <input
          type='phone'
          placeholder='6891'
          {...register('pin')}
        />
        <p>{errors.pin?.message}</p>
      </div>
      <div className='wrapper-input'>
        <input
          type='submit'
          value='CONTINUE & PAY'
        />
      </div>
    </form>
  )
}
