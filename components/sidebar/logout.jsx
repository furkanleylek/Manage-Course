'use client'
import React from 'react'
import Image from 'next/image'
import { deleteCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
const Logout = () => {

    const router = useRouter()

    return (
        <div className='hoverEffect h-12 bg-auto w-full overflow-hidden relative before:bg-hover rounded-sm'>
            <button
                className='flex items-center justify-start gap-4 w-full h-full px-14 z-10 relative'
                onClick={() => { deleteCookie('token'), deleteCookie('username'), router.push('/login') }} // route to login page , when cookies deleted
            >
                <Image
                    src='/icons/signout.svg'
                    alt='icon'
                    width={17}
                    height={17}
                />
                <h5 className='text-sm text-primary'>
                    Logout
                </h5>
            </button>
        </div>
    )
}

export default Logout