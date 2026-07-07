"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { skills } from "@/utils/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
    weight: "400",
    subsets: ["latin"],
});

const Skills = () => {
    const t = useTranslations("Skills");
    const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.06,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    const IMAGE_SIZE = 32;

    return (
        <div className="flex flex-col gap-6 max-w-5xl mx-auto px-4 py-8">
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
                    {t("labelOne")}{" "}
                    <motion.span className="text-accent">{t("labelTwo")}</motion.span>
                </motion.p>
                <motion.h2 className="flex flex-col justify-center items-center gap-1 text-center text-sm lg:text-base text-muted-foreground">
                    {t("disclamer")}
                    <div className="w-28 h-0.5 bg-accent mt-1" />
                </motion.h2>
            </div>

            <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-4"
                variants={container}
                initial="hidden"
                animate="show"
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.key}
                        variants={item}
                        className="relative h-full"
                        onMouseEnter={() => setHoveredSkill(index)}
                        onMouseLeave={() => setHoveredSkill(null)}
                    >
                        <div
                            className="relative flex flex-col items-center text-center h-full min-h-[160px] p-4 rounded-xl border border-border bg-secondary/40 overflow-hidden transition-colors duration-300"
                            style={{
                                borderColor:
                                    hoveredSkill === index ? skill.color : undefined,
                            }}
                        >
                            <div
                                className="flex items-center justify-center mb-2 shrink-0"
                                style={{ width: IMAGE_SIZE, height: IMAGE_SIZE }}
                            >
                                {skill.img && (
                                    <Image
                                        src={skill.img}
                                        alt={skill.title}
                                        width={IMAGE_SIZE}
                                        height={IMAGE_SIZE}
                                        className="object-contain w-full h-full"
                                    />
                                )}
                            </div>

                            <p className="text-sm font-semibold text-foreground shrink-0">
                                {skill.title}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1 leading-snug line-clamp-3">
                                {t(`items.${skill.key}`)}
                            </p>

                            {hoveredSkill === index && (
                                <motion.div
                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 rounded-full"
                                    style={{ backgroundColor: skill.color }}
                                    initial={{ width: 0 }}
                                    animate={{ width: "60%" }}
                                    transition={{ duration: 0.3 }}
                                    layoutId="skillUnderline"
                                />
                            )}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Skills;