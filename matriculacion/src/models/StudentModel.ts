import { Student } from "../interfaces/Student"

export const getStudentsFromModel = (): Student[] =>{
    return [
        {
            "id": "1",
            "firstName" : "David",
            "lastName": "Rizo",
            "program": "PG"
        },
        {
            "id": "2",
            "firstName" : "Francesc",
            "lastName": "Obrador",
            "program": "PG"
        },
        
    ]
}