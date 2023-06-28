import React from 'react'
import Image from 'next/image'
import { HiMiniArrowDownLeft, HiMiniArrowUpRight } from 'react-icons/hi2'
import { FaGraduationCap, FaRegUser } from 'react-icons/fa'
import { BsBookmark } from 'react-icons/bs'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { SlGraduation } from 'react-icons/sl'
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
        numberData: '13',
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
        numberData: '3',
        Icon: FaRegUser,
        increase: true,
        increaseAmount: '+21%'
    },
]

const SingleDashboardCard = ({ title, numberData, increase, increaseAmount, Icon }) => {
    return (
        <div className="flex items-center text-secondary justify-between border-[1px] py-4 px-6 rounded-[20px] shadow-md ">


            <div className='flex flex-col gap-4'>
                <h5>
                    {title}
                </h5>
                <span className='font-bold text-xl text-primary'>
                    {numberData}
                </span>
                <div className='flex items-center gap-2'>
                    {
                        increase ? <HiMiniArrowUpRight className='text-green-700 text-2xl p-1 rounded-full bg-green-300' /> : <HiMiniArrowDownLeft className='text-red-600 text-2xl p-1 rounded-full bg-red-300' />
                    }
                    <span
                        className={`${increase ? 'text-green-400' : 'text-red-400'} font-semibold text-[12px]`}
                    >
                        {increaseAmount}
                    </span>
                </div>
            </div>
            <div className='flex flex-col h-full items-end justify-between'>
                <Icon className="text-3xl text-gray-700" /> {/* Icon bileşenini kullanın */}
                <span className='underline text-[12px] underline-offset-2 text-purple-600 cursor-pointer'>
                    View Report
                </span>
            </div>
        </div>
    )
}

const DashboardCard = () => {
    return (
        <div
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols3 xl:grid-cols-4 gap-6'
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