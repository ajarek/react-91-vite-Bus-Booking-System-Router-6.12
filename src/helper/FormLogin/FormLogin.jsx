import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import './FormLogin.css'
import { useEffect } from 'react'
export const FormLogin = ({ onSubmit }) => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(4).max(12).required(),
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
        email: '',
        password: '',
      })
    }
  }, [formState, reset])

  return (
    <form
      className='form-login'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='wrapper-input'>
        <label htmlFor='email'>Email Address</label>
        <input
          type='email'
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
        <input
          type='submit'
          value='Login'
        />
      </div>
    </form>
  )
}
