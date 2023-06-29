'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const SingleLink = ({ linkHref, linkTitle, linkImageSource }) => {

    const pathName = usePathname() // change background color , when pathname is equal the linkhref

    return (

        <div className='hoverEffect h-12 bg-auto w-full overflow-hidden relative before:bg-hover rounded-md'>
            <Link
                href={linkHref}
                className={`${pathName === linkHref ? 'bg-third' : 'bg-transparent'} flex items-center justify-start gap-4 w-full h-full pl-[74px] z-10 relative`}
            >
                <Image
                    src={linkImageSource}
                    alt='icon'
                    width={17}
                    height={17}
                />
                <h5 className='text-sm text-primary'>
                    {linkTitle}
                </h5>
            </Link>
        </div>
    )
}

export default SingleLink