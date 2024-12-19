import { Film } from '../interfaces/Film'

const Detalle = ({ title, year, director, genre }: Film) => {
  return (
   <>
        <h1>{title}</h1>
        <p><strong>Year:</strong> {year}</p>
        <p><strong>Director:</strong> {director}</p>
        <p><strong>Genre:</strong> {genre}</p>
   </>
  )
}

export default Detalle