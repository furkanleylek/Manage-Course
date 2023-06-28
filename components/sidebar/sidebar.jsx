import React from 'react'
import TitleH4 from '../layouts/h4'
import UserProfile from './userProfile'
import SidebarContent from './content'
const Sidebar = () => {
    return (
        <div className='hidden md:flex flex-col items-center justify-center gap-12 px-4  min-w-[270px] py-4 bg-[#F2EAE1] '>
            <TitleH4>
                MANAGE COURSES
            </TitleH4>
            <UserProfile />
            <SidebarContent />
        </div>
    )
}

export default Sidebar