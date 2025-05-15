"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { projects } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const Projects = () => {
    const translation = useTranslations("Projects");
    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold mb-4">{translation("title")}</h2>

            <div className="w-full overflow-x-auto pb-4 hide-scrollbar">
                <div className="inline-flex gap-4 md:grid md:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[80vw] md:w-full rounded-lg relative group cursor-pointer overflow-hidden"
                        >
                            {/* Imagen del proyecto */}
                            <div className="relative h-40 md:h-60">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Overlay negro (solo mitad inferior) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {/* Texto y enlace (aparece en hover) */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:text-blue-300 flex items-center gap-2 transition-colors"
                                    >
                                        <span>{translation("view")}</span>
                                        <MdArrowOutward className="text-lg" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;