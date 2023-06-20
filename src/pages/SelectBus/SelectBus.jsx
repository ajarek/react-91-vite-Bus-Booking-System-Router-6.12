import './SelectBus.css'
import bus from '../../assets/bus.json'
const SelectBus = () => {
  return (
    <div className='select-bus' >
     {bus.map((bus) =>{
      return (
        <div key={bus.id} className="card-bus">
          <div className="card-wrapper">
          <h2>{bus.name}</h2>
          <img src={bus.src} alt={bus.name} />
          <div className="passengers">number of passengers {bus.passengers}</div>
          <div className="description">{bus.description}</div>
          </div>
          <div className="select">
            <label htmlFor={`select${bus.id}`}>Select</label>
            <input type="radio" name="select" id={`select${bus.id}`} />
          </div>
        </div>
      )
     })}
    </div>
  )
}

export default SelectBus
