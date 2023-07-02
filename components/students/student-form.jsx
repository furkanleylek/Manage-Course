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

    const [formData, setFormData] = useState({ // ilk olarak gösterilen değerleri önceki değerleri olarak ayarlıyoruz . 
        firstName: student.firstName,
        lastName: student.lastName,
        city: student.address.city,
        phone: student.phone,
        email: student.email,
        company: student.company.name
    })

    const handleChange = (e) => {               // kullanıcı girişi ile state degisikligini kontrol eder
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // to table elements
    const formFields = [
        { key: 'firstName', label: 'First Name', type: 'text' },
        { key: 'lastName', label: 'Last Name', type: 'text' },
        { key: 'phone', label: 'Phone', type: 'phone' },
        { key: 'email', label: 'Email', type: 'email' },
        { key: 'company', label: 'Company', type: 'text' },
    ];

    const closeEditForm = (updatedId) => {        // isUpdate değerini false yaparak , edit form kısmını kapatıyoruz  
        setAllStudents(
            allStudents.map((student) => {
                return student.id == updatedId ? { ...student, isUpdate: false } : student
            })
        )
    }

    const updateEditForm = (updatedId) => {
        setAllStudents(
            allStudents.map((student) => {
                return (
                    student.id == updatedId          // önceki degerlerini state değerleri ile degistiriyoruz.
                        ?                            // önceki değerleri zaten state içerisinde , eğer degistirilmemisse önceki değerleri geçerli kalır . 
                        {
                            ...student,
                            firstName: formData.firstName,
                            lastName: formData.lastName,
                            phone: formData.phone,
                            email: formData.email,
                            company: {
                                ...student.company,         // Mevcut company değerinin diğer alanlarını koruyoruz
                                name: formData.company,     // Sadece name alanını güncelliyoruz
                            },
                            isUpdate: false
                        }
                        :
                        student
                )
            })
        )
    }

    return (

        <form className='w-full text-secondary'>
            <table className='w-full text-xs text-left text-secondary bg-foreground'>
                <colgroup>
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '13%' }} />
                    <col style={{ width: '15%' }} />
                    <col style={{ width: '17%' }} />
                    <col style={{ width: '17%' }} />
                    <col style={{ width: '15%' }} />
                    <col style={{ width: '13%' }} />
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
                                    className='ml-[-8px] px-2 py-2 font-semibold w-32 bg-transparent border border-zinc-300 dark:border-border text-secondary rounded-sm outline-none focus:outline-none focus:ring-1 appearance-none leading-tight '
                                />
                            </td>
                        ))}
                        <td>
                            <div className='flex items-center gap-4 '>
                                <IconButton>
                                    <TiTick size={20} className="text-green-600 dark:text-green-300 opacity-70 hover:opacity-100" onClick={() => updateEditForm(updatedId)} />
                                </IconButton>
                                <IconButton>
                                    <IoClose size={20} className="text-gray-700 dark:text-gray-200 opacity-70 hover:opacity-100" onClick={() => closeEditForm(updatedId)} />
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