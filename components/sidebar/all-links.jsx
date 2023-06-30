import React from 'react'
import Logout from './logout'
import SingleLink from './single-link'
import { SlGraduation } from 'react-icons/sl'

const contentLinks = [
    {
        linkTitle: 'Home',
        linkHref: '/',
    },
    {
        linkTitle: 'Course',
        linkHref: '/course',
    },
    {
        linkTitle: 'Students',
        linkHref: '/students',
    },
    {
        linkTitle: 'Payment',
        linkHref: '/payment',
    },
    {
        linkTitle: 'Report',
        linkHref: '/report',
    },
    {
        linkTitle: 'Settings',
        linkHref: '/settings',
    }
]


const SidebarContent = () => {
    return (
        <div className='flex flex-col justify-between gap-6 w-full h-full'>
            <nav className='flex flex-col items-start gap-3 w-full'>
                {
                    contentLinks.map((element, index) => {
                        return <SingleLink
                            key={index}
                            linkHref={element.linkHref}
                            linkTitle={element.linkTitle}
                        />
                    })
                }
            </nav>
            <Logout />
        </div>
    )
}

export default SidebarContent