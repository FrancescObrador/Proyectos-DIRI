import React, { FormEvent, useRef, useState } from 'react'

export interface Student {
    id?: string;
    firstName: string;
    lastName: string;
    program: string;
}

interface EnrolmentFormProps {
    chosenProgram: string;
    currentEnrolments: number;
    onChangeEnrolments: (updateEnrolments: number)=> void;
    onStudentChanged: (student: Student) => void;
}

function EnrolmentForm(props: EnrolmentFormProps) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [welcomeMessage, setWelcomeMessage] = useState("");
    const nameInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setWelcomeMessage(`Bienvenido/a ${firstName} ${lastName}`); 
        props.onChangeEnrolments(props.currentEnrolments +1 );
        
        const student: Student = {
            firstName: firstName,
            lastName: lastName,
            program: props.chosenProgram
        };

        props.onStudentChanged(student);

        event.currentTarget.reset();
        nameInputRef.current?.focus();
    }

    return (
        <div>
            <form className="enrolForm" onSubmit={handleSubmit}> 
                <h1>Datos del estudiante - {props.chosenProgram} </h1>
                <label>Nombre:</label>
                <input type="text" name="fname" ref={nameInputRef}
                onBlur={(event) => setFirstName(event.target.value)}
                />
                <label>Apellidos:</label>
                <input type="text" name="lname"
                onBlur={(event) => setLastName(event.target.value)} />
                <input type="submit" value="Registrar" />
                <label id="studentMsg" className="message">{welcomeMessage}</label>
            </form> 
        </div>
    );
}

export default EnrolmentForm;