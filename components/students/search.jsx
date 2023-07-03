'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AiFillCloseCircle, AiOutlineSearch } from 'react-icons/ai'
import { motion } from 'framer-motion'
const Search = () => {
    const [isFocused, setIsFocused] = useState(false);

    const router = useRouter()

    const handleSearch = (e) => {
        e.preventDefault();
        const searchTerm = e.target.search.value;
        router.push(`/students/search?q=${encodeURIComponent(searchTerm)}`);
    };

    return (
        <form
            onSubmit={handleSearch}
            className='relative'
        >
            <input
                className={`${isFocused ? '' : ''} bg-background dark:bg-foreground border border-border italic text-secondary font-semibold py-2 px-3 w-full m-auto h-10 rounded-md focus:outline-none focus:ring-2 transition duration-200 ease-in-out`}
                type="text"
                name="search"
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