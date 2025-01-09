import { useEffect, useState } from "react";
import { FilmsListViewModel } from "../viewmodel/FilmsListViewModel";
import { Film } from "../interfaces/Film";

export const useFilmsListViewModel = (viewModel: FilmsListViewModel) => {
    
    const [films, setFilms] = useState<Film[]>(viewModel.getFilms());

    useEffect(() => {
        const unsubscribe = viewModel.subscribe(() => {
            setFilms(viewModel.getFilms());
        });
        return () => unsubscribe();
    }, [viewModel]);
    
    return {
        films,
        addFilm: (film: Film) => viewModel.addFilm(film),
        removeFilm: (film: Film) => viewModel.removeFilm(film),
    }
}