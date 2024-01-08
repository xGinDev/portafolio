'use client'
import { TbBrandLinkedin  } from "react-icons/tb";
import Link from "next/link";
import {ThemeSwitcher} from "@/components/ThemeSwitcher";
export default function ButtonsFloating(){
    return (
        <div className={"flex fixed bottom-6 right-6 p-2 backdrop-blur-lg backdrop-saturate-150 bg-foreground/10 rounded-full"}>
            <Link href={"https://www.linkedin.com/in/jecl29/"} target={"_blank"}>
                <TbBrandLinkedin size={24}/>
            </Link>
            <ThemeSwitcher/>
        </div>
    )
}