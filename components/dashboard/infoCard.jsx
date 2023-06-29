import React from 'react'
import Image from 'next/image'
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs'

const photos = [
    {
        imgSource: '/infocard/photo1.png'
    },
    {
        imgSource: '/infocard/photo2.png'
    }, {
        imgSource: '/infocard/photo3.png'
    }
]

const InfoCard = () => {
    return (
        <div className="flex flex-col gap-10 border-[1px] py-4 px-8 w-full h-full rounded-[20px] bg-white relative text-secondary font-bold shadow-xl z-10">
            <div className='flex w-full items-center justify-between h-full '>
                <div className='flex flex-col gap-1 h-full'>
                    <h5 className='text-[12px]'>
                        Sales team target
                    </h5>
                    <span className='font-bold text-3xl text-third'>82%</span>
                    <span className='text-[12px]'>Achieved</span>
                </div>
                <div className='flex items-center gap-2 h-full'>
                    {
                        photos.map((e, index) => {
                            return (
                                <Image
                                    key={index}
                                    src={e.imgSource}
                                    width={50}
                                    height={50}
                                    alt='image'
                                    className='rounded-full object-cover border-[3px] border-third ml-[-25px] '
                                />
                            )
                        })
                    }
                    <span className='rounded-full z-[-10] bg-gradient-to-r from-third to-white p-3 ml-[-25px]'>
                        +4
                    </span>
                </div>
            </div>
            <div className='flex items-center gap-12 justify-between'>
                <div className='flex flex-col gap-1'>
                    <h5 className='text-[12px]'>
                        Cleared Qeueu
                    </h5>
                    <span className='text-3xl font-bold  text-third'>
                        1.4k
                    </span>
                    <div className='flex items-center gap-3'>
                        <span className='text-[12px]'>No of Bills</span>
                        <BsFillArrowUpRightCircleFill className='text-third' />
                        <span>
                            +15%
                        </span>
                    </div>
                </div>
                <Image
                    src="/infocard/kıvrak.svg"
                    alt="Image"
                    width={140}
                    height={140}
                />
            </div>
            <Image
                src="/infocard/bgstyle.svg"
                alt="Image"
                fill
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-50"
            />
        </div>
    )
}

export default InfoCard