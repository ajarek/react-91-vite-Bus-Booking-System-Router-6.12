import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'



import './Nav.css'
import { React, useState, useContext } from 'react'
import { AppContext } from '../../App'

const Nav = () => {
  const [isOpen, setOpen] = useState(false)

  

 

  return (
    <>
    
      <nav className='nav'>
        <div className='logo'>
          <Link
            className='link'
            to={'/'}
          >
            <img
              src='/images/logo.png'
              alt='logo'
            />
           <h1> Bus Booking System</h1>
          </Link>
        </div>

        <ul className={!isOpen ? 'wrapper' : 'wrapper navbar-none'}>
          <Link
            className='link'
            to={'/'}
          >
            <h1> Home</h1>
          </Link>
          <Link
            className='link'
            to={'/select-bus'}
          >
            <h1> SelectBus</h1>
          </Link>
          
        </ul>
     
        <div className='hamburger'>
          <Hamburger
            size={30}
            duration={0.3}
            distance='md'
            color={isOpen ? '#ff3f34' : '#ffffff'}
            easing='ease-in'
            rounded
            label='Show menu'
            onToggle={(toggled) => {
              setOpen(true)
              if (toggled) {
                // open a menu
              } else {
                setOpen(false)
              }
            }}
          />
        </div>
      </nav>
    </>
  )
}

export default Nav
