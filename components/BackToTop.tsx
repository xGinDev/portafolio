"use client"
import React, { useState, useEffect } from 'react';
import { Button } from "@nextui-org/react";
import { FaArrowUp } from "react-icons/fa6";

export default function BackToTop() {
    const [showButton, setShowButton] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setShowButton(scrollY > 150);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleBackToTopClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {
                showButton && (
                    <div className={`fixed bottom-28 right-6`}>
                        <Button
                            isIconOnly
                            aria-label="BackToTop"
                            onClick={handleBackToTopClick}
                            className={'rounded-full transition-opacity duration-300 text-to-invert'}
                        >
                            <FaArrowUp/>
                        </Button>
                    </div>
                )
            }
        </>
    );
}