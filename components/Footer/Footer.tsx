'use client'
import React from 'react'
import { useTranslations } from 'next-intl'

const Footer = () => {
    const t = useTranslations('Footer')
    return (
        <div className='flex px-3 border-t border-accent/40 mt-4'>
            <div className="flex flex-col lg:flex-row py-4 w-full lg:max-w-7xl lg:mx-auto">
                <div className='lg:inline-flex items-center gap-2'>
                    <p className='text-base text-accent'>{t('copyright', { year: new Date().getFullYear() })} <span className='text-sm text-muted-foreground'>{t('builtWith')}</span></p>
                </div>
            </div>
        </div>
    )
}

export default Footer