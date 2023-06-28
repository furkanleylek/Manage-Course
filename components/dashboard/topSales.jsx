import React from 'react'
import Image from 'next/image'
import { BsThreeDotsVertical } from 'react-icons/bs'
import TitleH3 from '../layouts/h3'
import { MdOutlineArrowRight } from 'react-icons/md'
const topSalesData = [
    {
        name: 'Nicholas Patrick',
        imageSource: '/topSales/Nicholas.svg',
        payment: '7560.60',
        productsAmount: 22,
        rank: '+Gold'
    },
    {
        name: 'Cordell Edwards',
        imageSource: '/topSales/Cordell.svg',
        payment: '4332.50',
        productsAmount: 12,
        rank: '+Silver'
    },
    {
        name: 'Larissa Burton',
        imageSource: '/topSales/Larissa.svg',
        payment: '2460.30',
        productsAmount: 8,
        rank: '+Bronz'
    }
]

// const SingleTopSale = ({ name, payment, productsAmount, imageSource, rank }) => {
//     return (
//         <tbody className='w-full text-[12px] lg:text-base'>
//             <tr className='border-b-[1px] px-20 rounded-[20px] '>
//                 <td>
//                     <Image
//                         src={imageSource}
//                         width={35}
//                         height={35}
//                         alt={name}
//                         className='object-cover rounded-full'
//                     />
//                 </td>
//                 <td className='py-6'>
//                     <h5>{name}</h5>
//                 </td>
//                 <td>
//                     <p className='font-bold'>$ {payment}</p>
//                 </td>
//                 <td>
//                     <p>{productsAmount}</p>
//                 </td>
//                 <td>
//                     <span
//                         className={`
//                     ${rank === '+Gold' ? 'text-orange-400' : ''}
//                     ${rank === '+Silver' ? 'text-green-400' : ''}
//                     ${rank === '+Bronz' ? 'text-neutral-400' : ''}
//                   `}
//                     >
//                         {rank}
//                     </span>
//                 </td>
//                 <td>
//                     <button>
//                         <BsThreeDotsVertical />
//                     </button>
//                 </td>
//             </tr>
//         </tbody>
//     )
// }

// const AllTopSales = () => {
//     return (
//         <table className='w-full'>
//             {
//                 topSalesData.map((element, index) => {
//                     return <SingleTopSale key={index} name={element.name} payment={element.payment} productsAmount={element.productsAmount} imageSource={element.imageSource} rank={element.rank} />
//                 })
//             }
//         </table>
//     )
// }

// export default AllTopSales






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

const AllTopSales = () => {
    return (
        <div className='flex flex-col gap-4'>
            <TitleH3 className={'flex items-center gap-1'}>
                <MdOutlineArrowRight className='text-xl' />
                Top Sales Representative
            </TitleH3>
            {
                topSalesData.map((element, index) => {
                    return <SingleTopSale key={index} name={element.name} payment={element.payment} productsAmount={element.productsAmount} imageSource={element.imageSource} rank={element.rank} />
                })
            }
        </div>
    )
}

export default AllTopSales