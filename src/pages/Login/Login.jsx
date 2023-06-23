import { React, useState, useContext } from 'react'
import { AppContext } from '../../App'
import {FormLogin} from '../../helper/FormLogin/FormLogin'
import './Login.css'

const Login = () => {
  const { dataFormHome, setDataFormHome,isLogin, setIsLogin } = useContext(AppContext)
  const handleLogin=(data) => {
    if(data.email==='ajarek@poczta.onet.pl'&&data.password==='2101'){
      setIsLogin(true)
    }
  }
  return (
    <div className='login'>
      <FormLogin onSubmit={handleLogin}/>
    </div>
  )
}

export default Login