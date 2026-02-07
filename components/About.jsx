"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { aboutText, timeline } from "@/lib/data";

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="relative">
            <div className="section-container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Section Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.1 }}
                        className="text-heading font-bold heading-font text-gradient mb-8"
                    >
                        About Me
                    </motion.h2>

                    {/* About Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.2 }}
                        className="glass-card p-8 mb-12"
                    >
                        <p className="text-[rgba(255,255,255,0.7)] text-lg leading-relaxed whitespace-pre-line">
                            {aboutText}
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
