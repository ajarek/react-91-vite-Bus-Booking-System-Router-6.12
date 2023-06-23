import { redirect, useParams, useNavigate, Link } from 'react-router-dom'
import { React, useState, useContext, useEffect, useRef } from 'react'
import { AppContext } from '../../App'
import bus from '../../assets/bus.json'
import distances from '../../assets/distances.json'
import './Summary.css'

const Summary = () => {
  const { dataFormHome, setDataFormHome, isLogin, setIsLogin, toPay, setToPay } =
    useContext(AppContext)
  const navigate = useNavigate()
  let ref = useRef(null)
  let { id } = useParams()
  const selectedBus = bus?.find((el) => el.id === id)
  const distancesFilter = distances.filter(
    (el) =>
      (el.first === dataFormHome.from && el.second === dataFormHome.to) ||
      (el.first === dataFormHome.to && el.second === dataFormHome.from)
  )
  useEffect(() => {
    setToPay(ref.current.children[0].innerText
      )
  })

  return (
    <div className='summary'>
      <h1>Order summary:</h1>
      <div className='summary-data'>
        <div className='date'>Departure date: {dataFormHome.date}</div>
        <div className='time'>Departure time: {dataFormHome.time}</div>
        <div className='from'>Departure from: {dataFormHome.from}</div>
        <div className='to'>Departure to: {dataFormHome.to}</div>
        <div className='distances'>
          Distances:{' '}
          {dataFormHome.myCheckbox
            ? distancesFilter[0].km * 2
            : distancesFilter[0].km}
          km
        </div>
        <div
          ref={ref}
          className='price'
        >
          spanFare:{' '}
          {dataFormHome.myCheckbox
            ?<span>{(distancesFilter[0].price * 1.5 * selectedBus.factor).toFixed(2)}</span> 
            : <span>{(distancesFilter[0].price * selectedBus.factor).toFixed(2)}</span> }
          PLN
        </div>

        {dataFormHome.myCheckbox ? <div>Round trip</div> : null}
      </div>
      <h2>{selectedBus.name}</h2>
      <p>Passengers: {selectedBus.passengers}</p>
      <img
        src={selectedBus.src}
        alt={selectedBus.name}
      />
      <div className='wrapper-links'>
        <Link
          to={'/'}
          className={'link-confirm'}
        >
          Back
        </Link>
        <Link
          to={isLogin ? '/payment-form' : '/login'}
          className={'link-confirm'}
        >
          I confirm
        </Link>
      </div>
    </div>
  )
}

export default Summary
