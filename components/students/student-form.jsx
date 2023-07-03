'use client'
import React, { useState } from 'react'
import { useManageCourseContext } from '../context'
import Image from 'next/image'
import IconButton from '../ui/icon-button'
import { TiTick } from 'react-icons/ti'
import { IoClose } from 'react-icons/io5'
const StudentForm = ({ updatedId, student }) => {

    const { allStudents, setAllStudents, addStudent, setAddStudent } = useManageCourseContext()

    const [formData, setFormData] = useState(() => {
        const defaultFormData = {                                   // Eğer yeni bir student oluşturulmak istenirse , state değerlerini boş string olarak ayarlıyoruz . 
            firstName: '',
            lastName: '',
            city: '',
            phone: '',
            email: '',
            company: '',
            image: '/avatar.png'
        };

        if (student) {                                               // eğer student var ise yani update isteği yapılmış ise ,
            defaultFormData.firstName = student.firstName || '';     // ilk olarak gösterilen değerleri önceki değerleri olarak ayarlıyoruz . 
            defaultFormData.lastName = student.lastName || '';
            defaultFormData.city = student.address?.city || '';
            defaultFormData.phone = student.phone || '';
            defaultFormData.email = student.email || '';
            defaultFormData.company = student.company?.name || '';
            defaultFormData.image = student.image || '';
        }

        return defaultFormData;
    });

    const handleChange = (e) => {                           // kullanıcı girişi ile state degisikligini kontrol eder
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

    const closeEditForm = (updatedId) => {                  // isUpdate değerini false yaparak , edit form kısmını kapatıyoruz  
        setAllStudents(
            allStudents.map((student) => {
                return student.id == updatedId ? { ...student, isUpdate: false } : student
            })
        )
    }

    const closeNewStudentForm = () => {
        setAddStudent(false)                                // addStudent değerini false yaparak , yeni student ekleme formunu kapatıyoruz . 
    }

    const updateEditForm = (updatedId) => {
        setAllStudents(
            allStudents.map((student) => {
                return (
                    student.id == updatedId                 // önceki degerlerini state değerleri ile degistiriyoruz.
                        ?                                   // önceki değerleri zaten state içerisinde , eğer degistirilmemisse önceki değerleri geçerli kalır . 
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

    const addNewStudent = () => {                           // Mevcut student'ların tutuldugu state'e yeni bir student ekliyoruz . 
        setAllStudents(oldArray => [
            {
                id: Math.random(),
                firstName: formData.firstName,
                lastName: formData.lastName,
                phone: formData.phone,
                email: formData.email,
                image: formData.image,
                company: {
                    name: formData.company,
                },
                isUpdate: false
            },
            ...oldArray
        ])
        setAddStudent(false)    // addStudent değerini false yaparak , yeni student ekleme formunu kapatıyoruz . 


        /*
        try {
            const response = await fetch('https://dummyjson.com/users/add', {    // Eğer yeni oluşturulan student'i API'ile istegi ile sunucu tarafına eklememiz gerekseydi  ;
                method: 'POST',         
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    d: Math.random(),
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    phone: formData.phone,
                    email: formData.email,
                    image: formData.image,
                    company: {
                        name: formData.company,
                    },
                    isUpdate: false
                })
            });

            const data = await response.json();
            return data
        } catch (error) {
            console.error(error);
        }
        */
    }

    return (

        <form className='w-full text-secondary'>
            <table className='w-full text-xs  text-left text-secondary bg-foreground'>  {/* main table ile aynı sutün hizasında olabilmesi için , tekrardan table tanımlanması yapıldı */}
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
                                src={formData.image}
                                width={35}
                                height={35}
                                alt={`${formData.firstName} img`}
                                className='object-cover rounded-full ml-2'
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
                                    placeholder={field.label}
                                    id={field.key}
                                    value={formData[field.key]}
                                    onChange={handleChange}
                                    className='ml-[-8px] px-2 py-2 font-semibold w-32 bg-transparent border border-zinc-300 dark:border-border text-secondary rounded-sm outline-none focus:outline-none focus:ring-1 appearance-none leading-tight '
                                />
                            </td>
                        ))}
                        <td>
                            <div className='flex items-center gap-4 '>
                                {addStudent

                                    ?
                                    <>{/* yeni bir student eklenmek istendiginde gerçekleşecek onClick */}
                                        <IconButton>
                                            <TiTick
                                                size={20}
                                                className="text-green-600 dark:text-green-300 opacity-70 hover:opacity-100"
                                                onClick={addNewStudent}
                                                aria-label='Add Student'
                                            />
                                        </IconButton>
                                        <IconButton>
                                            <IoClose
                                                size={20}
                                                className="text-gray-700 dark:text-gray-200 opacity-70 hover:opacity-100"
                                                onClick={() => closeNewStudentForm()}
                                                aria-label='Close'
                                            />
                                        </IconButton>
                                    </>
                                    :
                                    <>{/* var olan student güncellenmek istendiginde gerçekleşecek onClick */}
                                        <IconButton>
                                            <TiTick
                                                size={20}
                                                className="text-green-600 dark:text-green-300 opacity-70 hover:opacity-100"
                                                onClick={() => updateEditForm(updatedId)}
                                                aria-label='Update Student'
                                            />
                                        </IconButton>
                                        <IconButton>
                                            <IoClose
                                                size={20}
                                                className="text-gray-700 dark:text-gray-200 opacity-70 hover:opacity-100"
                                                onClick={() => closeEditForm(updatedId)}
                                                aria-label='Close'
                                            />
                                        </IconButton>
                                    </>
                                }

                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}

export default StudentForm