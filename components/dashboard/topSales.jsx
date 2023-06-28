'use client'
import React, { useState } from 'react'
import SingleTopSale from './singleTopSale'
import { MdOutlineArrowRight, MdOutlineArrowDropDown } from 'react-icons/md'
import { motion, AnimatePresence } from 'framer-motion'
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

const AllTopSales = () => {

    const [showTopSalesData, setShowTopSalesData] = useState(true)

    const handleClick = () => {
        setShowTopSalesData(!showTopSalesData);
    };


    // with framer-motion library , we can animate the Top Sales Representative button and datas
    return (
        <div className='flex flex-col gap-4'>
            <motion.button
                className='flex items-center gap-1 font-bold text-base p-1 max-w-[260px]'
                onClick={handleClick}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
            >
                {showTopSalesData ? (
                    <motion.span
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: -90 }}
                    >
                        <MdOutlineArrowDropDown className='text-xl' />
                    </motion.span>
                ) : (
                    <motion.span
                        initial={{ opacity: 0, rotate: 0 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 0 }}
                    >
                        <MdOutlineArrowRight className='text-xl' />
                    </motion.span>
                )}
                Top Sales Representative
            </motion.button>
            <AnimatePresence>
                {
                    showTopSalesData && (
                        <motion.div
                            className='flex flex-col gap-4 '
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                        >
                            {
                                topSalesData.map((element, index) => {
                                    return <SingleTopSale key={index} name={element.name} payment={element.payment} productsAmount={element.productsAmount} imageSource={element.imageSource} rank={element.rank} />
                                })
                            }
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    )
}

export default AllTopSales