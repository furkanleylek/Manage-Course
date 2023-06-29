import React from 'react'
import Image from 'next/image'
import { BsThreeDotsVertical } from 'react-icons/bs'
import TitleH3 from '../layouts/h3'

const SingleTopSale = ({ name, payment, productsAmount, imageSource, rank }) => {
    return (
        <div className='flex items-center text-secondary text-[12px] lg:text-sm justify-between gap-2 md:gap-4 xl:gap-20 border-[1px] p-2 lg:py-4 xl:px-12 rounded-[20px] shadow-sm'>
            <Image
                src={imageSource}
                width={50}
                height={50}
                alt={name}
                className='object-cover rounded-full'
            />
            <h5 className='w-full'> {/* using with w-full in every items , we can use like a table in flex*/}
                {name}
            </h5>
            <p className='font-bold w-full text-primary'> {/* using with w-full in every items , we can use like a table in flex*/}
                $ {payment}
            </p>
            <p className='w-full'> {/* using with w-full in every items , we can use like a table in flex*/}
                {productsAmount} Course
            </p>
            <span
                className={`
                    ${rank === '+Gold' ? 'text-orange-600' : ''}
                    ${rank === '+Silver' ? 'text-green-600' : ''}
                    ${rank === '+Bronz' ? 'text-neutral-600' : ''}
                    w-full hidden lg:flex 
                    `}
            >
                {rank}
            </span>
            <button className=''>
                <BsThreeDotsVertical />
            </button>
        </div>
    )
}

export default SingleTopSale