'use client'
import React from 'react'
import { IoCaretBackCircleOutline } from 'react-icons/io5'
import IconButton from '../ui/icon-button'
import { useRouter } from 'next/navigation'
const BackIcon = () => {

    const router = useRouter()

    return (
        <IconButton>
            <IoCaretBackCircleOutline onClick={() => router.back()} />
        </IconButton>
    )
}

export default BackIcon