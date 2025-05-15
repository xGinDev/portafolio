"use client";
import React from "react";
import ButtonsFloating from "../Global/ButtonsFloating";
import LocaleSwitcher from "../Global/LocalSwitcher/LocaleSwitcher";

const Header = () => {
  return (
    <div className="relative z-50">
      <div className="flex items-center justify-end px-6 py-4 md:max-w-7xl md:mx-auto">
        <LocaleSwitcher />
      </div>
      <ButtonsFloating />
    </div>
  );
};

export default Header;
