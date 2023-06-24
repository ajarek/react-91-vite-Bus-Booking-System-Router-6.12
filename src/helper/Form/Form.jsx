import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import './Form.css'
import { useEffect } from 'react'
export const Form = ({ onSubmit }) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    phone: yup.string().required(),
   
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
        password:'',
        phone: '',
      })
    }
  }, [formState, reset])

  return (
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
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
        <label htmlFor='phone'>Password</label>
        <input
          type='password'
          {...register('password')}
        />
        <p>{errors.password?.message}</p>
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
        <input
          type='submit'
          value='Register'
        />
      </div>
    </form>
  )
}
