'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'
import Link from 'next/link'
import RowsPerPage from './rows-per-page'
import { useManageCourseContext } from '@/components/context'
const PaginationBar = () => {

    const { size, page, setPage, setSearch } = useManageCourseContext()
    const router = useRouter()
    const totalPages = 9
    const visiblePages = []

    const maxVisiblePages = 5;
    let startPage = Math.max(page - 2, 1);
    let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);
    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(endPage - maxVisiblePages + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        visiblePages.push(i);
    }
    return (
        <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
            <RowsPerPage />
            <div className='flex items-center gap-4 '>
                <Link
                    href={`/students?size=${size}&page=${page - 1}`}
                    passHref
                >
                    <button
                        disabled={page === 1}
                        className='disabled:hidden flex items-center'
                        onClick={() => setPage((prev) => prev - 1)}
                    >
                        <MdNavigateBefore size={20} />
                    </button>
                </Link>

                <div className='flex gap-4 items-center'>
                    {
                        visiblePages.map((visiblePage) => {
                            return (
                                <button
                                    key={visiblePage}
                                    className={`${visiblePage === page ? 'bg-foreground dark:bg-gray-700' : ''} border border-border p-1 px-3 rounded-sm text-xs `}
                                    onClick={() => { setPage(visiblePage), setSearch(''), router.push(`/students?size=${size}&page=${visiblePage}`) }}
                                >
                                    {visiblePage}
                                </button>
                            )
                        })
                    }
                </div>
                <Link
                    href={`/students?size=${size}&page=${page + 1}`}
                    passHref
                >
                    <button
                        disabled={page === totalPages}
                        className='disabled:hidden flex items-center'
                        onClick={() => setPage((prev) => prev + 1)}
                    >
                        <MdNavigateNext size={20} />
                    </button>
                </Link>
            </div>
        </nav>
    )
}

export default PaginationBar