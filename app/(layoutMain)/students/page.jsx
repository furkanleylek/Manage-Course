import React from 'react'
import {
    fetchAllUsers
} from "@/services/index"
import AllStudents from '@/components/students/all-students'

async function Students() {

    const pagePromises = [
        fetchAllUsers(10, 0)
    ]

    const [allStudentsData] = await Promise.all(pagePromises)
    return (
        <AllStudents allStudentsData={allStudentsData} />
    )
}

export default Students