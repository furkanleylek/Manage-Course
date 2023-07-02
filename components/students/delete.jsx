'use client'
import React, { useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import IconButton from '../ui/icon-button'
import { useManageCourseContext } from '../context'
import OutsideClickHandler from 'react-outside-click-handler'
const Delete = ({ deletedId }) => {

    const { setAllStudents } = useManageCourseContext()
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false); // to show delete modal

    const removeStudent = async () => {
        setAllStudents((student) => {                            // change in state
            return student.filter((e) => e.id !== deletedId)     // deletedId ile eşleşmeyen idleri geri döndürür dolayısıyla deletedId silinir
        })

        /*
         fetch('https://dummyjson.com/users/1', {      // change in database , if we have
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(console.log);
         */
    }


    return (
        <>
            <IconButton
            >
                <AiOutlineDelete size={20} className="text-third opacity-70 hover:opacity-100" onClick={() => setIsOpenDeleteModal(true)} />
            </IconButton>
            {isOpenDeleteModal ? (
                <div className="fixed z-50 inset-0 overflow-y-auto top-0 after:content[''] after:opacity-60  after:bg-black  after:fixed after:inset-0 ">
                    <div className="flex items-center justify-center min-h-screen ">
                        <OutsideClickHandler onOutsideClick={() => { setIsOpenDeleteModal(false) }} display="contents">
                            <div className="bg-background opacity-100 flex flex-col z-50 p-8 rounded-md ">
                                <p className="text-secondary font-semibold text-center font-base border-b-2 py-4 mb-4">
                                    Are you sure you want to delete this task?
                                </p>
                                <div className="text-secondaryw-full flex items-center justify-evenly">
                                    <button
                                        onClick={() => { setIsOpenDeleteModal(false), removeStudent() }}
                                        className='p-3 rounded-xl bg-red-400 text-white'
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={() => setIsOpenDeleteModal(false)}
                                        className='p-3 rounded-xl bg-gray-400 text-white'
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </OutsideClickHandler>
                    </div>
                </div>
            ) : null}
        </>
    )
}
export default Delete