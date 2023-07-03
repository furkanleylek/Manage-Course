'use client'
import React, { createContext, useState, useContext } from 'react'
const Context = createContext()

function ContextProvider({ children }) {
    const [allStudents, setAllStudents] = useState([])  // Alınan datayı bir state içerisinde tutarız , bu sayede delete-update-post işlemlerinde anlık degisiklikleri yansıtabiliriz 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [addStudent, setAddStudent] = useState(false) // butona tıklanıldıgında student-form işlevini çagırmak için kullanılacak
    const [size, setSize] = useState(6)
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')
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