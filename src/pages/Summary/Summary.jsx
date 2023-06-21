import { redirect, useParams, useNavigate } from 'react-router-dom'
import bus from '../../assets/bus.json'
import './Summary.css'

const Summary = () => {
  const navigate = useNavigate()
  let { id } = useParams()
  const selectedBus = bus?.find((el) => el.id === id)
  console.log(selectedBus);
  return (
    <div className='summary'>
      <h1>Order summary:</h1>
      <h2>{selectedBus.name}</h2>
      <img src={selectedBus.src} alt={selectedBus.name}/>
    </div>
  )
}

export default Summary