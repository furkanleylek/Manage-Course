'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { fetchSearchUsers } from '@/services'
import AllStudents from '@/components/students/all-students'

async function SearchQuery({ params, searchParams }) {

    const pagePromises = [
        fetchSearchUsers(searchParams.q)
    ]
    const router = useRouter()
    const [allSearchedData] = await Promise.all(pagePromises)

    if (searchParams.q == '') {
        router.push('/students')
    }

    return (
        <AllStudents allStudentsData={allSearchedData} />
    )
}

export default SearchQuery