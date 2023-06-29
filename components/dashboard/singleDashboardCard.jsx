import React from 'react'
import { HiMiniArrowDownLeft, HiMiniArrowUpRight } from 'react-icons/hi2'

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

export default SingleDashboardCard