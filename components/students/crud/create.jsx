'use client'
import React from 'react'
import { useManageCourseContext } from '@/components/context'
import StudentForm from '../student-form'
const AddNewStudent = () => {

    const { setAddStudent } = useManageCourseContext()

    return (
        <button
            className='bg-third text-white py-3 px-5 rounded-md text-xs opacity-80 hover:opacity-100'
            onClick={() => setAddStudent(true)}
        >
            ADD NEW STUDENT
        </button>
    )
}

export default AddNewStudent 