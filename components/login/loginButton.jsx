'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useManageCourseContext } from '../context'
import { toast } from 'react-hot-toast'
const LoginButton = () => {

    const { email, password } = useManageCourseContext()

    return (
        <motion.button
            disabled={(email.length && password.length) <= 0 ? true : false}
            whileTap={(email.length && password.length) <= 0 ? '' : { scale: 0.95, opacity: 0.7, boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}
            className='text-white bg-third w-full p-3 rounded text-sm disabled:opacity-60 disabled:cursor-not-allowed'
            type='submit'
            onClick={() => toast.success('Welcome Manage Course ! ')}
        >
            SIGN IN
        </motion.button>
    )

}

export default LoginButton