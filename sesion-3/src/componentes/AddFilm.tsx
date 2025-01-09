import React, { useState } from 'react'
import { Film } from '../interfaces/Film';

interface AddFilmProps {
    addFilm: (film: Film) => void
}

const AddFilm = ( { addFilm } : AddFilmProps ) => {

    const [title, setTitle] = useState('');
    const [year, setYear] = useState(0);
    const [director, setDirector] = useState('');
    const [genre, setGenre] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(title, year, director, genre);
        addFilm({title, year, director, genre});
        e.currentTarget.reset();
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} />
            <label>Year</label>
            <input type="number" name="year" onChange={(e) => setYear(parseInt(e.target.value))}/>
            <label>Director</label>
            <input type="text" name="director" onChange={(e) => setDirector(e.target.value)} />
            <label>Genre</label>
            <input type="text" name="genre" onChange={(e) => setGenre(e.target.value)} />

            <button type="submit">Add film</button>
        </form>
    </>
  )
}

export default AddFilm