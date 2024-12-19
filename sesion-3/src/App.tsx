import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import FAQ from './pages/FAQ'
import NotFound from './pages/NotFound'
import Referencia from './pages/Referencia'
import Ayuda from './pages/Ayuda'
import Navbar from './componentes/Navbar'

function App() {

  return (
    <>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ayuda" element={<Ayuda/>}>
          <Route path="faq" element={<FAQ/>} />
          <Route path="referencia" element={<Referencia/>} />
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App
