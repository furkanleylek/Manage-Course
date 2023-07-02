'use client'
import React from 'react';
import { motion } from 'framer-motion';

const IconButton = ({ children, className }) => {
    return (
        <motion.button
            type="button"
            className={`${className} `}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, x: "-2px", y: "2px" }}
        >
            {children}
        </motion.button>
    );
};

export default IconButton; 