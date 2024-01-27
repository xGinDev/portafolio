'use client'
import { TbBrandLinkedin, TbBrandGithub  } from "react-icons/tb";
import Link from "next/link";
import {ThemeSwitcher} from "@/components/ThemeSwitcher";
export default function ButtonsFloating(){
    return (
        <div className={"flex fixed bottom-6 right-6 px-6 py-2 backdrop-blur-lg backdrop-saturate-150 bg-foreground/10 rounded-full"}>
            <Link href={"https://www.linkedin.com/in/jecl29/"} target={"_blank"}>
                <TbBrandLinkedin size={24}/>
            </Link>
            <Link href={"https://github.com/xGinDev"} target={"_blank"}>
                <TbBrandGithub size={24}/>
            </Link>
            <ThemeSwitcher/>
        </div>
    )
}