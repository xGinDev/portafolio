"use client";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function ButtonsFloating() {
  return (
    <div
      className={
        "flex fixed bottom-6 right-6 px-6 py-2 backdrop-blur-lg backdrop-saturate-150 bg-foreground/10 rounded-full"
      }
    >
      <ThemeSwitcher />
    </div>
  );
}
