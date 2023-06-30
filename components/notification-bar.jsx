import React from 'react'
import { IoNotificationsOutline, IoCaretBackCircleOutline } from 'react-icons/io5'
import ThemeToggle from './theme-toggle'
const NotificationBar = () => {
    return (
        <div className='w-full bg-bar md:rounded-tl-full shadow-sm shadow-border'>
            <div className='w-full flex items-center justify-between text-secondary text-2xl md:container mx-auto p-4 md:px-12 xl:px-16  '>
                <IoCaretBackCircleOutline />
                <div className='flex gap-6'>
                    <ThemeToggle />
                    <IoNotificationsOutline />
                </div>
            </div>
        </div>
    )
}

export default NotificationBar