import { React } from 'react'
import { useNavigate} from 'react-router-dom'
import {Form} from '../../helper/Form/Form'
import {saveStorageSingle} from '../../helper/localStorage'
import './Register.css'

const Register = () => {

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