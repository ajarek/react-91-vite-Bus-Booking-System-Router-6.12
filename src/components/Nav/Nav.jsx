import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import { fetchStorage } from '../../helper/localStorage'

import './Nav.css'
import { React, useState, useContext } from 'react'
import { AppContext } from '../../App'

const Nav = () => {
  const { isLogin } = useContext(AppContext)
  const [isOpen, setOpen] = useState(false)
  const user = fetchStorage('register')

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
            to={'/register'}
          >
            <h1>Register</h1>
          </Link>
          <Link
            className='link'
            to={'/login'}
          >
            <h1>Login</h1>
          </Link>

          {isLogin ? (
            <span
              style={{ color: '#05d69e' }}
              className='is-login'
            >
              👍 {user.name}
            </span>
          ) : (
            <span
              style={{ color: '#ff0000' }}
              className='is-login'
            >
              👎 Not logged in{' '}
            </span>
          )}
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
