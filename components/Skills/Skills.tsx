"use client";
import React from 'react'
import { useTranslations } from 'next-intl'

const Skills = () => {
    const translation = useTranslations("Skills");
    return (
        <div className='flex flex-col gap-2'>
            <h2 className="text-2xl font-bold mb-4 px-4">{translation("title")}</h2>
        </div>
    )
}

export default Skills