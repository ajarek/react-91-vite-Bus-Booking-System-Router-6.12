import { React, useState, useContext } from 'react'
import { redirect, useParams, useNavigate,Link } from 'react-router-dom'
import { AppContext } from '../../App'
import {Form} from '../../helper/Form/Form'
import {saveStorageSingle} from '../../helper/localStorage'
import './Register.css'

const Register = () => {
  const { dataFormHome, setDataFormHome,isLogin, setIsLogin } = useContext(AppContext)
  const navigate = useNavigate()
  const handleLogin=(data) => {
    saveStorageSingle(data,'register');
    navigate('/login')
  }
  return (
    <div className='register'>
      <Form onSubmit={handleLogin}/>
    </div>
  )
}
export default Register