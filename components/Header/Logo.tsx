import React from 'react'
import Image from 'next/image'
import { Bebas_Neue } from 'next/font/google'

const bebas = Bebas_Neue({
    weight: "400",
    subsets: ["latin"],
});

const Logo = () => {
    return (
        <div className="flex items-center gap-2">
            <Image src="/global/logo.svg" alt="Logo" className='w-12 h-12' width={100} height={100} />
            <p className={`text-3xl font-bold ${bebas.className}`}>GIN.<span className="text-accent">DEV</span></p>
        </div>
    )
}

export default Logo