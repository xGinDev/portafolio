"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { projects, featuredProject } from "@/utils/data";
import { motion } from "framer-motion";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { VscCode } from "react-icons/vsc";
import { FiGithub, FiArrowUpRight, FiExternalLink } from "react-icons/fi";
import Autoplay from "embla-carousel-autoplay";
import type { CarouselApi } from "@/components/ui/carousel";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const bebas = Bebas_Neue({
    weight: "400",
    subsets: ["latin"],
});

const Projects = () => {
    const t = useTranslations("Projects");
    const tAnchors = useTranslations("Anchors");

    const autoplay = useRef(
        Autoplay({ delay: 2800, stopOnInteraction: false, stopOnMouseEnter: true })
    );

    const [api, setApi] = useState<CarouselApi>();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const onDotClick = useCallback(
        (index: number) => {
            api?.scrollTo(index);
        },
        [api]
    );

    useEffect(() => {
        if (!api) return;

        setScrollSnaps(api.scrollSnapList());

        const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
        onSelect();

        api.on("select", onSelect);
        api.on("reInit", onSelect);

        return () => {
            api.off("select", onSelect);
            api.off("reInit", onSelect);
        };
    }, [api]);

    return (
        <motion.div
            id={tAnchors("projects")}
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
                    {t("labelOne")}{" "}
                    <motion.span className="text-accent">{t("labelTwo")}</motion.span>
                </motion.p>
                <motion.h2 className="flex flex-col justify-center items-center gap-1 text-center text-sm lg:text-base text-muted-foreground">
                    {t("disclamer")}
                    <div className="w-28 h-0.5 bg-accent mt-1" />
                </motion.h2>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative rounded-xl border border-border bg-secondary/40 p-6 lg:p-8 mt-10 lg:mt-16 overflow-hidden"
            >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />

                <span className="text-xs font-semibold tracking-wide uppercase text-accent">
                    {t("featured.eyebrow")}
                </span>

                <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mt-2">
                    {featuredProject.title}
                </h3>

                <p className="text-sm lg:text-base text-muted-foreground mt-3 max-w-2xl leading-relaxed">
                    {t("featured.description")}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                    {featuredProject.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs font-medium px-2.5 py-1 rounded border border-accent/30 bg-accent/10 text-accent"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex flex-wrap gap-3 mt-6">
                    <Link
                        href={featuredProject.links.openVsx}
                        target="_blank"
                        className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border border-border text-foreground hover:border-accent hover:text-accent transition-colors"
                        aria-label={t("featured.openVsx")}
                    >
                        <VscCode size={16} />
                        {t("featured.openVsx")}
                    </Link>
                    <Link
                        href={featuredProject.links.marketplace}
                        target="_blank"
                        className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border border-border text-foreground hover:border-accent hover:text-accent transition-colors"
                        aria-label={t("featured.ctaMarketplace")}
                    >
                        <VscCode size={16} />
                        {t("featured.ctaMarketplace")}
                    </Link>
                    <Link
                        href={featuredProject.links.github}
                        target="_blank"
                        className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border border-border text-foreground hover:border-accent hover:text-accent transition-colors"
                        aria-label={t("featured.ctaGithub")}
                    >
                        <FiGithub size={16} />
                        {t("featured.ctaGithub")}
                    </Link>

                    <Link
                        href={featuredProject.landingHref}
                        className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-accent text-accent-foreground hover:opacity-90 transition-opacity ml-auto"
                        aria-label={t("featured.ctaLanding")}
                    >
                        {t("featured.ctaLanding")}
                        <FiArrowUpRight size={16} />
                    </Link>
                </div>
            </motion.div>

            <div className="mt-14 lg:mt-20">
                <div className="flex flex-col items-center gap-1 mb-8 text-center">
                    <span className="flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-accent">
                        <div className="w-7 h-0.5 bg-accent" />
                        {t("clientsEyebrow")}
                        <div className="w-7 h-0.5 bg-accent" />
                    </span>
                    <h3
                        className={`${bebas.className} text-2xl lg:text-3xl text-foreground`}
                    >
                        {t("clientsTitle")}
                    </h3>
                </div>

                <Carousel
                    setApi={setApi}
                    opts={{ align: "start", loop: true }}
                    plugins={[autoplay.current]}
                    className="w-full"
                >
                    <div
                        className="relative"
                        style={{
                            maskImage:
                                "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
                            WebkitMaskImage:
                                "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
                        }}
                    >
                        <CarouselContent className="-ml-4">
                            {projects.map((project) => (
                                <CarouselItem
                                    key={project.title}
                                    className="pl-4 basis-full lg:basis-1/3"
                                >
                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        className="group relative flex flex-col rounded-xl border border-border bg-secondary/30 hover:border-accent/50 transition-colors overflow-hidden"
                                        aria-label={`View ${project.title} project`}
                                    >
                                        <div className="relative h-44 lg:h-52 flex items-center justify-center bg-background/40">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300"
                                            />
                                            <span className="absolute top-3 right-3 flex items-center justify-center w-8 h-8 rounded-full bg-background/80 border border-border text-muted-foreground group-hover:text-accent group-hover:border-accent transition-colors">
                                                <FiExternalLink size={14} />
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between px-4 py-3 border-t border-border">
                                            <span className="text-sm font-medium text-foreground">
                                                {project.title}
                                            </span>
                                        </div>
                                    </Link>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </div>

                    <CarouselPrevious className="hidden sm:flex -left-4 lg:-left-6 border-border text-foreground hover:border-accent hover:text-accent" />
                    <CarouselNext className="hidden sm:flex -right-4 lg:-right-6 border-border text-foreground hover:border-accent hover:text-accent" />
                </Carousel>

                {/* Dots — solo desktop */}
                <div className="hidden lg:flex items-center justify-center gap-2 mt-6">
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => onDotClick(index)}
                            aria-label={`Ir al slide ${index + 1}`}
                            className={cn(
                                "h-2 rounded-full transition-all duration-300",
                                index === selectedIndex
                                    ? "w-6 bg-accent"
                                    : "w-2 bg-border hover:bg-muted-foreground"
                            )}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;