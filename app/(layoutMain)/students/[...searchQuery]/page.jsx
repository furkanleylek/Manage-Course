'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { fetchSearchUsers } from '@/services'
import AllStudents from '@/components/students/all-students'

async function SearchQuery({ params = {}, searchParams = {} }) {
    const pagePromises = [
        fetchSearchUsers(searchParams.search),
    ]
    const router = useRouter()
    const [allSearchedData] = await Promise.all(pagePromises)

    if (searchParams.search.length == 0) {
        router.push('/students')
    }

    return (
        <>
            {
                allSearchedData.length > 0
                    ?
                    <AllStudents allStudentsData={allSearchedData} />
                    :
                    <div>
                        Aradıgınz arama sonucları bulunamadı .
                    </div>
            }

        </>
    )
}

export default SearchQuery