'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useManageCourseContext } from '@/components/context'
const RowsPerPage = () => {

    const [isOpenModal, setIsOpenModal] = useState(false)
    const { size, setSize, page } = useManageCourseContext()
    const router = useRouter();

    useEffect(() => {
        if (size) {
            router.push(`/students?size=${size}&page=${page}`, undefined, { shallow: true }); // shallow true ile URL güncellenir ancak sayfa yeniden render edilip veriyi tekrardan çekmez . 
        }
    }, [size]);

    const options = [6, 8, 10]

    const openModal = () => {
        setIsOpenModal(true)
    }

    const closeModal = () => {
        setIsOpenModal(false)
    }

    const handleOptionSelect = (option) => {
        setSize(option)
        // onSelectRowsPerPage(option)
        closeModal()
    }

    return (
        <div>

            <button
                onClick={openModal}
            >
                Rows per Page
            </button>
            {
                isOpenModal && (
                    <div className="modal">
                        <ul className="options-list">
                            {options.map((option) => (
                                <li
                                    key={option}
                                    className={size === option ? 'selected' : ''}
                                    onClick={() => handleOptionSelect(option)}
                                >
                                    {option}
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            }
        </div>
    )
}

export default RowsPerPage