import { useEffect, useState } from "react";

import { EnrolViewModel } from '../viewmodels/EnrolViewModel'
import { Student } from "../interfaces/Student";

export const useEnrolViewModel = (viewModel: EnrolViewModel) => {

    const [students, setStudents] = useState(viewModel.getStudents());
    const [program, setProgram] = useState("UG");
    const [ugEnrolments, setUGEnrolments] = useState(0);
    const [pgEnrolments, setPGEnrolments] = useState(0);
    
    /*
    const [student, setStudent] = useState<Student>();
    const [editingStudent, setEditingStudent] = useState<Student>();
    */

    useEffect(() => {
        const unsubscribe = viewModel.subscribe(() => {
            setStudents(viewModel.getStudents());
            setProgram(viewModel.getProgram());
            setUGEnrolments(viewModel.getUgEnrolments());
            setPGEnrolments(viewModel.getPgEnrolments());
        });

        return () => unsubscribe();
    }, [viewModel])

    return {
        students, 
        program,
        ugEnrolments,
        pgEnrolments,
        addStudent: (student: Student) => viewModel.addStudent(student),
        removeStudent: (student: Student) => viewModel.removeStudent(student),
        updateStudent: (student: Student) => viewModel.updateStudent(student),
        setProgram: (program: string) => viewModel.setProgram(program),
        setUgEnrolments:(value: number) => viewModel.setUgEnrolments(value),
        setPgEnrolments : (value: number) => viewModel.setPgEnrolments(value),
    }
}
