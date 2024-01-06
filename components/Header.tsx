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
import {createClient} from "@/utils/supabase/client";
import AuthButton from "@/components/AuthButton";

async function checkAuthentication() {
  try {
    createClient();
    return true;
  } catch (e) {
    console.error('Error al conectar con Supabase:', e);
    return false;
  }
}

export default async function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isSupabaseConnected  = await checkAuthentication();

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
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
            <NavbarItem isActive>
              <Link color="foreground" href="/posts">
                Artículos
              </Link>
            </NavbarItem>
            <NavbarItem>
              {isSupabaseConnected && <AuthButton/>}
            </NavbarItem>
          </NavbarContent>

          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">

            </NavbarItem>
          </NavbarContent>

          <NavbarMenu>
            {menuItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                  <Link
                      className="w-full"
                      color={
                        index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                      }
                      href="#"
                      size="lg"
                  >
                    {item}
                  </Link>
                </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
      </header>
  )
}