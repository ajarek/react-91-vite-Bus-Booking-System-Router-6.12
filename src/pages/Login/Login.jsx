import { React, useState, useContext } from 'react'
import { redirect, useParams, useNavigate,Link } from 'react-router-dom'
import { AppContext } from '../../App'
import {FormLogin} from '../../helper/FormLogin/FormLogin'
import {fetchStorage} from '../../helper/localStorage'
import './Login.css'

const Login = () => {
  const { dataFormHome, setDataFormHome,isLogin, setIsLogin } = useContext(AppContext)
  const navigate = useNavigate()
  const handleLogin=(data) => {
    const user = fetchStorage('register')
    if(data.email===user?.email&&data.password===user?.password){
      setIsLogin(true)
      navigate('/')
    }
  }
  return (
    <div className='login'>
      <FormLogin onSubmit={handleLogin}/>
    </div>
  )
}

export default Login