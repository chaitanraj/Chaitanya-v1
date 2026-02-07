"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, Github, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { personalInfo } from "@/lib/data";

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Create mailto link with form data
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    };

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <section id="contact" className="relative">
            <div className="section-container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto"
                >
                    {/* Section Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.1 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-heading font-bold heading-font text-gradient">
                            Let's Work Together
                        </h2>
                        <p className="text-[rgba(255,255,255,0.7)] text-lg mt-4 max-w-2xl mx-auto">
                            I'm currently looking for internship and full-time opportunities. If you're looking
                            for someone who can build complete applications with clean code and
                            scalable architecture — let's connect.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6"
                        >
                            <div className="glass-card p-6">
                                <h3 className="text-lg font-semibold heading-font text-white mb-6">
                                    Get in Touch
                                </h3>

                                <div className="space-y-4">
                                    {/* Email */}
                                    <a
                                        href={`mailto:${personalInfo.email}`}
                                        className="flex items-center gap-4 p-4 glass-card hover:border-[#ff7a18]/30 transition-all group"
                                    >
                                        <div className="p-3 rounded-lg bg-[#ff7a18]/10 border border-[#ff7a18]/20">
                                            <Mail size={20} className="text-[#ff7a18]" />
                                        </div>
                                        <div>
                                            <span className="text-[rgba(255,255,255,0.5)] text-xs">Email</span>
                                            <p className="text-white group-hover:text-[#ff7a18] transition-colors">
                                                {personalInfo.email}
                                            </p>
                                        </div>
                                    </a>

                                    {/* LinkedIn */}
                                    <a
                                        href={`https://linkedin.com/in/${personalInfo.linkedin.toLowerCase().replace(" ", "-")}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-4 glass-card hover:border-[#ff4d6d]/30 transition-all group"
                                    >
                                        <div className="p-3 rounded-lg bg-[#ff4d6d]/10 border border-[#ff4d6d]/20">
                                            <Linkedin size={20} className="text-[#ff4d6d]" />
                                        </div>
                                        <div>
                                            <span className="text-[rgba(255,255,255,0.5)] text-xs">LinkedIn</span>
                                            <p className="text-white group-hover:text-[#ff4d6d] transition-colors">
                                                {personalInfo.linkedin}
                                            </p>
                                        </div>
                                    </a>

                                    {/* GitHub */}
                                    <a
                                        href={`https://github.com/${personalInfo.github}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-4 glass-card hover:border-[#c918ff]/30 transition-all group"
                                    >
                                        <div className="p-3 rounded-lg bg-[#c918ff]/10 border border-[#c918ff]/20">
                                            <Github size={20} className="text-[#c918ff]" />
                                        </div>
                                        <div>
                                            <span className="text-[rgba(255,255,255,0.5)] text-xs">GitHub</span>
                                            <p className="text-white group-hover:text-[#c918ff] transition-colors">
                                                {personalInfo.github}
                                            </p>
                                        </div>
                                    </a>

                                    {/* Location */}
                                    <div className="flex items-center gap-4 p-4 glass-card">
                                        <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                                            <MapPin size={20} className="text-[rgba(255,255,255,0.5)]" />
                                        </div>
                                        <div>
                                            <span className="text-[rgba(255,255,255,0.5)] text-xs">Location</span>
                                            <p className="text-white">
                                                {personalInfo.location || "Greater Noida, India"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                            transition={{ delay: 0.3 }}
                        >
                            <form onSubmit={handleSubmit} className="glass-card p-6 space-y-6">
                                <h3 className="text-lg font-semibold heading-font text-white mb-4">
                                    Send a Message
                                </h3>

                                <div>
                                    <label htmlFor="name" className="text-[rgba(255,255,255,0.5)] text-sm block mb-2">
                                        Name
                                    </label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="text-[rgba(255,255,255,0.5)] text-sm block mb-2">
                                        Email
                                    </label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="text-[rgba(255,255,255,0.5)] text-sm block mb-2">
                                        Message
                                    </label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your message..."
                                        rows={5}
                                        required
                                    />
                                </div>

                                <Button type="submit" variant="primary" className="w-full">
                                    <Send size={18} className="mr-2" />
                                    Send Message
                                </Button>
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
