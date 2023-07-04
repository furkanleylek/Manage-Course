'use client'
import React from 'react'
import { useManageCourseContext } from '@/components/context'
const AddNewStudent = () => {

    const { setAddStudent } = useManageCourseContext()

    return (
        // addStudent state', true hale getirelerek . Tablo içerisinde student-form'un çagırılması sağlanılır . 
        <button
            className='bg-third text-white py-2 px-[6px] md:py-3 md:px-5 rounded-md text-xs opacity-80 hover:opacity-100'
            onClick={() => setAddStudent(true)}
        >
            ADD NEW STUDENT
        </button>
    )
}

export default AddNewStudent 