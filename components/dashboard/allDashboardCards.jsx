import React from 'react'
import { FaRegUser } from 'react-icons/fa'
import { BsBookmark } from 'react-icons/bs'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { SlGraduation } from 'react-icons/sl'
import SingleDashboardCard from './singleDashboardCard'
const dashboardData = [
    {
        title: 'Students',
        numberData: '243',
        Icon: SlGraduation,
        increase: true,
        increaseAmount: '+15%'
    },
    {
        title: 'Course',
        numberData: '25',
        Icon: BsBookmark,
        increase: false,
        increaseAmount: '-3.5%'
    },
    {
        title: 'Payments',
        numberData: '556,000 $',
        Icon: AiOutlineDollarCircle,
        increase: true,
        increaseAmount: '+7%'
    },
    {
        title: 'Users',
        numberData: '350',
        Icon: FaRegUser,
        increase: true,
        increaseAmount: '+21%'
    },
]

const DashboardCard = () => {
    return (
        <div
            className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6'
        >
            {
                dashboardData.map((element, index) => {
                    return (
                        <SingleDashboardCard
                            key={index}
                            title={element.title}
                            numberData={element.numberData}
                            Icon={element.Icon}
                            increase={element.increase}
                            increaseAmount={element.increaseAmount}
                        />
                    )
                })
            }
        </div>
    )
}

export default DashboardCard