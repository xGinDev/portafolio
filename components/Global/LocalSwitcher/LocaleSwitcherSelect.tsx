"use client";

import clsx from "clsx";
import { useParams } from "next/navigation";
import { ChangeEvent, ReactNode, useState, useTransition } from "react";
import { Locale, usePathname, useRouter } from "@/i18n/routing";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    setIsOpen(false);
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <label
      className={clsx(
        "relative text-gray-400 flex items-center",
        isPending && "transition-opacity [&:disabled]:opacity-30"
      )}
    >
      <AiOutlineGlobal size={24} aria-hidden="true" />
      <select
        className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6 uppercase focus-visible:outline-none focus-visible:border-none"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
        onMouseDown={() => setIsOpen(true)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        aria-label="Select language"
      >
        {children}
      </select>
      <motion.span
        className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2"
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{ translateY: "-50%" }}
      >
        <IoIosArrowDown size={20} />
      </motion.span>
    </label>
  );
}