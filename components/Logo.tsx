import logo from '../public/logo-black.svg'
import logoWhite from '../public/logo-white.svg'
import Image from "next/image";
import {useTheme} from "next-themes";

export default function Logo() {
  const { theme} = useTheme();
  console.log('Theme', theme)
  return (
    <a
      className="py-2 px-3 flex rounded-md no-underline hover:bg-btn-background-hover font-bold"
      href="/"
      rel="noreferrer"
    >
      { theme === 'light' ? <Image src={logo} alt={'Logo'} width={100} height={100}/>: <Image src={logoWhite} alt={'Logo'} width={100} height={100}/>}
    </a>
  )
}
