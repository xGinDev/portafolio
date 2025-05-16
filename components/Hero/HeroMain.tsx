"use client";
import React from "react";
import { Bebas_Neue, Poppins } from "next/font/google";
import { useTranslations } from "next-intl";
import { AiOutlineArrowDown } from "react-icons/ai";
import { motion } from "framer-motion";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const popins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const HeroMain = () => {
  const t = useTranslations("Hero");
  const text = "front —— end";
  const text2 = "developer";

  const letterVariants = {
    hidden: { opacity: 0.3, y: 20 },
    visible: (i: number) => ({
      opacity: 0.3,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5
      }
    }),
    hover: {
      opacity: 1,
      scale: 1.1,
      y: -10,
      color: "#000000",
      transition: { type: "spring", stiffness: 300 }
    }
  };

  const isDash = (char: string) => char === "—";

  return (
    <motion.div 
      className="w-full pt-12 lg:p-0"
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col justify-center">
        <div className={`flex flex-wrap uppercase text-[37vw] leading-[30vw] lg:text-[280px] lg:leading-[18vw] md:justify-center ${bebas.className}`}>
          {text.split("").map((char, index) => (
            isDash(char) ? (
              <span key={index} className="flex opacity-30">
                {char}
              </span>
            ) : (
              <motion.span
                key={index}
                custom={index}
                variants={letterVariants}
                whileHover="hover"
                className={`flex ${char === " " ? "pointer-events-none" : "cursor-default"}`}
              >
                {char === " " ? <>&nbsp;</> : char}
              </motion.span>
            )
          ))}
        </div>

        <motion.div 
          className="flex flex-wrap items-start gap-8 border-b-2 border-gray pb-16 md:justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className={`flex flex-wrap uppercase text-[37vw] leading-[30vw] lg:text-[280px] lg:leading-[18vw] ${bebas.className}`}>
            {text2.split("").map((char, index) => (
              <motion.span
                key={index}
                custom={index + text.length}
                variants={letterVariants}
                whileHover="hover"
                className={`flex ${char === " " ? "pointer-events-none" : "cursor-default"}`}
              >
                {char === " " ? <>&nbsp;</> : char}
              </motion.span>
            ))}
          </div>

          <motion.div
            className={`flex flex-col justify-between gap-y-8 lg:text-xl text-gray-700 lg:max-w-[20%] ${popins.className}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, type: "spring" }}
          >
            <div>
              <p>
                <motion.b 
                  className={`uppercase text-sm ${popins.className}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                >
                  {t("titleDescription")}
                </motion.b>{" "}
                {t("about")}
              </p>
            </div>

            <motion.div 
              className="hidden lg:flex items-center justify-between"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              <p>{t("scrollDown")}</p>
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  opacity: [1, 0.6, 1]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut"
                }}
              >
                <AiOutlineArrowDown />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroMain;