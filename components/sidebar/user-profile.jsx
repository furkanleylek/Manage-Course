import React from 'react'
import Image from 'next/image'

const UserProfile = () => {
    return (
        <div className='flex flex-col items-center justify-center '>
            <Image
                src='/avatar.png'
                width={120}
                height={120}
                alt='avatar'
                className='object-cover rounded-full mb-4'
            />
            <h5 className='text-primary text-[17px] font-bold'>
                John Doe
            </h5>
            <span className='text-third text-sm'>
                Admin
            </span>
        </div>
    )
}

export default UserProfile