"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Brain,
  Code2,
  Database,
  Layers,
  Settings2,
  Wrench,
} from "lucide-react";

const GRADIENT = "linear-gradient(90deg, #ff7a18 0%, #ff4d6d 50%, #c918ff 100%)";

const categories = [
  {
    key: "languages",
    title: "Languages",
    description: "Core languages that power my day-to-day development.",
    icon: Code2,
    skills: ["Java", "JavaScript", "Python", "TypeScript", "HTML", "CSS"],
  },
  {
    key: "frameworks",
    title: "Frameworks",
    description: "Front-end and back-end frameworks for scalable builds.",
    icon: Layers,
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Flask",
      "Tailwind CSS",
    ],
  },
  {
    key: "databases",
    title: "Databases & ORM",
    description: "Reliable data layers and modern ORM tooling.",
    icon: Database,
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Prisma ORM",
      "Sequelize ORM",
    ],
  },
  {
    key: "aiml",
    title: "AI / ML",
    description: "Predictive analytics, ML experimentation, and forecasting.",
    icon: Brain,
    skills: [
      "Prophet",
      "pandas",
      "NumPy",
      "Isolation Forest",
      "Time-Series Forecasting",
      "Anomaly Detection",
    ],
  },
  {
    key: "devops",
    title: "DevOps & Tools",
    description: "Deployment workflows, automation, and collaboration tools.",
    icon: Settings2,
    skills: ["Docker", "Docker Compose", "Git", "GitHub", "Render", "Vercel"],
  },
  {
    key: "others",
    title: "Others",
    description: "Product polish, API design, and advanced UI behaviors.",
    icon: Wrench,
    skills: ["REST APIs", "Async/Await", "Routing", "Chrome Extensions"],
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const chipVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function TechStack() {
  const [activeKey, setActiveKey] = useState(categories[0].key);

  const activeCategory = useMemo(
    () => categories.find((category) => category.key === activeKey),
    [activeKey]
  );

  return (
    <section className="relative w-full bg-[#050505] px-6 py-16 text-white sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 text-center">
        <motion.h2
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-3xl font-semibold sm:text-4xl"
        >
          <span className="bg-[linear-gradient(90deg,#ff7a18_0%,#ff4d6d_50%,#c918ff_100%)] bg-clip-text text-transparent">
            Tech Stack
          </span>
        </motion.h2>
        <motion.p
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="max-w-2xl text-sm text-white/70 sm:text-base"
        >
          Technologies I use to build scalable full-stack and AI-powered applications.
        </motion.p>
      </div>

      <div className="mx-auto mt-12 grid w-full max-w-6xl gap-6 lg:grid-cols-[280px_1fr]">
        <motion.aside
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-white/80">
              Click a category to explore.
            </p>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
            {categories.map((category) => {
              const isActive = category.key === activeKey;
              const Icon = category.icon;

              return (
                <button
                  key={category.key}
                  type="button"
                  onClick={() => setActiveKey(category.key)}
                  className={`group relative flex min-w-[150px] items-center gap-2 rounded-full border px-4 py-2 text-left text-sm transition-all duration-300 lg:min-w-0 lg:w-full ${
                    isActive
                      ? "border-transparent text-white"
                      : "border-white/10 text-white/70"
                  }`}
                  style={
                    isActive
                      ? {
                          background: "rgba(255,255,255,0.08)",
                          boxShadow:
                            "0 0 20px rgba(255,122,24,0.35), 0 0 40px rgba(201,24,255,0.2)",
                        }
                      : undefined
                  }
                >
                  <span
                    className={`absolute inset-0 rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100 ${
                      isActive ? "opacity-100" : ""
                    }`}
                    style={{
                      background: GRADIENT,
                      filter: "blur(12px)",
                      zIndex: -1,
                    }}
                  />
                  <Icon className="h-4 w-4 text-white/70" />
                  <span className="font-medium">{category.title}</span>
                  {isActive && (
                    <span className="ml-auto flex items-center gap-2">
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{
                          background: GRADIENT,
                          boxShadow:
                            "0 0 10px rgba(255,122,24,0.9), 0 0 18px rgba(201,24,255,0.8)",
                        }}
                      />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </motion.aside>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-8"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory?.key}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col gap-4"
            >
              <div>
                <h3 className="text-xl font-semibold sm:text-2xl">
                  <span className="bg-[linear-gradient(90deg,#ff7a18_0%,#ff4d6d_50%,#c918ff_100%)] bg-clip-text text-transparent">
                    {activeCategory?.title}
                  </span>
                </h3>
                <p className="mt-1 text-sm text-white/65 sm:text-base">
                  {activeCategory?.description}
                </p>
              </div>

              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
              >
                {activeCategory?.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={chipVariants}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-between gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition"
                    style={{
                      boxShadow:
                        "0 0 18px rgba(255,122,24,0.08), 0 0 28px rgba(201,24,255,0.05)",
                    }}
                  >
                    <span>{skill}</span>
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{
                        background: GRADIENT,
                        boxShadow:
                          "0 0 10px rgba(255,122,24,0.7), 0 0 16px rgba(201,24,255,0.6)",
                      }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
