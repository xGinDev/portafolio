import React from 'react';
import { Bebas_Neue } from 'next/font/google';

const bebas = Bebas_Neue({
    weight: '400',
    subsets: ['latin']
});

const HeroMain = () => {
    const text = "front — end";
    const text2 = "developer";
    const additionalText = "I am a developer based in Colombia - Medellín, focused on creating interactive digital experiences on the web.";

    return (
        <div className="">
            <div className='flex flex-col justify-center'>
                <div className={`flex flex-wrap uppercase text-[155px] lg:text-[300px] ${bebas.className}`}>
                    {text.split("").map((char, index) => (
                        <span
                            key={index}
                            className={`flex leading-[150px] lg:leading-[300px] transition-opacity duration-300 ${char !== ' ' ? 'opacity-30 hover:opacity-100' : ''}`}
                        >
                            {char === " " ? <>&nbsp;</> : char}
                        </span>
                    ))}
                </div>
                <div className={`flex flex-col lg:flex-row gap-3`}>
                    <div className={`flex flex-row uppercase text-[155px] lg:text-[300px] ${bebas.className}`}>
                        {text2.split("").map((char, index) => (
                            <span
                                key={index}
                                className={`flex leading-[150px] lg:leading-[300px] transition-opacity duration-300 ${char !== ' ' ? 'opacity-30 hover:opacity-100' : ''}`}
                            >
                                {char === " " ? <>&nbsp;</> : char}
                            </span>
                        ))}
                    </div>
                    <div className='flex justify-center mt-4 w-full'>
                        <div className={`text-sm lg:text-base`}>
                            <span>About</span> {additionalText}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroMain;
