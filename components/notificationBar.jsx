import React from 'react'
import { IoNotificationsOutline, IoCaretBackCircleOutline } from 'react-icons/io5'
const NotificationBar = () => {
    return (
        <div className='w-full  rounded-tl-full shadow-sm bg-red-500'>
            <div className='w-full flex items-center justify-between text-gray-300 text-2xl md:container mx-auto p-4 md:px-12 xl:px-16 border-b-[1px] border-gray-100 '>
                <IoCaretBackCircleOutline />
                <IoNotificationsOutline />
            </div>
        </div>
    )
}

export default NotificationBar