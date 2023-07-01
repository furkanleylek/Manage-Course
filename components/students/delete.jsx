import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import IconButton from '../layouts/icon-button'
const Delete = () => {
    return (
        <IconButton>
            <AiOutlineDelete size={20} className="text-third opacity-70 hover:opacity-100" />
        </IconButton>
    )
}

export default Delete