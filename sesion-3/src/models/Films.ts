import { Film } from "../interfaces/Film"

export const getFilmsFromModel = (): Film[] => {
    return [
        {
            "title": "Inception",
            "director": "Christopher Nolan",
            "year": 2010,
            "genre": "Sci-Fi"
        },
        {
            "title": "The Matrix",
            "director": "Lana Wachowski, Lilly Wachowski",
            "year": 1999,
            "genre": "Action"
        },
        {
            "title": "Interstellar",
            "director": "Christopher Nolan",
            "year": 2014,
            "genre": "Sci-Fi"
        },
        {
            "title": "The Godfather",
            "director": "Francis Ford Coppola",
            "year": 1972,
            "genre": "Crime"
        },
        {
            "title": "Pulp Fiction",
            "director": "Quentin Tarantino",
            "year": 1994,
            "genre": "Crime"
        }
    ]
}