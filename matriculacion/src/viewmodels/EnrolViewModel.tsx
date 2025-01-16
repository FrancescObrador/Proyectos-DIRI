import { Student } from "../interfaces/Student";


export class EnrolViewModel {
    private students: Student[] = [];
    private subscribers: Array<Function> = [];

    constructor(){
        this.notifyChange();
        this.students = [...this.students, {id: "aa", firstName:"David", lastName:"Rizo", program:"UG" }]
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

    public getStudents(): Student[] {
        return this.students;
    }

    public getStudent(id: string): Student | undefined {
        return this.students.find(s => s.id == id);
    }

    public addStudent(student: Student): void {
        this.students = [...this.students, student];
        this.notifyChange();
    }

    public removeStudent(student: Student): void {
        this.students = this.students.filter(s => s.id != student.id)
        this.notifyChange();
    }

}