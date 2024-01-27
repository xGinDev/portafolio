'use client'
import Logo from "@/components/Logo";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
} from "@nextui-org/react";
import {useState} from "react";
import ButtonsFloating from "@/components/ButtonsFloating";
import BackToTop from "@/components/BackToTop";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    {
      'name': 'Blog',
      'url': '/posts'
    },
    {
      'name': 'Rem Converter',
      'url': '/rem-converter'
    },
    {
      'name': 'VTEX Extension',
      'url': '/vtex-extension'
    }
  ];

  return (
      <header className="w-full border-b h-16 fixed z-10">
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className={'justify-start'}
        >
          <NavbarContent className="sm:hidden" justify="start">
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            />
          </NavbarContent>

          <NavbarContent className="sm:hidden pr-3" justify="center">
            <NavbarBrand>
              <Logo />
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarBrand>
              <Logo />
            </NavbarBrand>
            {
              menuItems.map((board, index) => (
                  <NavbarItem key={index}>
                    <Link href={`${board.url}`} className={"text-foreground"}>{board.name}</Link>
                  </NavbarItem>
              ))
            }
          </NavbarContent>
          <NavbarMenu>
            {
              menuItems.map((board, index) => (
                  <NavbarItem key={index}>
                    <Link href={`${board.url}`}>{board.name}</Link>
                  </NavbarItem>
              ))
            }
          </NavbarMenu>
        </Navbar>
        <ButtonsFloating/>
        <BackToTop/>
      </header>
  )
}