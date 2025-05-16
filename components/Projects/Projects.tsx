"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { projects } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const Projects = () => {
    const t = useTranslations("Projects");
    const extendedProjects = [...projects, ...projects];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="flex flex-col gap-6 overflow-hidden w-[85vw] md:max-w-7xl mx-auto py-8">
            <motion.h2
                className="text-3xl font-bold mb-6 px-4 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {t("title")}
                <motion.div
                    className="h-1 w-20 bg-primary mx-auto mt-2 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                />
            </motion.h2>

            <motion.div
                className="relative w-full"
                variants={container}
                initial="hidden"
                animate="show"
            >
                <div className="flex gap-6 animate-scroll-horizontal w-max">
                    {extendedProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="w-[70vw] flex-shrink-0 md:w-[30vw]"
                        >
                            <Link
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <div className="rounded-xl relative group cursor-pointer overflow-hidden shadow-lg h-full">
                                    {/* Imagen del proyecto */}
                                    <div className="relative h-40 md:h-60">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        {/* Overlay que aparece al hacer hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    {/* Información que aparece al hacer hover */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                            <motion.p
                                                className="text-white hover:text-blue-300 flex items-center gap-2 transition-colors"
                                                whileHover={{ x: 5 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <span>{t("view")}</span>
                                                <MdArrowOutward className="text-lg" />
                                            </motion.p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Projects;