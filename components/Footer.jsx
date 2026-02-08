"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t theme-divider pb-20 sm:pb-16">
      <div className="section-container">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm sm:text-base theme-text-secondary italic"
        >
          &quot; ...miles to go before I sleep &quot;
          <br></br>  Robert Frost
        </motion.p>
      </div>
    </footer>
  );
}

