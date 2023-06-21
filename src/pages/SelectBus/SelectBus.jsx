import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SelectBus.css'
import bus from '../../assets/bus.json'
const SelectBus = () => {
  const navigate = useNavigate()
  const [selectedOption, setSelectedOption] = useState('')

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
  }

  const handleNext = (id) => {
    if (id === selectedOption) {
      navigate(`/summary/${id}/`)
    }
  }

  return (
    <div className='select-bus'>
      <h1>Select Bus</h1>
      {bus.map((bus) => {
        return (
          <div
            key={bus.id}
            className='card-bus'
          >
            <div className='card-wrapper'>
              <h2>{bus.name}</h2>
              <img
                src={bus.src}
                alt={bus.name}
              />
              <div className='passengers'>
                number of passengers: <span>{bus.passengers}</span>
              </div>
              <div className='description'>{bus.description}</div>
            </div>
            <div className='select'>
              <label htmlFor={`select${bus.id}`}>Select</label>
              <input
                type='radio'
                name='select'
                id={`select${bus.id}`}
                value={bus.id}
                checked={selectedOption === `${bus.id}`}
                onChange={handleOptionChange}
              />
              {selectedOption === `${bus.id}` ? (
                <button onClick={() => handleNext(bus.id)}>Next</button>
              ) : null}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default SelectBus
