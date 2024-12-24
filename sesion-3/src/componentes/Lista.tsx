import React, { useState } from 'react'
import { FilmsListViewModel } from '../viewmodel/FilmsListViewModel';
import { useFilmsListViewModel } from '../hooks/useFilmsListViewModel';
import { Film } from '../interfaces/Film';
import Modal from './Modal';
import Detalle from './Detalle';

const filmsViewModel = new FilmsListViewModel();

const Lista = ({defaultFilmTitle}: any) => {
  const {films, addFilm, removeFilm} = useFilmsListViewModel(filmsViewModel);

  //filter by defaultFilmTitle or set an empty film
  let emptyFilm = films.find(film => film.title === defaultFilmTitle) || {title: '', year: 0, director: '', genre: ''};;

  const [selectedFilm, setSelectedFilm] = useState<Film>();
  const [newFilm, setNewFilm] = useState<Film>(emptyFilm);
  
  return (
    <>
    {/* items list */}
    <ul>
      {films.map(film => (
        <li key={film.title}>
          {film.title} ({film.year}) - {film.director} [{film.genre}]
          <button onClick={() =>  setSelectedFilm(film)}>Ver</button>
          <button onClick={() => {removeFilm(film); setSelectedFilm(emptyFilm)}}>Eliminar</button>
        </li>
      ))}
    </ul>
    
    {/* select film info to show */}
    <Detalle {...selectedFilm}></Detalle>
    </>
  )

}

export default Lista