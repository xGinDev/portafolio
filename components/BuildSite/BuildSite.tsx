import React from 'react'
import Image from 'next/image'
import BuildImage from '../public/build/build.png'

const BuildSite = () => {
    return (
        <div className='flex flex-col gap-12 justify-center items-center w-full h-screen bg-sky-500'>
            <Image src={BuildImage} alt='Build Site' />
            <h1 className='text-3xl lg:text-7xl font-bold text-white'>Building Site...</h1>
        </div>
    )
}

export default BuildSite