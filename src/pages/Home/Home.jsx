import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormHome } from '../../helper/FormHome/FormHome'
import './Home.css'

const Home = () => {
  const [dataFormHome, setDataFormHome] = useState(null)
  const [alert, setAlert] = useState(false)
  const navigate = useNavigate()
  const handleFormHome = (data) => {
    if (data.from === data.to) {
      setAlert(true)
    }
    if (data.from !== data.to) {
      setDataFormHome(data)
      setAlert(false)
      navigate('/select-bus')
    }
  }
  console.log(dataFormHome)
  return (
    <div className='home'>
      <section className='section'>
        <h1>Book a Bus</h1>
        {alert ? <div style={{ color: 'red' }}>cities no different</div> : null}
        <FormHome onSubmit={handleFormHome} />
      </section>
    </div>
  )
}

export default Home
