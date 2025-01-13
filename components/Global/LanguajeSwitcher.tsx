"use client";
import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const languages = [
  { name: "English", code: "en" },
  { name: "Spanish", code: "es" },
];

const LanguajeSwitcher = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <AiOutlineGlobal size={24} />
      </PopoverTrigger>
      <PopoverContent>
        <ul>
          {languages.map((language) => (
            <li key={language.code}>
              <a href={`/${language.code}`}>{language.name}</a>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default LanguajeSwitcher;
