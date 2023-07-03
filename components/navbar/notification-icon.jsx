'use client'
import React from 'react'
import { IoNotificationsOutline } from 'react-icons/io5'
import IconButton from '../ui/icon-button'
import { useRouter } from 'next/navigation'
const NotificationIcon = () => {

    const router = useRouter()

    return (
        <IconButton>
            <IoNotificationsOutline onClick={() => router.back()} />
        </IconButton>
    )
}

export default NotificationIcon