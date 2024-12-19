import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const Ayuda = () => {
  return (
    <>
        <h1>Ayuda</h1>
        <NavLink to="referencia">Referencia</NavLink> | <NavLink to="faq">F.A.Q</NavLink>
        <Outlet></Outlet>
    </>
  )
}

export default Ayuda