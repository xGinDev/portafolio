"use client";
import React from "react";
import ButtonsFloating from "../Global/ButtonsFloating";
import { Link } from "@/i18n/routing";
import LocaleSwitcher from "../Global/LocalSwitcher/LocaleSwitcher";
import NavigationLink from "../Global/Navigation/NavigationLink";

const Header = () => {
  return (
    <div className="relative z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <NavigationLink href="/about">{"About"}</NavigationLink>
        <LocaleSwitcher />
      </div>
      <ButtonsFloating />
    </div>
  );
};

export default Header;
