import React from 'react'
import {
    fetchAllUsers
} from "@/services/index"
import AllStudents from '@/components/students/all-students'
import TitleH1 from '@/components/ui/h1'
import Search from '@/components/students/search'
import AddNewStudent from '@/components/students/crud/create'
import TableBar from '@/components/students/table-bar'

async function Students() {

    const pagePromises = [
        fetchAllUsers()
    ]

    const [allStudentsData] = await Promise.all(pagePromises)
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
            <AllStudents allStudentsData={allStudentsData} />
            <TableBar />
        </div>
    )
}

export default Students