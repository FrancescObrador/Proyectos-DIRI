import { useEffect, useState } from "react";

import { EnrolViewModel } from '../viewmodels/EnrolViewModel'
import { Student } from "../interfaces/Student";

export const useEnrolViewModel = (viewModel: EnrolViewModel) => {

    const [students, setStudents] = useState(viewModel.getStudents());

    useEffect(() => {
        const unsubscribe = viewModel.subscribe(() => {
            setStudents(viewModel.getStudents())
        });
        return () => unsubscribe();
    }, [viewModel])

    return {
        students, 
        addStudent: (student: Student) => viewModel.addStudent(student),
        removeStudent: (student: Student) => viewModel.removeStudent(student),
    }
}
