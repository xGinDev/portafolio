"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { projects } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const Projects = () => {
    const translation = useTranslations("Projects");

    const extendedProjects = [...projects, ...projects];

    return (
        <div className="flex flex-col gap-2 overflow-hidden w-[85vw]">
            <h2 className="text-2xl font-bold mb-4 px-4">{translation("title")}</h2>

            <div className="relative w-full">
                <div className="flex gap-4 animate-scroll-horizontal w-max">
                    {extendedProjects.map((project, index) => (
                        <Link
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div
                                className="w-[70vw] flex-shrink-0 rounded-lg relative group cursor-pointer overflow-hidden md:w-[30vw]"
                            >
                                <div className="relative h-40 md:h-60">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                        <p
                                            className="text-white hover:text-blue-300 flex items-center gap-2 transition-colors"
                                        >
                                            <span>{translation("view")}</span>
                                            <MdArrowOutward className="text-lg" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
