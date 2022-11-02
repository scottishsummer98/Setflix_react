import React, { useEffect, useState } from 'react'
import './Nav.css'
import Logo from './images/Logo.png'
import Thumbnail from './images/Thumbnail.png'

function Nav() {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else handleShow(false)
    })
    return () => {
      window.removeEventListener('scroll', null)
    }
  }, [])

  return (
    <div>
      <div className={`nav ${show && 'nav_black'} container_nav`}>
        <img className="nav_logo" src={Logo} alt="Netflix Logo" />

        <img className="nav_avatar" src={Thumbnail} alt="Aavatar Logo" />
      </div>
    </div>
  )
}

export default Nav
