import React, { useEffect, useState } from 'react'

import {DetailsList} from "@fluentui/react/lib/DetailsList";
import { initializeIcons } from '@fluentui/react/lib/Icons';
import { Student } from './EnrolmentForm';
import {v4 as uuidv4} from 'uuid';
initializeIcons();

const columns = [{
    key: "fname", name: "Nombre",
    fieldName: "firstName",
    minWidth: 90, maxWidth: 200, isResizable: true
    }, {
    key: "lname", name: "Apellidos",
    fieldName: "lastName",
    minWidth: 90, maxWidth: 200, isResizable: true
    }, {
    key: "program", name: "Estudios",
    fieldName: "program",
    minWidth: 60, maxWidth: 200, isResizable: true
    }];

const items: any[] = [];
for (let i = 1; i < 5; i++){
    items.push({
        key: i,
        fname: "Nombre de #" + i,
        lname: "Apellido de #" + i,
        program: "UG"
    });
}

interface EnrolListProps {
    student?: Student;
}

function EnrolList(props: EnrolListProps) {

    useEffect(() => {
        if(props.student){
            if(props.student.id === undefined){
                const student: Student = {
                    ...props.student,
                    id: uuidv4()
                };
                setItems([...items, student]);
            }
        }
    }, [props.student])

    const [items, setItems] = useState<Student[]>([]);
  return (
    <div className='enrolList'>
        <DetailsList items={items} columns={columns}/>
    </div>
  )
}

export default EnrolList