"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { FiArrowRight } from "react-icons/fi";

type ExperienceItem = {
    year: string;
    role: string;
    company: string;
    achievements: string[];
};

export const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-30%", "10%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

    const t = useTranslations("Experience");
    const title = t("title");
    const items = t.raw("items") as Record<string, ExperienceItem>;
    const experiences = Object.entries(items);

    return (
        <section
            ref={ref}
            className="relative py-10 px-4 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
        >
            <motion.div
                className="absolute -right-32 top-1/2 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"
                style={{ y, opacity }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Título con efecto especial */}
                <motion.h2
                    className="text-3xl font-bold text-center mb-10"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {title}
                    <div className="h-1 w-20 bg-primary mx-auto mt-2 rounded-full" />
                </motion.h2>

                {/* Timeline vertical para móvil */}
                <div className="block md:hidden space-y-12">
                    {experiences.map(([key, item], index) => (
                        <motion.div
                            key={key}
                            className="relative pl-10"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                        >
                            {/* Línea decorativa */}
                            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />

                            {/* Punto animado */}
                            <motion.div
                                className="absolute left-0 top-2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center"
                                whileHover={{ scale: 1.2 }}
                            >
                                <div className="w-2 h-2 bg-white rounded-full" />
                            </motion.div>

                            {/* Card de experiencia */}
                            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                                <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-blue-100 text-blue-800">
                                    {item.year}
                                </span>
                                <h3 className="text-2xl font-bold mb-2 text-gray-900">{item.role}</h3>
                                <p className="text-lg text-blue-600 mb-4">{item.company}</p>

                                <ul className="space-y-3">
                                    {item.achievements.map((achievement, i) => (
                                        <motion.li
                                            key={i}
                                            className="flex items-start gap-2 text-gray-700"
                                            whileHover={{ x: 5 }}
                                        >
                                            <FiArrowRight className="flex-shrink-0 mt-1 text-blue-500" />
                                            <span>{achievement}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Timeline horizontal para desktop */}
                <div className="hidden md:block">
                    <div className="relative h-[600px]">
                        {/* Línea central decorativa */}
                        <motion.div
                            className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2 rounded-full"
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                        />

                        {experiences.map(([key, item], index) => (
                            <motion.div
                                key={key}
                                className={`absolute w-[45%] ${index % 2 === 0 ? "left-0 top-0" : "right-0 top-1/2"}`}
                                initial={{ opacity: 0, y: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.2,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                            >
                                {/* Punto animado */}
                                <motion.div
                                    className={`absolute ${index % 2 === 0 ? "right-0" : "left-0"} top-1/2 transform -translate-y-1/2 ${index % 2 === 0 ? "translate-x-1/2" : "-translate-x-1/2"} w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg z-10`}
                                    whileHover={{ scale: 1.2 }}
                                >
                                    <div className="w-3 h-3 bg-white rounded-full" />
                                </motion.div>

                                {/* Card de experiencia */}
                                <motion.div
                                    className={`bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 ${index % 2 === 0 ? "mr-16" : "ml-16"}`}
                                    whileHover={{
                                        y: index % 2 === 0 ? -10 : 10,
                                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                                    }}
                                >
                                    <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-blue-100 text-blue-800">
                                        {item.year}
                                    </span>
                                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{item.role}</h3>
                                    <p className="text-lg text-blue-600 mb-4">{item.company}</p>

                                    <ul className="space-y-3">
                                        {item.achievements.map((achievement, i) => (
                                            <motion.li
                                                key={i}
                                                className="flex items-start gap-2 text-gray-700"
                                                whileHover={{ x: 5 }}
                                            >
                                                <FiArrowRight className="flex-shrink-0 mt-1 text-blue-500" />
                                                <span>{achievement}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};