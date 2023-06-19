import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import './FormHome.css'
import { useEffect } from 'react'
export const FormHome = ({ onSubmit }) => {
  const schema = yup.object().shape({
    from: yup.string().required(),
    to: yup.string().required(),
    date: yup.string().required(),
    time: yup.string().required(),
    passengers: yup.string().required(),
    myCheckbox: yup.boolean()
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
        from: '',
        to: '',
        date: '',
        time: '',
        passengers: '',
        myCheckbox:''
      })
    }
  }, [formState, reset])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='wrapper-input'>
      <select
        {...register('from')}
        className='select'
      >
        <option value=''>From</option>
        <option value='Gdańsk'>Gdańsk</option>
        <option value='Kołobrzeg'>Kołobrzeg</option>
        <option value='Poznań'>Poznań</option>
        <option value='Rzeszów'>Rzeszów</option>
        <option value='Warszawa'>Warszawa</option>
        <option value='Szczecin'>Szczecin</option>
        <option value='Kraków'>Kraków</option>
      </select>
        <p>{errors?.from?.message}</p>
      </div>
      <div className='wrapper-input'>
      <select
        {...register('to')}
        className='select'
      >
        <option value=''>To</option>
        <option value='Gdańsk'>Gdańsk</option>
        <option value='Kołobrzeg'>Kołobrzeg</option>
        <option value='Poznań'>Poznań</option>
        <option value='Rzeszów'>Rzeszów</option>
        <option value='Warszawa'>Warszawa</option>
        <option value='Szczecin'>Szczecin</option>
        <option value='Kraków'>Kraków</option>
      </select>
        <p>{errors.to?.message}</p>
      </div>

      







      <div className='wrapper-input'>
        <input
          type='date'   
          {...register('date')}
        />
        <p>{errors.date?.message}</p>
      </div>
      <div className='wrapper-input'>
        <input
          type='time'   
          {...register('time')}
        />
        <p>{errors.time?.message}</p>
      </div>
      <div className='wrapper-input'>
        <input
          type='number'   
          placeholder='🧑🏻‍🤝‍👩🏻Passengers'
          {...register('passengers')}
        />
        <p>{errors.passengers?.message}</p>
      </div>
      <div className='wrapper-input checkbox'>
      
      <label htmlFor="myCheckbox">Round-trip?</label>
      
          <input type="checkbox" id="myCheckbox" {...register('myCheckbox')}  />
          <p>{errors.myCheckbox?.message}</p> 
     
    </div >
      <div className='wrapper-input'>
        <input
          type='submit'
          value='I Confirm'
        />
      </div>
    </form>
  )
}
