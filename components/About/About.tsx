"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import profile from "../../public/about/profile.jpeg";
import Experience from "../Experience/Experience";
import { TbBrandLinkedin, TbBrandGithub } from "react-icons/tb";
import Link from "next/link";

const bebas = Bebas_Neue({
    weight: "400",
    subsets: ["latin"],
});

export const About = () => {
    const t = useTranslations("AboutPage");
    const tExperience = useTranslations("Experience");

    return (
        <motion.section
            className="w-full lg:p-0 px-3 md:px-0 md:max-w-7xl md:mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="flex flex-col justify-center items-center mb-5">
                <motion.span
                    className={`tracking-wider uppercase text-xl text-accent ${bebas.className} flex items-center gap-2 mb-3`}
                >
                    <div className="w-7 h-0.5 bg-accent" />
                    {t("title")}
                    <div className="w-7 h-0.5 bg-accent" />
                </motion.span>
                <motion.p
                    className={`${bebas.className} text-4xl flex gap-2 lg:text-7xl`}
                >
                    {t("labelOne")} <motion.span className="text-accent">{t("labelTwo")}</motion.span>
                </motion.p>
                <motion.h2 className="flex flex-col justify-center items-center gap-1 text-center text-sm lg:text-base text-muted-foreground">
                    {t("disclamer")}
                    <div className="w-28 h-0.5 bg-accent mt-1" />
                </motion.h2>
            </div>
            <div className="mt-10 lg:mt-18">
                <h3 className="text-lg font-semibold text-foreground">{tExperience("description")}</h3>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 w-full mt-10">
                <div className="flex flex-col justify-center lg:justify-start lg:w-64 lg:shrink-0">
                    <Image
                        src={profile}
                        alt="Profile"
                        width={250}
                        height={250}
                        className="w-full lg:w-full flex rounded grayscale hover:grayscale-0 transition-all duration-500"
                    />
                    <h3 className="text-lg font-semibold mt-4 text-foreground">{t("name")}</h3>
                    <h4 className="text-sm tracking-widest text-accent">{t("role")}</h4>
                    <button className={`mt-4 px-4 py-2 bg-background text-accent border border-accent tracking-wider rounded-lg hover:bg-accent hover:text-background transition-colors`}>
                        {t("downloadCV")}
                    </button>
                    <div className="flex items-center gap-1 mt-4">
                        <Link href={"https://www.linkedin.com/in/jecl29/"} target={"_blank"}>
                            <TbBrandLinkedin size={30} />
                        </Link>
                        <Link href={"https://github.com/xGinDev"} target={"_blank"}>
                            <TbBrandGithub size={30} />
                        </Link>
                    </div>
                </div>
                <div className="w-full">
                    <Experience />
                </div>
            </div>
        </motion.section>
    );
};