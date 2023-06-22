import { redirect, useParams, useNavigate } from 'react-router-dom'
import { React, useState, useContext, useEffect } from 'react'
import { AppContext } from '../../App'
import bus from '../../assets/bus.json'
import distances from '../../assets/distances.json'
import './Summary.css'

const Summary = () => {
  const { dataFormHome, setDataFormHome } = useContext(AppContext)
  const navigate = useNavigate()
  let { id } = useParams()
  const selectedBus = bus?.find((el) => el.id === id)
  const distancesFilter = distances.filter(
    (el) => el.first === dataFormHome.from && el.second === dataFormHome.to||
    el.first === dataFormHome.to&&el.second === dataFormHome.from
  )
  
  return (
    <div className='summary'>
      <h1>Order summary:</h1>
      <div className='summary-data'>
        <div className='date'>Departure date: {dataFormHome.date}</div>
        <div className='time'>Departure time: {dataFormHome.time}</div>
        <div className='from'>Departure from: {dataFormHome.from}</div>
        <div className='to'>Departure to: {dataFormHome.to}</div>
        <div className='distances'>Distances: {dataFormHome.myCheckbox ?distancesFilter[0].km*2:distancesFilter[0].km}km</div>
        <div className='price'>Fare: {dataFormHome.myCheckbox ?distancesFilter[0].price*1.5:distancesFilter[0].price}PLN</div>

        {dataFormHome.myCheckbox ? <div>Round trip</div> : null}
      </div>
      <h2>{selectedBus.name}</h2>
      <img
        src={selectedBus.src}
        alt={selectedBus.name}
      />
    </div>
  )
}

export default Summary
