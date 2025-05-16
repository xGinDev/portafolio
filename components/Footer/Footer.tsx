'use client'
import React from 'react'

const Footer = () => {
    return (
        <div className='p-4 mt-6 bg-black text-white dark:bg-white dark:text-black md:max-w-7xl md:mx-auto'>
            <div className='flex justify-center'>
                <p>© {new Date().getFullYear()} xGinDev. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer