"use client";
import { SITE, SKILLS } from "@/data/site";
import Section from "@/components/Section";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Section className="py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* ===== Left Side: Text Section ===== */}
          <div className="space-y-5">
            <h1>Hi, I’m {SITE.name}</h1>
            <p className="text-xl text-text-muted">{SITE.role}</p>
            <p className="text-text-muted max-w-xl">{SITE.tagline}</p>

            <div className="flex gap-3 pt-2">
              <Link href="/projects" className="btn">
                View Projects
              </Link>
              <a
                href={SITE.resumeUrl}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </div>
          </div>

          {/* ===== Right Side: Image Section ===== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="justify-self-center"
          >
            <img
              src="/avatar.png" // 👈 your actual image in /public folder
              alt="Tharun K"
              width={220}
              height={220}
              className="rounded-full border border-bg-ring/60 object-cover shadow-soft"
            />
          </motion.div>
        </div>
      </Section>

      {/* ===== Skills Section ===== */}
      <Section className="py-12">
        <h2 className="mb-6">Core Skills</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {SKILLS.map((s, i) => (
            <div key={i} className="card px-4 py-3 text-text-muted">
              {s}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
