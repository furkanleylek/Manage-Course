'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useManageCourseContext } from '@/components/context'
import OutsideClickHandler from 'react-outside-click-handler'
const RowsPerPage = () => {

    const [isOpenModal, setIsOpenModal] = useState(false)
    const { size, setSize, page } = useManageCourseContext()
    const router = useRouter();

    useEffect(() => {
        if (size) {
            router.push(`/students?size=${size}&page=${page}`, undefined, { shallow: true }); // shallow true ile URL güncellenir ancak sayfa yeniden render edilip veriyi tekrardan çekmez . 
        }
    }, [size]);

    const openModal = () => {
        setIsOpenModal(true)
    }

    const handleOptionSelect = (option) => {
        setSize(option)
        setIsOpenModal(false)
    }

    return (
        <div className="relative text-sm text-secondary">
            <button onClick={openModal} className="border border-border font-semibold  py-2 px-4 rounded">
                Rows per Page
            </button>
            {isOpenModal && (
                <OutsideClickHandler
                    onOutsideClick={() => setIsOpenModal(false)}>
                    <div className="absolute top-[-130px] bg-background z-10 right-0 w-24 border border-border rounded shadow">
                        <ul className="">
                            {[6, 8, 10].map((option) => (
                                <li
                                    key={option}
                                    className={`cursor-pointer border-b border-border p-2 ${size === option ? 'bg-foreground' : ''
                                        }`}
                                    onClick={() => handleOptionSelect(option)}
                                >
                                    {option}
                                </li>
                            ))}
                        </ul>
                    </div>
                </OutsideClickHandler>
            )}
        </div>
    )
}

export default RowsPerPage