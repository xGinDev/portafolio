"use client";
import React, { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Bebas_Neue } from "next/font/google";
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import Link from "next/link";

const bebas = Bebas_Neue({
    weight: "400",
    subsets: ["latin"],
});

const MAX_MESSAGE_LENGTH = 600;
const FEEDBACK_DURATION = 5000;

type FormStatus = "idle" | "success" | "error";

export const Contact = () => {
    const t = useTranslations("Contact");
    const tAnchors = useTranslations("Anchors");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<FormStatus>("idle");
    const formRef = useRef<HTMLFormElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setStatus("success");
                formRef.current?.reset();
                setMessage("");
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        } finally {
            setIsSubmitting(false);

            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
                setStatus("idle");
            }, FEEDBACK_DURATION);
        }
    };

    const inputClasses =
        "w-full bg-secondary/40 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none focus:border-accent transition-colors";

    const labelClasses =
        "block text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2";

    return (
        <motion.section
            id={tAnchors("contact")}
            className="w-full lg:p-0 px-3 md:px-0 md:max-w-7xl md:mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
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

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 mt-10 lg:mt-16">
                <div className="lg:col-span-2 flex flex-col justify-center gap-4">
                    <div className="relative overflow-hidden">
                        <p
                            className={`${bebas.className} uppercase text-border select-none leading-[0.85]`}
                            style={{
                                WebkitTextStroke: "1.5px hsl(var(--border))",
                                fontSize: "clamp(5rem, 8vw, 7.5rem)",
                                wordBreak: "break-word",
                            }}
                        >
                            {t("workTogether")}
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
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

                <div className="lg:col-span-3 relative min-h-[420px]">
                    <AnimatePresence mode="wait">
                        {status === "idle" && (
                            <motion.form
                                key="form"
                                ref={formRef}
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-5"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="name" className={labelClasses}>
                                            {t("form.name")}
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            placeholder={t("form.namePlaceholder")}
                                            className={inputClasses}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className={labelClasses}>
                                            {t("form.email")}
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            placeholder={t("form.emailPlaceholder")}
                                            className={inputClasses}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className={labelClasses}>
                                        {t("form.subject")}
                                    </label>
                                    <input
                                        id="subject"
                                        name="subject"
                                        type="text"
                                        required
                                        placeholder={t("form.subjectPlaceholder")}
                                        className={inputClasses}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className={labelClasses}>
                                        {t("form.message")}
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        maxLength={MAX_MESSAGE_LENGTH}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder={t("form.messagePlaceholder")}
                                        className={`${inputClasses} resize-none`}
                                    />
                                    <span className="block text-xs text-muted-foreground/70 mt-1.5 text-right">
                                        {message.length} {t("form.maxChars")}
                                    </span>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group flex items-center justify-center gap-2 w-full sm:w-fit sm:self-end px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? t("form.sending") : t("form.submit")}
                                    <FiArrowRight
                                        size={16}
                                        className="group-hover:translate-x-1 transition-transform"
                                    />
                                </button>
                            </motion.form>
                        )}

                        {status === "success" && (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col items-center justify-center text-center gap-3 h-full min-h-[420px] rounded-xl border border-success/30 bg-success/5 px-6"
                            >
                                <FiCheckCircle className="text-success" size={40} />
                                <h3 className="text-lg font-semibold text-foreground">
                                    {t("success.title")}
                                </h3>
                                <p className="text-sm text-muted-foreground max-w-xs">
                                    {t("success.description")}
                                </p>
                            </motion.div>
                        )}

                        {status === "error" && (
                            <motion.div
                                key="error"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col items-center justify-center text-center gap-3 h-full min-h-[420px] rounded-xl border border-destructive/30 bg-destructive/5 px-6"
                            >
                                <FiAlertCircle className="text-destructive" size={40} />
                                <h3 className="text-lg font-semibold text-foreground">
                                    {t("error.title")}
                                </h3>
                                <p className="text-sm text-muted-foreground max-w-xs">
                                    {t("error.description")}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;