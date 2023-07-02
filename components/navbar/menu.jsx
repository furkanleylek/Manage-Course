'use client'
import React, { useState } from 'react'
import { deleteCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { AiOutlineClose } from 'react-icons/ai'
import OutsideClickHandler from 'react-outside-click-handler'
import { BiMenuAltRight } from 'react-icons/bi'
import Link from 'next/link'
import TitleH4 from '../ui/h4'
import { SlGraduation } from 'react-icons/sl'
import { BsBookmark } from 'react-icons/bs'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { HiOutlineDocumentReport } from 'react-icons/hi'
import { CiSettings } from 'react-icons/ci'
import { GoHome } from 'react-icons/go'
import { FiLogOut } from 'react-icons/fi'

const menuContents = [
    {
        linkTitle: 'Home',
        linkHref: '/',
        Icon: GoHome
    },
    {
        linkTitle: 'Course',
        linkHref: '/course',
        Icon: BsBookmark
    },
    {
        linkTitle: 'Students',
        linkHref: '/students',
        Icon: SlGraduation
    },
    {
        linkTitle: 'Payment',
        linkHref: '/payment',
        Icon: AiOutlineDollarCircle
    },
    {
        linkTitle: 'Report',
        linkHref: '/report',
        Icon: HiOutlineDocumentReport
    },
    {
        linkTitle: 'Settings',
        linkHref: '/settings',
        Icon: CiSettings
    },
]

const Menu = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const router = useRouter()

    return (
        <div className='md:hidden'>
            <BiMenuAltRight size={26} className='cursor-pointer' onClick={() => setIsMenuOpen(true)} />
            {/* Sidebar - Open - Close */}
            <OutsideClickHandler onOutsideClick={() => { setIsMenuOpen(false) }} display="contents">
                <div
                    className={`fixed z-50 top-0 left-0 h-screen w-3/4 bg-background shadow-lg transform transition-all duration-300 ease-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                        }    `}
                >
                    <div className='flex flex-col p-4 pb-16 gap-16 h-full'>
                        <div className='flex items-center justify-between'>
                            <Link href='/' onClick={() => setIsMenuOpen(false)} className='text-primary font-bold'>
                                <TitleH4 className={"text-base"}>
                                    MANAGE COURSE
                                </TitleH4>
                            </Link>
                            <AiOutlineClose onClick={() => setIsMenuOpen(false)} size={24} className='hover:scale-105 text-white dark:text-black bg-primary p-1 rounded-full cursor-pointer' />
                        </div>
                        <div className='flex flex-col gap-4 py-6 h-full justify-between'>
                            {
                                menuContents.map((element, index) => {
                                    return (
                                        <Link
                                            href={element.linkHref}
                                            key={index}
                                            onClick={() => setIsMenuOpen(false)}
                                            className='flex gap-10 items-center  p-2 '
                                        >
                                            <element.Icon key={index} size={26} className='dark:text-white' />
                                            <h5 className='text-base text-primary'>
                                                {element.linkTitle}
                                            </h5>
                                        </Link>
                                    )
                                })
                            }
                            <button
                                className='flex items-center gap-10 p-2'
                                onClick={() => { deleteCookie('token'), deleteCookie('username'), router.push('/login'), setIsMenuOpen(false) }} // route to login page , when cookies deleted
                            >
                                <FiLogOut size={26} className='dark:text-white' />
                                <h5 className='text-base text-primary'>
                                    Logout
                                </h5>
                            </button>
                        </div>
                    </div>
                </div>
                {isMenuOpen && (
                    <div
                        className={`fixed top-0 z-40 left-0 h-screen w-screen bg-black opacity-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-[0.3]' : 'opacity-100'}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                    </div>
                )}
            </OutsideClickHandler>
        </div>
    )
}

export default Menu