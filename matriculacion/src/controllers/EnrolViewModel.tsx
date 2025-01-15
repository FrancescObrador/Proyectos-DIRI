import { Student } from "../interfaces/Student";


export class EnrolViewModel{
    private students: Student[] = [];
    private subscribers: Array<Function> = [];

    constructor(){
        this.notifyChange();
    }

    /// Generic VM
    public subscribe(callback: () => void){
        this.subscribers.push(callback);
        return () => {
            this.subscribers = this.subscribers.filter(subscriber => subscriber !== callback);
        }
    }

    private notifyChange(){
        this.subscribers.forEach(subscriber => subscriber());
    }

    /// Generic VM End

    // public getStudent(): Student[] {
    //     throw null
    // }

    // public getStudent(id: string): Student {

    //     throw null
    // }

    public addStudent(): void {

    }

    public removeStudent(): void {

    }


}