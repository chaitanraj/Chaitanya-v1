"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo, terminalLines } from "@/lib/data";

export default function Hero() {
    const [displayedLines, setDisplayedLines] = useState([]);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        if (currentLineIndex >= terminalLines.length) {
            setIsTyping(false);
            return;
        }

        const currentLine = terminalLines[currentLineIndex];

        if (currentCharIndex < currentLine.length) {
            const timeout = setTimeout(() => {
                setDisplayedLines(prev => {
                    const newLines = [...prev];
                    if (newLines[currentLineIndex]) {
                        newLines[currentLineIndex] = currentLine.substring(0, currentCharIndex + 1);
                    } else {
                        newLines.push(currentLine.substring(0, currentCharIndex + 1));
                    }
                    return newLines;
                });
                setCurrentCharIndex(prev => prev + 1);
            }, 30);

            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setCurrentLineIndex(prev => prev + 1);
                setCurrentCharIndex(0);
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [currentLineIndex, currentCharIndex]);

    const scrollToAbout = () => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
            {/* Animated Gradient Orb */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-1/4 right-1/4 w-[250px] h-[250px] rounded-full bg-[rgba(201,24,255,0.3)] blur-[120px]"
                style={{ filter: "blur(120px)" }}
            />

            <div className="section-container relative z-10 py-16">
                <div className="text-left max-w-full">
                    {/* Greeting */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-[#ff7a18] text-sm font-medium mb-3"
                    >
                        Hello, I&apos;m
                    </motion.p>

                    {/* Name - Gradient text */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-display font-bold heading-font text-gradient mb-3"
                    >
                        {personalInfo.name}
                    </motion.h1>

                    {/* Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg text-white font-semibold mb-4"
                    >
                        {personalInfo.title}
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-sm text-[rgba(255,255,255,0.5)] mb-6 max-w-md"
                    >
                        {personalInfo.subtitle}
                    </motion.p>

                    {/* Terminal Card - Compact */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="terminal mb-6"
                    >
                        <div className="terminal-header">
                            <div className="terminal-dot bg-red-500"></div>
                            <div className="terminal-dot bg-yellow-500"></div>
                            <div className="terminal-dot bg-green-500"></div>
                            <span className="ml-3 text-[10px] text-[rgba(255,255,255,0.3)]">terminal</span>
                        </div>
                        <div className="p-4 font-mono text-xs space-y-1.5">
                            {displayedLines.map((line, index) => (
                                <p key={index} className="text-[rgba(255,255,255,0.6)]">
                                    <span className="text-[#ff7a18]">$</span> {line}
                                </p>
                            ))}
                            {isTyping && (
                                <span className="cursor-blink"></span>
                            )}
                        </div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-wrap items-center gap-3 mb-6"
                    >
                        <Button variant="primary" size="sm" asChild>
                            <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
                                View Resume
                            </a>
                        </Button>
                        <Button variant="secondary" size="sm" asChild>
                            <Link href="#contact">
                                Get in Touch
                            </Link>
                        </Button>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex items-center gap-3"
                    >
                        {[
                            { icon: Github, href: `https://github.com/${personalInfo.github}`, label: "GitHub" },
                            { icon: Linkedin, href: `https://linkedin.com/in/${personalInfo.linkedin}`, label: "LinkedIn" },
                            { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
                        ].map((social) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-2.5 rounded-xl glass-card text-[rgba(255,255,255,0.5)] hover:text-[#ff7a18] transition-colors"
                                aria-label={social.label}
                            >
                                <social.icon size={18} />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.button
                onClick={scrollToAbout}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 8, 0] }}
                transition={{
                    opacity: { delay: 1.5, duration: 0.5 },
                    y: { delay: 1.5, duration: 1.5, repeat: Infinity }
                }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[rgba(255,255,255,0.4)] hover:text-[#ff7a18] transition-colors"
            >
                <ChevronDown size={24} />
            </motion.button>
        </section>
    );
}
