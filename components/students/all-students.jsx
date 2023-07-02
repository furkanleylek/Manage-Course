'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import Delete from './crud/delete'
import Update from './crud/update'
import { useManageCourseContext } from '../context'
import StudentForm from './student-form'
const AllStudents = ({ allStudentsData }) => {

    const { addStudent, allStudents, setAllStudents } = useManageCourseContext()

    useEffect(() => {
        setAllStudents(() => allStudentsData)  // with this props way we can fetch data in server 
    }, [])

    return (
        <div className='overflow-x-auto rounded-xl  '>

            <table className='w-full text-xs text-left text-secondary'>
                <colgroup>
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '13%' }} />
                    <col style={{ width: '15%' }} />
                    <col style={{ width: '17%' }} />
                    <col style={{ width: '17%' }} />
                    <col style={{ width: '15%' }} />
                    <col style={{ width: '13%' }} />
                </colgroup>
                <thead className='text-xs text-primary uppercase bg-foreground'>
                    <tr>
                        <th scope='col' className='py-4' ></th>
                        <th scope='col' className='py-4' >Name</th>
                        <th scope='col' className='py-4' >Lastname</th>
                        <th scope='col' className='py-4' >Phone</th>
                        <th scope='col' className='py-4' >Email</th>
                        <th scope='col' className='py-4' >Company</th>
                        <th scope="col" className="px-4 py-3">
                            <span className="sr-only">Actions</span>
                        </th>
                    </tr>
                    {addStudent && (                           // ADD NEW STUDENT butonuna tıklandıgında <StudentForm/> çağırılır.
                        <tr>                                   {/* en üst satırda yeni bir form alanı oluşması için burada kullanılmıştır . */}
                            <td colSpan='7'>
                                <StudentForm />
                            </td>
                        </tr>
                    )}
                </thead>
                <tbody className='w-full '>
                    {allStudents.map((student) => (
                        <React.Fragment key={student.id}>
                            {!student.isUpdate ? (
                                <tr className='border-b-[1px] border-border'>
                                    <td className='py-4'>
                                        <Image
                                            src={student.image}
                                            width={35}
                                            height={35}
                                            alt={`${student.firstName} img`}
                                            className='object-cover ml-2 rounded-full'
                                        />
                                    </td>
                                    <td>{student.firstName}</td>
                                    <td>{student.lastName}</td>
                                    <td>{student.phone}</td>
                                    <td>{student.email}</td>
                                    <td>{student.company.name}</td>
                                    <td>
                                        <div className='flex items-center gap-4'>
                                            <Delete deletedId={student.id} />
                                            <Update updatedId={student.id} />
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                <tr className='border-b border-border'>         {/* isUpdate true ise , var olan değerler ile beraber o satırda bir update edilme formu açılır . */}
                                    <td colSpan='7'>
                                        <StudentForm student={student} updatedId={student.id} />
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AllStudents