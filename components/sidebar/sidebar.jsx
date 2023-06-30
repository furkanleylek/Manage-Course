import React from 'react'
import TitleH4 from '../layouts/h4'
import UserProfile from './user-profile'
import SidebarContent from './content'
const Sidebar = () => {
    return (
        <div className='hidden md:flex flex-col items-center gap-8 px-4 min-w-[270px] py-4 bg-foreground fixed left-0 h-full overflow-y-auto'>
            <TitleH4 >
                MANAGE COURSES
            </TitleH4>
            <UserProfile />
            <SidebarContent />
        </div >
    )
}

export default Sidebar