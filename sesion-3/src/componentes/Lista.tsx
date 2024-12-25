import { useState } from 'react'
import { FilmsListViewModel } from '../viewmodel/FilmsListViewModel';
import { useFilmsListViewModel } from '../hooks/useFilmsListViewModel';
import { Film } from '../interfaces/Film';
import Detalle from './Detalle';
import AddFilm from './AddFilm';

const filmsViewModel = new FilmsListViewModel();

const Lista = ({defaultFilmTitle}: any) => {
  const {films, addFilm, removeFilm} = useFilmsListViewModel(filmsViewModel);

  //filter by defaultFilmTitle or set an empty film
  let emptyFilm = films.find(film => film.title === defaultFilmTitle) || films[0];

  const [selectedFilm, setSelectedFilm] = useState<Film>(emptyFilm);
  
  return (
    <>
    {/* items list */}
    <ul>
      {films.map(film => (
        <li key={film.title}>
          {film.title} ({film.year}) 
          <button onClick={() =>  setSelectedFilm(film)}>Ver</button>
          <button onClick={() => {removeFilm(film); setSelectedFilm(emptyFilm)}}>Eliminar</button>
        </li>
      ))}
    </ul>
    
    <hr></hr>
    {/* select film info to show */}
    <Detalle {...selectedFilm}></Detalle>
    <hr></hr>
    {/* add new film */}
    <AddFilm addFilm={addFilm}></AddFilm>
    </>
  )

}

export default Lista