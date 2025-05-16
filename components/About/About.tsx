"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export const About = () => {
    const t = useTranslations("About");

    return (
        <motion.section
            className="border-t-2 border-gray py-16 px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-8">{t("title")}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <motion.p
                        className="text-lg"
                        whileHover={{ x: 10 }}
                    >
                        {t("description")}
                    </motion.p>
                    <ul className="space-y-4">
                        {[1, 2, 3].map((item) => (
                            <motion.li
                                key={item}
                                whileHover={{ scale: 1.02 }}
                                className="flex items-center gap-2"
                            >
                                <span className="w-2 h-2 bg-black rounded-full" />
                                <span>{t(`detail${item}`)}</span>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.section>
    );
};