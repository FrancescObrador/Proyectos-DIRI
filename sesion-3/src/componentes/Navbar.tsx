import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <span/>
        <NavLink to="/ayuda">Ayuda</NavLink>
    </nav>
  )
}

export default Navbar
