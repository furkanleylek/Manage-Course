'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { AiOutlineSearch } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { useManageCourseContext } from '../context'
const Search = () => {
    const { size, page, search, setSearch } = useManageCourseContext()
    const router = useRouter()

    const handleSearch = (e) => {
        e.preventDefault();
        router.push(`/students/params?size=${size}&page=${page}&search=${encodeURIComponent(search)}`);
    };

    return (
        <form
            onSubmit={handleSearch}
            className='relative'
        >
            <input
                className=' bg-background dark:bg-foreground border border-border italic text-secondary font-semibold py-2 px-3 w-full m-auto h-10 rounded-md focus:outline-none focus:ring-2 transition duration-200 ease-in-out placeholder:not-italic  placeholder:font-normal '
                type="text"
                name="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search . . ."
            />
            <motion.button
                className="absolute top-0 right-2 h-full flex text-secondary items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, x: "-2px", y: "2px" }}
                type='submit'
            >
                <AiOutlineSearch size={24} />
            </motion.button>

        </form>
    )
}

export default Search