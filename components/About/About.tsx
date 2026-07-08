"use client";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import profile from "../../public/about/profile.jpeg";
import Experience from "../Experience/Experience";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Link from "next/link";

const bebas = Bebas_Neue({
    weight: "400",
    subsets: ["latin"],
});

const CV_FILES: Record<string, string> = {
    es: "/cv/CV_John_Correa.pdf",
    en: "/cv/John_Correa_Resume.pdf",
};


export const About = () => {
    const t = useTranslations("AboutPage");
    const tExperience = useTranslations("Experience");
    const tAnchors = useTranslations("Anchors");

    const locale = useLocale();

    const cvHref = CV_FILES[locale] ?? CV_FILES.es;

    return (
        <motion.section
            id={tAnchors("about")}
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
                        width={200}
                        height={200}
                        className="w-full lg:w-full flex rounded grayscale hover:grayscale-0 transition-all duration-500"
                        priority
                    />
                    <h3 className="text-lg font-semibold mt-4 text-foreground">{t("name")}</h3>
                    <h4 className="text-sm tracking-widest text-accent">{t("role")}</h4>
                    <Link
                        href={cvHref}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 px-4 py-2 bg-background text-accent border border-accent tracking-wider rounded-lg hover:bg-accent hover:text-background transition-colors text-center"
                        aria-label={t("downloadCV")}
                    >
                        {t("downloadCV")}
                    </Link>
                    <div className="flex items-center gap-1 mt-4">
                        <Link
                            href="https://github.com/xGinDev"
                            target="_blank"
                            className="flex items-center justify-center w-10 h-10 rounded-lg border border-border text-muted-foreground hover:border-accent hover:text-accent transition-colors"
                        >
                            <FiGithub size={18} />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/jecl29/"
                            target="_blank"
                            className="flex items-center justify-center w-10 h-10 rounded-lg border border-border text-muted-foreground hover:border-accent hover:text-accent transition-colors"
                        >
                            <FiLinkedin size={18} />
                        </Link>
                        <Link
                            href="mailto:jecl29@gmail.com"
                            className="flex items-center justify-center w-10 h-10 rounded-lg border border-border text-muted-foreground hover:border-accent hover:text-accent transition-colors"
                        >
                            <FiMail size={18} />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-success/30 bg-success/10 w-fit"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-75 animate-ping" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
                        </span>
                        <span className="text-sm font-medium text-success">
                            {t("available")}
                        </span>
                    </motion.div>
                    <Experience />
                </div>
            </div>
        </motion.section>
    );
};