'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SlGraduation } from 'react-icons/sl'
import { BsBookmark } from 'react-icons/bs'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { HiOutlineDocumentReport } from 'react-icons/hi'
import { CiSettings } from 'react-icons/ci'
import { GoHome } from 'react-icons/go'

const SingleLink = ({ linkHref, linkTitle }) => {
    const pathName = usePathname() // change background color , when pathname is equal the linkhref

    // react-icons'dan alınan iconları props olarak all-links içerisinden yollarken , 'use client' ile ilgili bir sorun ortaya çıktıgından dolayı , single-link içerisinden tanımlandı . 
    const icons = [
        {
            title: "Home",
            Icon: GoHome
        },
        {
            title: "Course",
            Icon: BsBookmark
        },
        {
            title: "Students",
            Icon: SlGraduation
        },
        {
            title: "Payment",
            Icon: AiOutlineDollarCircle
        },
        {
            title: "Report",
            Icon: HiOutlineDocumentReport
        },
        {
            title: "Settings",
            Icon: CiSettings
        },
    ]

    return (

        <div className='hoverEffect h-12 bg-auto w-full overflow-hidden relative before:bg-hover rounded-md text-secondary'>
            <Link
                href={linkHref}
                className={`${pathName === linkHref ? 'bg-third' : 'bg-transparent'} flex items-center justify-start gap-4 w-full h-full pl-[74px] z-10 relative`}
            >
                {
                    icons.map((element, index) => {
                        if (element.title === linkTitle) {
                            return <element.Icon key={index} size={18} className='dark:text-white' />
                        }
                    })
                }
                <h5 className='text-sm text-primary'>
                    {linkTitle}
                </h5>
            </Link>
        </div>
    )
}

export default SingleLink