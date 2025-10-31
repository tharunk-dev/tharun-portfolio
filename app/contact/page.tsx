"use client";
import Section from "@/components/Section";
import { SITE } from "@/data/site";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <Section className="py-16 space-y-10 text-center">
      {/* ===== Page Title ===== */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-text"
      >
        Get in Touch
      </motion.h1>

      {/* ===== Email + Send Button ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-col items-center gap-4"
      >
        <a
          href={`mailto:${SITE.email}`}
          className="text-lg text-brand hover:underline flex items-center gap-2"
        >
          <Mail size={22} /> {SITE.email}
        </a>

        {/* ✉️ Send Message Button */}
        <motion.a
          href={`mailto:${encodeURIComponent(SITE.email)}?subject=${encodeURIComponent(
            "Let's Connect - Portfolio Inquiry"
          )}&body=${encodeURIComponent(
            "Hi Tharun,\n\nI came across your portfolio and would like to connect regarding..."
          )}`}
          className="relative inline-flex items-center justify-center px-6 py-3 text-white font-medium rounded-lg overflow-hidden group"
          target="_blank"
          rel="noopener noreferrer"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Hover Glow */}
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-violet-500 opacity-75 group-hover:blur-lg group-hover:opacity-100 transition-all duration-500"></span>
          <span className="relative bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3 rounded-lg text-white font-medium">
            Send Message
          </span>
        </motion.a>
      </motion.div>

      {/* ===== Social Icons ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex justify-center gap-10 mt-10"
      >
        {/* GitHub */}
        <a
          href={SITE.github}
          target="_blank"
          rel="noreferrer"
          className="relative group transition-transform hover:scale-105"
        >
          <div className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-cyan-400 to-violet-500"></div>
          <Github
            size={44}
            className="relative text-text group-hover:text-brand transition-colors duration-300"
          />
        </a>

        {/* LinkedIn */}
        <a
          href={SITE.linkedin}
          target="_blank"
          rel="noreferrer"
          className="relative group transition-transform hover:scale-105"
        >
          <div className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-cyan-400 to-violet-500"></div>
          <Linkedin
            size={44}
            className="relative text-text group-hover:text-brand transition-colors duration-300"
          />
        </a>
      </motion.div>

      {/* ===== Footer Text ===== */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-text-muted mt-12 max-w-lg mx-auto leading-relaxed"
      >
        Let’s collaborate on innovative projects! Whether it’s a full-stack build,
        data-driven app, or cloud solution — I’d love to connect and discuss ideas.
      </motion.p>
    </Section>
  );
}
