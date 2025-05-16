"use client";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";

export const Contact = () => {
    return (
        <section className="py-16 px-4 border-t-2 border-gray">
            <div className="max-w-2xl mx-auto">
                <motion.h2
                    className="text-4xl font-bold mb-8 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    ¿Trabajamos juntos?
                </motion.h2>

                <motion.form
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="space-y-6">
                        <input
                            type="text"
                            placeholder="Nombre"
                            className="w-full p-4 border-b-2 border-gray focus:border-black outline-none"
                        />
                        <textarea
                            placeholder="Mensaje"
                            rows={4}
                            className="w-full p-4 border-b-2 border-gray focus:border-black outline-none"
                        />
                        <motion.button
                            className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full ml-auto"
                            whileHover={{ gap: "1rem" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Enviar <FiSend />
                        </motion.button>
                    </div>
                </motion.form>
            </div>
        </section>
    );
};