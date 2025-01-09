import React from 'react';
import { Bebas_Neue, Poppins } from 'next/font/google';

const bebas = Bebas_Neue({
    weight: '400',
    subsets: ['latin']
});

const popins = Poppins({
    weight: '400',
    subsets: ['latin']
});

const HeroMain = () => {
    const text = "front —— end";
    const text2 = "developer";
    const additionalText = "I am a developer based in Colombia - Medellín, focused on creating interactive digital experiences on the web.";

    return (
        <div className="w-full px-4">
            <div className="flex flex-col justify-center pt-10">
                <div className={`flex flex-wrap uppercase text-[36vw] leading-[30vw] lg:text-[21vw] lg:leading-[18vw]  ${bebas.className}`}>
                    {text.split("").map((char, index) => (
                        <span
                            key={index}
                            className={`flex transition-opacity duration-300 ${char !== ' ' ? 'opacity-30 hover:opacity-100' : ''}`}
                        >
                            {char === " " ? <>&nbsp;</> : char}
                        </span>
                    ))}
                </div>
                <div className="flex flex-wrap items-start gap-8">
                    <div className={`flex flex-wrap uppercase text-[36vw] leading-[30vw] lg:text-[21vw] lg:leading-[18vw] ${bebas.className}`}>
                        {text2.split("").map((char, index) => (
                            <span
                                key={index}
                                className={`flex transition-opacity duration-300 ${char !== ' ' ? 'opacity-30 hover:opacity-100' : ''}`}
                            >
                                {char === " " ? <>&nbsp;</> : char}
                            </span>
                        ))}
                    </div>
                    <div className={`flex flex-col justify-between gap-y-28 lg:text-xl text-gray-700 lg:max-w-[20%] text-white ${popins.className}`}>
                        <div>
                            <p><b className={`uppercase text-sm ${popins.className}`}>About</b> {additionalText}</p>
                        </div>
                        <div className="hidden lg:flex">
                            <p>Scroll down</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroMain;
