"use client";
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { skills } from '@/utils/data';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Skills = () => {
    const t = useTranslations("Skills");
    const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    const IMAGE_SIZE = 40;

    return (
        <div className='flex flex-col gap-6 max-w-4xl mx-auto px-4 py-8'>
            <h2 className="text-3xl font-bold text-center mb-8">
                {t("title")}
                <div className="h-1 w-20 bg-primary mx-auto mt-2 rounded-full" />
            </h2>

            <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
                variants={container}
                initial="hidden"
                animate="show"
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        className="relative"
                        onMouseEnter={() => setHoveredSkill(index)}
                        onMouseLeave={() => setHoveredSkill(null)}
                    >
                        <div
                            className={`flex flex-col items-center p-4 rounded-xl transition-all duration-300 
                                ${hoveredSkill === index ? 'shadow-lg scale-105' : 'shadow-md'}`}
                            style={{
                                backgroundColor: hoveredSkill === index ? `${skill.color}20` : '#ffffff10',
                                border: hoveredSkill === index ? `1px solid ${skill.color}` : '1px solid #ffffff20'
                            }}
                        >
                            <div className="flex items-center justify-center mb-2"
                                style={{
                                    width: IMAGE_SIZE,
                                    height: IMAGE_SIZE
                                }}>
                                {skill.img && (
                                    <Image
                                        src={skill.img}
                                        alt={skill.title}
                                        width={IMAGE_SIZE}
                                        height={IMAGE_SIZE}
                                        className="object-contain w-full h-full"
                                        style={{
                                            maxWidth: '100%',
                                            maxHeight: '100%'
                                        }}
                                    />
                                )}
                            </div>
                            <p className="text-sm font-medium text-center">{skill.title}</p>

                            {hoveredSkill === index && (
                                <motion.div
                                    className="absolute -bottom-2 h-1 rounded-full"
                                    style={{ backgroundColor: skill.color }}
                                    initial={{ width: 0 }}
                                    animate={{ width: '80%' }}
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