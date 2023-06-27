'use client'
import React, { createContext, useState, useContext } from 'react'
const Context = createContext()

function Provider({ children }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const data = {
        email, setEmail,
        password, setPassword
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export default Provider

export const useManageCourseContext = () => useContext(Context)