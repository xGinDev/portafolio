"use client";

import {useTheme} from "next-themes";
import { MdOutlineModeNight, MdSunny } from "react-icons/md";
import {useEffect, useState} from "react";
export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);


    if (!mounted) {
        return null;
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <MdOutlineModeNight size={24}/> : <MdSunny size={24}/>}
        </button>
    )
};