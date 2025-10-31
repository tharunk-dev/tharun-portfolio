"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      {/* Heading */}
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h1>

      {/* Intro Section */}
      <motion.div
        className="max-w-3xl mx-auto text-center text-text-muted text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p>
          I’m <span className="font-semibold text-white">Tharun K</span>, a
          Software Development Engineer passionate about building
          high-performance and scalable applications across web and cloud.
        </p>
        <p className="mt-4">
          I enjoy turning complex problems into simple, elegant solutions using
          technologies like <span className="font-medium text-white">React</span>
          , <span className="font-medium text-white">Node.js</span>,{" "}
          <span className="font-medium text-white">TypeScript</span>,{" "}
          <span className="font-medium text-white">AWS</span>, and{" "}
          <span className="font-medium text-white">MongoDB</span>.
        </p>
      </motion.div>

      {/* Education Section */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/logo.png"
            alt="Northern Arizona University Logo"
            width={200}
            height={70}
            className="object-contain"
          />
          <p className="text-lg text-text-muted mt-2">
            M.S. in Computer Science —{" "}
            <span className="font-medium text-white">
              Northern Arizona University, Flagstaff, AZ
            </span>{" "}
            (GPA 3.80)
          </p>
        </div>
      </section>

      {/* Interests Section */}
      <motion.section
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold mb-4">Beyond Work</h2>
        <p className="max-w-2xl mx-auto text-text-muted leading-relaxed">
          Outside of coding, I enjoy exploring new technologies, contributing to
          open-source projects, and capturing nature through photography. My
          curiosity drives me to constantly learn and build.
        </p>
      </motion.section>
    </main>
  );
}
