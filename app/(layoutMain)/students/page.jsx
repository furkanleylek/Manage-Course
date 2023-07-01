import React from 'react'
import {
    fetchAllUsers
} from "@/services/index"
import AllStudents from '@/components/students/all-students'
import TableBar from '@/components/students/table-bar'
import TitleH1 from '@/components/layouts/h1'
import Search from '@/components/students/search'
import AddNewStudent from '@/components/students/add-new-student'
async function Students() {

    const pagePromises = [
        fetchAllUsers()
    ]

    const [allStudents] = await Promise.all(pagePromises)
    return (
        <div className='flex flex-col gap-2 py-4'>
            <div className='flex items-center justify-between mb-8'>
                <TitleH1>
                    Students List
                </TitleH1>
                <div className='flex gap-4 items-center'>
                    <Search />
                    <AddNewStudent />
                </div>
            </div>
            <AllStudents allStudents={allStudents} />
            <TableBar />
        </div>
    )
}

export default Students