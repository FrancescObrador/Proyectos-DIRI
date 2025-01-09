import React from 'react'
import { useParams } from 'react-router-dom'
import Lista from '../componentes/Lista'

const Home = () => {
  const {name} = useParams();
  return (
    <>
    <Lista name></Lista>
    </>
  )
}

export default Home