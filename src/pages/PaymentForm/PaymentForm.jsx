import { React, useState, useContext, useEffect, useRef } from 'react'
import { AppContext } from '../../App'
import { redirect, useParams, useNavigate,Link } from 'react-router-dom'
import './PaymentForm.css'
import {FormPayment} from '../../helper/FormPayment/FormPayment'
import Modal from '../../components/Modal/Modal'
const PaymentForm = () => {
  const { dataFormHome, setDataFormHome, isLogin, setIsLogin, toPay, setToPay } =
  useContext(AppContext)
  const [showModal, setShowModal] = useState(false);
  const [showAmount, setShowAmount] = useState('');
  const navigate = useNavigate()
  const handlePayment=(data) => {
    setShowAmount(data.amount)
   setShowModal(true);
   
  }
  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/')
  };
  return (
    <div className='payment-form'>
    {showModal?<Modal amount= {showAmount} onClose={handleCloseModal}/>:null}
      <FormPayment amount={toPay} onSubmit={handlePayment} />
    </div>
  )
}

export default PaymentForm