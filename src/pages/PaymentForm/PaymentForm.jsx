import { React, useState, useContext, useEffect, useRef } from 'react'
import { AppContext } from '../../App'
import './PaymentForm.css'
import {FormPayment} from '../../helper/FormPayment/FormPayment'
const PaymentForm = () => {
  const { dataFormHome, setDataFormHome, isLogin, setIsLogin, toPay, setToPay } =
  useContext(AppContext)
  return (
    <div className='payment-form'>
      <FormPayment amount={toPay}/>
    </div>
  )
}

export default PaymentForm