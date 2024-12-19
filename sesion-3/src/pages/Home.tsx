import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import Lista from '../componentes/Lista'
import Detalle from '../componentes/Detalle'

const Home = () => {
  const {name} = useParams();
  return (
    <>
    <h1>Home</h1>
    <h2>My films:</h2>
    <Lista name></Lista>
    </>
  )
}

export default Home