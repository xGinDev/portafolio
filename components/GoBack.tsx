import {Button} from "@nextui-org/react";
import Link from "next/link";
import { TbArrowNarrowLeft } from "react-icons/tb";
export default function GoBack() {
    return (
        <Link href={'/posts'}>
            <Button><TbArrowNarrowLeft />Volver</Button>
        </Link>
    )
}