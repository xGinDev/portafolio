"use client";
import React, { useEffect, useState } from "react";
import LocaleSwitcher from "../Global/LocalSwitcher/LocaleSwitcher";
import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 transition-colors duration-300 backdrop-blur-lg backdrop-saturate-150 ${isTop ? "bg-transparent" : "bg-foreground/1"
        }`}
    >
      <div className="flex items-center justify-between px-3 lg:px-6 py-4 md:max-w-7xl md:mx-auto">
        <Logo />
        <Nav />
        <LocaleSwitcher />
      </div>
    </div>
  );
};

export default Header;
