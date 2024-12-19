import { Film } from "../interfaces/Film";
import { getFilmsFromModel } from "../models/Films";

export class FilmsListViewModel{

    private films: Film[] = [];
    private subscribers: Array<() => void> = [];

    constructor(){
        this.films = getFilmsFromModel();
        this.notifyChange();
    }

    public getFilms(): Film[]{
        console.log(this.films.length);
        return this.films;
    }

    public addFilm(film: Film): void {
        this.films.push(film);
        this.notifyChange();
    }

    public removeFilm(film: Film): void {
        this.films = this.films.filter(f => f != film);
        this.notifyChange();
    }

    public subscribe(callback: () => void){
        this.subscribers.push(callback);
        return () => {
            this.subscribers = this.subscribers.filter(subscriber => subscriber !== callback);
        }
    }

    private notifyChange(){
        this.subscribers.forEach(subscriber => subscriber());
    }
}