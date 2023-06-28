import React from 'react'
import { IoNotificationsOutline, IoCaretBackCircleOutline } from 'react-icons/io5'
const NotificationBar = () => {
    return (
        <div className='w-full bg-white rounded-tl-full '>
            <div className='w-full flex items-center justify-between text-gray-300 text-2xl md:container  mx-auto p-4 md:px-12 xl:px-16 border-b-[1px] border-gray-100 shadow-sm'>
                <IoCaretBackCircleOutline />
                <IoNotificationsOutline />
            </div>
        </div>
    )
}

export default NotificationBar