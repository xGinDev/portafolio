'use client'
import DeployButton from "@/components/DeployButton";
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

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    {
      'name': 'Artículos',
      'url': '/posts'
    }
  ];

  return (
      <header className="w-full bg-black border-b border-b-foreground/10 h-16 fixed z-10">
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
          <NavbarContent className="sm:hidden" justify="start">
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            />
          </NavbarContent>

          <NavbarContent className="sm:hidden pr-3" justify="center">
            <NavbarBrand>
              <DeployButton />
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarBrand>
              <DeployButton />
            </NavbarBrand>
            {
              menuItems.map((board, index) => (
                  <NavbarItem key={index}>
                    <Link href={`${board.url}`}>{board.name}</Link>
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
      </header>
  )
}