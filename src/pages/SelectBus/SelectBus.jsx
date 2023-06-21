import React, { useState } from 'react';
import './SelectBus.css'
import bus from '../../assets/bus.json'
const SelectBus = () => {
  const [selectedOption, setSelectedOption] = useState('')
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()

    // if (selectedOption) {
    //   // At least one radio button is selected
    //   console.log('Selected option:', selectedOption)
    // } else {
    //   // No radio button is selected
    //   console.log('Please select an option.')
    // }
  }
  console.log(selectedOption);
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
            <form onSubmit={handleSubmit}>
              <label htmlFor={`select${bus.id}`}>Select</label>
              <input
                type='radio'
                name='select'
                id={`select${bus.id}`}
                value={bus.id}
                checked={selectedOption === `${bus.id}`}
                onChange={handleOptionChange}
              />
              {selectedOption === `${bus.id}`?<button>Next</button>:null}
              </form>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default SelectBus
