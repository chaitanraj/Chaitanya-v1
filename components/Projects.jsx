"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

// Project Card Component - Compact for narrow viewport
function ProjectCard({ project, index, onClick }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
            className={cn(
                "scroll-card w-[280px] flex-shrink-0",
                "glass-card overflow-hidden cursor-pointer group"
            )}
            whileHover={{
                scale: 1.02,
            }}
        >
            {/* Project Image Placeholder - Orange → Pink → Purple gradient */}
            <div className="relative h-36 overflow-hidden">
                <div
                    className={cn(
                        "absolute inset-0 transition-all duration-500",
                        "bg-gradient-to-br from-[#ff7a18]/20 via-[#ff4d6d]/20 to-[#c918ff]/10"
                    )}
                />
                <motion.div
                    animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-gradient-to-br from-[#ff7a18]/30 to-[#c918ff]/30 opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold heading-font text-white/20">
                        {project.title.substring(0, 2)}
                    </span>
                </div>

                {/* Glow effect on hover */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-[#ff7a18]/20 to-transparent"
                />
            </div>

            {/* Card Content */}
            <div className="p-4">
                <h3 className="text-base font-bold heading-font text-white mb-1.5 group-hover:text-[#ff7a18] transition-colors">
                    {project.title}
                </h3>
                <p className="text-[rgba(255,255,255,0.5)] text-xs line-clamp-2 mb-3">
                    {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tech.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="default" className="text-[10px] px-2 py-0.5">
                            {tech}
                        </Badge>
                    ))}
                    {project.tech.length > 3 && (
                        <Badge variant="outline" className="text-[10px] px-2 py-0.5">
                            +{project.tech.length - 3}
                        </Badge>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                    <Button variant="secondary" size="sm" className="flex-1 text-xs py-1.5" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                            <Github size={12} className="mr-1.5" />
                            Code
                        </a>
                    </Button>
                    <Button variant="primary" size="sm" className="flex-1 text-xs py-1.5" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                            <ExternalLink size={12} className="mr-1.5" />
                            Live
                        </a>
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}

// Project Modal
function ProjectModal({ project, open, onOpenChange }) {
    if (!project) return null;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-lg">
                <DialogHeader>
                    <DialogTitle className="text-xl text-gradient">{project.title}</DialogTitle>
                    <DialogDescription className="text-sm mt-2">
                        {project.description}
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 mt-3">
                    {/* Key Features */}
                    <div>
                        <h4 className="text-xs font-semibold text-[#ff7a18] mb-2">Key Features</h4>
                        <ul className="space-y-1.5">
                            {project.bullets.map((bullet, index) => (
                                <li key={index} className="flex items-start gap-2 text-[rgba(255,255,255,0.5)] text-sm">
                                    <span className="text-[#ff7a18] mt-0.5">•</span>
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                        <h4 className="text-xs font-semibold text-[#ff7a18] mb-2">Tech Stack</h4>
                        <div className="flex flex-wrap gap-1.5">
                            {project.tech.map((tech) => (
                                <Badge key={tech} variant="default" className="text-xs">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-3 border-t border-white/10">
                        <Button variant="secondary" size="sm" asChild className="flex-1">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github size={14} className="mr-2" />
                                View Source
                            </a>
                        </Button>
                        <Button variant="primary" size="sm" asChild className="flex-1">
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                                <ExternalLink size={14} className="mr-2" />
                                Live Demo
                            </a>
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const scrollRef = useRef(null);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setModalOpen(true);
    };

    return (
        <section id="projects" className="relative overflow-hidden">
            <div className="section-container">
                <motion.div
                    ref={sectionRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Header */}
                    <div className="flex items-center justify-between mb-8">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.1 }}
                            className="text-heading font-bold heading-font text-gradient"
                        >
                            Projects
                        </motion.h2>

                        {/* Navigation Arrows - Desktop */}
                        <div className="hidden md:flex gap-1.5">
                            <button
                                onClick={scrollLeft}
                                className="p-1.5 rounded-lg glass-card hover:border-[#ff7a18]/50 transition-all"
                            >
                                <ChevronLeft size={18} className="text-[rgba(255,255,255,0.5)]" />
                            </button>
                            <button
                                onClick={scrollRight}
                                className="p-1.5 rounded-lg glass-card hover:border-[#ff7a18]/50 transition-all"
                            >
                                <ChevronRight size={18} className="text-[rgba(255,255,255,0.5)]" />
                            </button>
                        </div>
                    </div>

                    {/* Horizontal Scroll Container */}
                    <div className="relative">
                        <div
                            ref={scrollRef}
                            className="horizontal-scroll-container pb-3"
                        >
                            {projects.map((project, index) => (
                                <ProjectCard
                                    key={project.title}
                                    project={project}
                                    index={index}
                                    onClick={() => handleProjectClick(project)}
                                />
                            ))}
                        </div>

                        {/* Gradient Fade Edges */}
                        <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none" />
                    </div>

                    {/* Scroll Hint - Mobile */}
                    <div className="flex md:hidden justify-center mt-3">
                        <span className="text-[10px] text-[rgba(255,255,255,0.4)]">← Swipe to explore →</span>
                    </div>
                </motion.div>
            </div>

            {/* Project Modal */}
            <ProjectModal
                project={selectedProject}
                open={modalOpen}
                onOpenChange={setModalOpen}
            />
        </section>
    );
}
