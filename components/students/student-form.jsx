'use client'
import React, { useState } from 'react'
import { useManageCourseContext } from '../context'
import Image from 'next/image'
import { MdSaveAs } from 'react-icons/md'
import IconButton from '../ui/icon-button'
import { TiTick } from 'react-icons/ti'
import { IoClose } from 'react-icons/io5'
const StudentForm = ({ updatedId, student }) => {

    const { allStudents, setAllStudents } = useManageCourseContext()

    const [formData, setFormData] = useState({
        firstName: student.firstName,
        lastName: student.lastName,
        phone: student.phone,
        email: student.email
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // to table
    const formFields = [
        { key: 'firstName', label: 'First Name', type: 'text' },
        { key: 'lastName', label: 'Last Name', type: 'text' },
        { key: 'phone', label: 'Phone', type: 'phone' },
        { key: 'email', label: 'Email', type: 'email' }
    ];

    const closeEditForm = (updatedId) => {
        allStudents.map((student) => {
            return student.id == updatedId ? { ...student, isUpdate: false } : student
        })
    }


    return (

        <form className='w-full text-secondary'>
            <table className='w-full text-xs lg:text-sm text-left text-secondary bg-foreground'>
                <colgroup>
                    <col style={{ width: 'auto' }} />
                    <col style={{ width: '20%' }} />
                    <col style={{ width: '20%' }} />
                    <col style={{ width: '20%' }} />
                    <col style={{ width: '20%' }} />
                    <col style={{ width: 'auto' }} />
                </colgroup>
                <tbody className='w-full'>
                    <tr >
                        <td className='py-4'>
                            <Image
                                src={student.image}
                                width={35}
                                height={35}
                                alt={`${student.firstName} img`}
                                className='object-cover'
                            />
                        </td>
                        {formFields.map((field) => (
                            <td key={field.key}>
                                <label htmlFor="text" className="sr-only">
                                    {field.label}
                                </label>
                                <input
                                    type={field.type}
                                    name={field.key}
                                    value={formData[field.key]}
                                    onChange={handleChange}
                                    className='ml-[-8px] px-2 py-2 font-bold bg-transparent border border-zinc-300 dark:border-border  text-secondary rounded-sm outline-none focus:outline-none focus:ring-1 appearance-none leading-tight '
                                />
                            </td>
                        ))}
                        <td>
                            <div className='flex items-center gap-4 '>
                                <IconButton>
                                    <TiTick size={20} className="text-green-600 dark:text-green-300 opacity-70 hover:opacity-100" />
                                </IconButton>
                                <IconButton>
                                    <IoClose size={20} className="text-gray-700 dark:text-gray-400 opacity-70 hover:opacity-100" onClick={closeEditForm(updatedId)} />
                                </IconButton>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}

export default StudentForm