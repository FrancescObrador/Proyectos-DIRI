import { Student } from "../interfaces/Student";
import { getStudentsFromModel } from "../models/StudentModel";


export class EnrolViewModel {
    private subscribers: Array<Function> = [];
    
    private students: Student[] = [];
    private program: string = "UG";
    private ugEnrolments: number = 0;
    private pgEnrolments: number = 0;
    

    constructor(){
        this.notifyChange();
        this.students = getStudentsFromModel();
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
        return this.students.find(s => s.id === id);
    }

    public addStudent(student: Student): void {
        this.students = [...this.students, student];
        this.notifyChange();
    }

    public removeStudent(student: Student): void {
        this.students = this.students.filter(s => s.id !== student.id)
        this.notifyChange();
    }

    public updateStudent(updatedStudent: Student): void {
        this.students = this.students.map(student =>
            student.id === updatedStudent.id ? updatedStudent : student
        );
        this.notifyChange();
    }

    public getProgram(): string {
        return this.program;
    }

    public setProgram(program: string): void {
        this.program = program;
        this.notifyChange();
    }

    public getUgEnrolments(): number {
        return this.ugEnrolments;
    }

    public setUgEnrolments(value: number): void {
        this.ugEnrolments = value;
        this.notifyChange();
    }

    public getPgEnrolments(): number {
        return this.pgEnrolments;
    }

    public setPgEnrolments(value: number): void {
        this.pgEnrolments = value;
        this.notifyChange();
    }
}