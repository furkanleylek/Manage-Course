import React from 'react'
import Search from '@/components/students/search'
import TitleH1 from '@/components/ui/h1'
import AddNewStudent from '@/components/students/crud/create'
import PaginationBar from '@/components/students/pagination-bar/pagination-bar'
export const metadata = {
    title: 'Manage Course | Students',
    description: 'Manage course students ',
}

export default function StudentsLayout({ children }) {      // students için bir layout yaparak , search oldugunda temanın aynı kalmasını amaclıyoruz
    return (
        <section className='flex flex-col gap-2 py-4 overflow-x-hidden'>
            <div className='flex flex-col gap-8 md:flex-row md:items-center justify-between mb-8'>
                <TitleH1>
                    Students List
                </TitleH1>
                <div className='flex gap-4 items-center'>
                    <Search />
                    <AddNewStudent />
                </div>
            </div>
            {children}
            <PaginationBar />
        </section>
    )
}