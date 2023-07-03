'use client'
import React, { createContext, useState, useContext } from 'react'
import { useSearchParams } from 'next/navigation'
const Context = createContext()

function ContextProvider({ children }) {
    const searchParams = useSearchParams()
    console.log("searchParams:", searchParams.get('search'))
    const [allStudents, setAllStudents] = useState([])  // Alınan datayı bir state içerisinde tutarız , bu sayede delete-update-post işlemlerinde anlık degisiklikleri yansıtabiliriz 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [addStudent, setAddStudent] = useState(false) // butona tıklanıldıgında student-form işlevini çagırmak için kullanılacak
    const [size, setSize] = useState(6)
    const [page, setPage] = useState(searchParams.get('page') || 1)  // burada sayfa ilk yüklenirken URL'deki page'i karsılayan bir data olması için ,  URL'deki page key'inin value karsılıgını alıyoruz, böylece kullanıcının kopyala yapıstır yaptıgı URL'in bir karsılıgı oluyor . 
    const [search, setSearch] = useState(searchParams.get('search') || '')
    const data = {
        allStudents, setAllStudents,
        email, setEmail,
        password, setPassword,
        addStudent, setAddStudent,
        size, setSize,
        page, setPage,
        search, setSearch
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider

export const useManageCourseContext = () => useContext(Context)