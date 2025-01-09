import React, { useEffect, useState } from 'react'

import {DetailsList, IColumn} from "@fluentui/react/lib/DetailsList";
import { initializeIcons } from '@fluentui/react/lib/Icons';
import { Student } from './EnrolmentForm';
import {v4 as uuidv4} from 'uuid';
import {MdEdit, MdDelete} from 'react-icons/md'

initializeIcons();



interface EnrolListProps {
    student?: Student;
    onStudentRemoved: (student: Student) => void;
}

function EnrolList(props: EnrolListProps) {

    const columns: IColumn[] = [{
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
        },
        {
        key: 'actions',
        name: 'Acciones', fieldName: 'actions', minWidth: 100, maxWidth: 150, isResizable: true, onRender: (item: any) => (
        <div>
            <MdEdit style={{ cursor: 'pointer', marginRight: '10px' }} onClick={() => handleEdit(item)} /> <MdDelete style={{ cursor: 'pointer' }} onClick={() => handleDelete(item)} />
        </div> ),
        }
    ];

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

    const handleDelete = (item: Student) => {
        setItems(items.filter(i => i.id !== item.id))
        props.onStudentRemoved(item);
    }

    const handleEdit = (item: Student) => {

    }

  return (
    <div className='enrolList'>
        <DetailsList items={items} columns={columns}/>
    </div>
  )
}

export default EnrolList