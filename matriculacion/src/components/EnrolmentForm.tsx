import { FormEvent, useEffect, useRef, useState } from 'react'
import { Student } from '../interfaces/Student';

interface EnrolmentFormProps {
    chosenProgram: string;
    currentEnrolments: number;
    editingStudent?: Student;
    onChangeEnrolments: (updateEnrolments: number)=> void;
    onStudentChanged: (student: Student) => void;
    
    //VM
    addStudent: (student: Student) => void;
}

function EnrolmentForm(props: EnrolmentFormProps) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [welcomeMessage, setWelcomeMessage] = useState("");
    
    const [btnTitle, setBtnTitle] = useState("Registrar");
    const [editingStudentID, setEditingStudentID] = useState<string>();
    
    const nameInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const submitter = (event.nativeEvent as SubmitEvent).submitter as HTMLInputElement;
        if(!submitter || submitter.value != "Cancelar"){

            setWelcomeMessage(`Bienvenido/a ${firstName} ${lastName}`); 
            props.onChangeEnrolments(props.currentEnrolments +1 );
            
            const student: Student = {
                id: editingStudentID,
                firstName: firstName,
                lastName: lastName,
                program: props.chosenProgram
            };
    
            props.addStudent(student);
            props.onStudentChanged(student);
        }

        setEditingStudentID(undefined);
        setFirstName("");
        setLastName("");

       // event.currentTarget.reset();
        nameInputRef.current?.focus();
        setBtnTitle("Registrar");
    }

    useEffect(() => {
        if(props.editingStudent){
            setEditingStudentID(props.editingStudent.id);
            setFirstName(props.editingStudent.firstName);
            setLastName(props.editingStudent.lastName);
            setBtnTitle("Actualizar");
        }
    }, [props.editingStudent])

    return (
        <div>
            <form className="enrolForm" onSubmit={handleSubmit}> 
                <h1>Datos del estudiante - {props.chosenProgram} </h1>
                <label>Nombre:</label>
                <input type="text" name="fname" 
                ref={nameInputRef} value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                />
                <label>Apellidos:</label>
                <input type="text" name="lname" value={lastName}
                onChange={(event) => setLastName(event.target.value)} />
                <input type="submit" value={btnTitle} />
                <input type="submit" value="Cancelar"/>
                <label id="studentMsg" className="message">{welcomeMessage}</label>
            </form> 
        </div>
    );
}

export default EnrolmentForm;