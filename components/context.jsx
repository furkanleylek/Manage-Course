'use client'
import React, { createContext, useState, useContext } from 'react'
const Context = createContext()

function ContextProvider({ children }) {
    const [allStudents, setAllStudents] = useState([])  // Alınan datayı bir state içerisinde tutarız , bu sayede delete-update-post işlemlerinde anlık degisiklikleri yansıtabiliriz 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const data = {
        allStudents, setAllStudents,
        email, setEmail,
        password, setPassword
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider

export const useManageCourseContext = () => useContext(Context)