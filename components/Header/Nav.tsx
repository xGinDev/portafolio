"use client";
import React from "react";
import { useMessages } from "next-intl";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

type NavItem = {
    title: string;
    href: string;
};

const Nav = () => {
    const messages = useMessages();
    const navItems = messages.Nav as unknown as Record<string, NavItem>;

    const sectionIds = Object.values(navItems).map((item) =>
        item.href.replace("#", "")
    );
    const activeId = useActiveSection(sectionIds);

    const linkBaseClasses =
        "pb-1 text-sm font-medium text-muted-foreground border-b-2 border-transparent transition-colors hover:text-accent hover:bg-transparent hover:font-bold hover:border-accent";
    const linkActiveClasses = "text-foreground font-bold border-accent hover:text-foreground";

    return (
        <nav>
            {/* Desktop */}
            <NavigationMenu className="hidden lg:flex">
                <NavigationMenuList className="gap-2">
                    {Object.entries(navItems).map(([key, item]) => {
                        const id = item.href.replace("#", "");
                        const isActive = activeId === id;

                        return (
                            <NavigationMenuItem key={key}>
                                <NavigationMenuLink
                                    href={item.href}
                                    className={cn(
                                        navigationMenuTriggerStyle(),
                                        "bg-transparent rounded-none",
                                        linkBaseClasses,
                                        isActive && linkActiveClasses
                                    )}
                                >
                                    {item.title}
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        );
                    })}
                </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile */}
            <div className="lg:hidden">
                <Drawer direction="right">
                    <DrawerTrigger asChild>
                        <button className="p-2 border border-accent rounded bg-background" aria-label="Abrir menú">
                            <IoMdMenu size={24} className="text-accent" />
                        </button>
                    </DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader className="flex flex-row items-center justify-end pr-2 py-4 absolute w-full">
                            <DrawerClose asChild>
                                <button
                                    className="rounded-md px-1.5 text-muted-foreground transition-colors hover:text-accent"
                                    aria-label="Cerrar menú"
                                >
                                    <IoMdClose size={22} />
                                </button>
                            </DrawerClose>
                        </DrawerHeader>
                        <div className="flex flex-col gap-1 px-4 pb-8 mt-8">
                            {Object.entries(navItems).map(([key, item]) => {
                                const id = item.href.replace("#", "");
                                const isActive = activeId === id;

                                return (
                                    <DrawerClose key={key} asChild>
                                        <a
                                            href={item.href}
                                            className={cn(
                                                "py-3 text-lg w-fit",
                                                linkBaseClasses,
                                                isActive && linkActiveClasses
                                            )}
                                        >
                                            {item.title}
                                        </a>
                                    </DrawerClose>
                                );
                            })}
                        </div>
                    </DrawerContent>
                </Drawer>
            </div>
        </nav >
    );
};

export default Nav;