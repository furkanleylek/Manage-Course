import React from 'react'
import Logout from './logout'
import SingleLink from './single-link'

const contentLinks = [
    {
        linkTitle: 'Home',
        linkHref: '/',
        linkImageSource: '/icons/home.svg'
    },
    {
        linkTitle: 'Course',
        linkHref: '/course',
        linkImageSource: '/icons/bookmark.png'
    },
    {
        linkTitle: 'Students',
        linkHref: '/students',
        linkImageSource: '/icons/students.svg'
    },
    {
        linkTitle: 'Payment',
        linkHref: '/payment',
        linkImageSource: '/icons/payment.svg'
    },
    {
        linkTitle: 'Report',
        linkHref: '/report',
        linkImageSource: '/icons/report.png'
    },
    {
        linkTitle: 'Settings',
        linkHref: '/settings',
        linkImageSource: '/icons/settings.svg'
    }
]


const SidebarContent = () => {
    return (
        <div className='flex flex-col justify-between gap-6 w-full h-full'>
            <nav className='flex flex-col items-start gap-3 w-full'>
                {
                    contentLinks.map((element, index) => {
                        return <SingleLink key={index} linkHref={element.linkHref} linkTitle={element.linkTitle} linkImageSource={element.linkImageSource} />
                    })
                }
            </nav>
            <Logout />
        </div>
    )
}

export default SidebarContent