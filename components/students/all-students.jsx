import React from 'react'
import Image from 'next/image'
import Delete from './delete'
import Update from './update'

const AllStudents = ({ allStudents }) => {
    return (
        <div className='overflow-x-auto rounded-xl  '>
            <table className='w-full text-sm text-left text-secondary'>
                <thead className='text-xs text-primary uppercase bg-foreground'>
                    <tr>
                        <th scope='col' className='py-4' ></th>
                        <th scope='col' className='py-4' >Name</th>
                        <th scope='col' className='py-4' >Lastname</th>
                        <th scope='col' className='py-4' >Phone</th>
                        <th scope='col' className='py-4' >Email</th>
                        <th scope="col" class="px-4 py-3">
                            <span class="sr-only">Actions</span>
                        </th>
                    </tr>
                </thead>
                <tbody className='w-full'>
                    {allStudents.map((student, index) => (
                        <tr key={student.id} className='border-b-[1px] border-border'>
                            <td scope='row' className='py-4'>
                                <Image
                                    src={student.image}
                                    width={35}
                                    height={35}
                                    alt={`${student.firstName} img`}
                                    className='object-cover'
                                />
                            </td>
                            <td >{student.firstName}</td>
                            <td >{student.lastName}</td>
                            <td >{student.phone}</td>
                            <td >{student.email}</td>
                            <td>
                                <div className='flex items-center gap-4'>
                                    <Delete />
                                    <Update />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AllStudents