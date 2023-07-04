'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import Delete from './crud/delete'
import Update from './crud/update'
import { useManageCourseContext } from '../context'
import StudentForm from './student-form'
import { useSearchParams } from 'next/navigation'

const AllStudents = ({ allStudentsData }) => {

    const { page, size, addStudent, allStudents, setAllStudents } = useManageCourseContext()
    const searchParams = useSearchParams()

    useEffect(() => {
        async function handleData() {
            try {
                const res = await fetch(`https://dummyjson.com/users?limit=10&skip=${(page - 1) * 10}`)  // URL de ki page value değerine göre yeni API isteği gönderir .
                const data = await res.json()
                setAllStudents(() => data.users?.slice(0, searchParams.get('size')))                     // API isteğinden gelen data boyutunu , URL de ki size value değerine göre günceller . 
                return data.users
            } catch (error) {
                throw new Error(error)
            }
        }
        if (!searchParams.get('search')) {                             // eğer URL de search parametresi yok ise URL'deki page'e göre istek için handleData() fonksiyonunu çağırır .
            handleData()
        } else if (searchParams.get('search')) {                       // eğer URL de search parametresi var ise allStudentsData props'u [...searchQuery] içerisinden geliyordur . 
            if (allStudentsData) {                                     // bu yüzden yeniden istek atmasını önlemek için if içeriisinde kullanırız . 
                setAllStudents(() => allStudentsData.slice(0, searchParams.get('size')))
            }
        }

    }, [searchParams.get('search'), searchParams.get('size'), searchParams.get('page')])   // URL'deki değişimlere göre yeniden API isteği atılır . 

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
                    <tr >
                        <th scope='col' className='py-4' ></th>
                        <th scope='col' className='py-4' >Name</th>
                        <th scope='col' className='py-4' >Lastname</th>
                        <th scope='col' className='py-4' >Phone</th>
                        <th scope='col' className='py-4' >Email</th>
                        <th scope='col' className='py-4' >Company</th>
                        <th scope="col" className="">
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
                            {!student.isUpdate ? (    // update componenti tarafından degistirilen , isUpdate ' i kontrol eder . Eğer true ise tablo içerisinde edit formu çagırılır . 
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

export default AllStudents;