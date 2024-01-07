'use client'
import { TbBrandLinkedin  } from "react-icons/tb";
import Link from "next/link";
export default function ButtonsFloating(){
    return (
        <div className={"flex fixed bottom-6 right-6"}>
            <Link href={"https://www.linkedin.com/in/jecl29/"} target={"_blank"}>
                <TbBrandLinkedin/>
            </Link>
        </div>
    )
}