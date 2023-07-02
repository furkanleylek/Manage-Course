'use client'
import React from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import IconButton from '../../ui/icon-button'
import { useManageCourseContext } from '../../context'

const Update = ({ updatedId }) => {

    const { allStudents, setAllStudents } = useManageCourseContext()

    const updateStudent = () => {
        setAllStudents(
            allStudents.map((student) => {
                return student.id == updatedId ? { ...student, isUpdate: true } : { ...student, isUpdate: false } // her bir student object'ine bir isUpdate ekliyoruz . Eper isUpdate true ise <SingleStudent/> componentini editlenebilir hale getiriyoruz . 
            })                                                                                                    // bu sayede bir modal üzerinden update yapmak yerine, aynı componentin alanını kullanabiliriz . 
        )
    }

    // database tarafında da update yapmamız gerekseydi ; 

    // fetch(`https://dummyjson.com/users/${id}`, {
    //     method: 'PUT', /* or PATCH */
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({    
    //         name : nameState,
    //         lastName : lastNameState,
    //         phone : phoneState,
    //         email : emailState,
    //     })
    // })
    //     .then(res => res.json())
    //     .then(console.log);


    return (
        <IconButton
        >
            <AiOutlineEdit size={20} className="text-third opacity-70 hover:opacity-100" onClick={updateStudent} />
        </IconButton>
    )
}

export default Update