import React from "react";
import { Bebas_Neue, Poppins } from "next/font/google";
import { useTranslations } from "next-intl";
import { AiOutlineArrowDown } from "react-icons/ai";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const popins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const HeroMain = () => {
  const translation = useTranslations("Hero");

  const text = "front —— end";
  const text2 = "developer";

  return (
    <div className="w-full pt-12 lg:p-0">
      <div className="flex flex-col justify-center">
        <div
          className={`flex flex-wrap uppercase text-[37vw] leading-[30vw] lg:text-[19vw] lg:leading-[18vw] md:justify-center  ${bebas.className}`}
        >
          {text.split("").map((char, index) => (
            <span
              key={index}
              className={`flex transition-opacity duration-300 ${
                char !== " " ? "opacity-30 hover:opacity-100" : ""
              }`}
            >
              {char === " " ? <>&nbsp;</> : char}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap items-start gap-8 border-b-2 border-gray pb-16 md:justify-center">
          <div
            className={`flex flex-wrap uppercase text-[37vw] leading-[30vw] lg:text-[19vw] lg:leading-[18vw] ${bebas.className}`}
          >
            {text2.split("").map((char, index) => (
              <span
                key={index}
                className={`flex transition-opacity duration-300 ${
                  char !== " " ? "opacity-30 hover:opacity-100" : ""
                }`}
              >
                {char === " " ? <>&nbsp;</> : char}
              </span>
            ))}
          </div>
          <div
            className={`flex flex-col justify-between gap-y-8 lg:text-xl text-gray-700 lg:max-w-[20%] ${popins.className}`}
          >
            <div>
              <p>
                <b className={`uppercase text-sm ${popins.className}`}>
                  {translation("titleDescription")}
                </b>{" "}
                {translation("about")}
              </p>
            </div>
            <div className="hidden lg:flex items-center justify-between">
              <p>{translation("scrollDown")}</p>
              <AiOutlineArrowDown className="animate-bounce "/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
