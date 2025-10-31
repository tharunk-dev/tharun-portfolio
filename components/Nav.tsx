
"use client";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { SITE } from "@/data/site";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-bg-ring/60 bg-bg/60">
      <nav className="container h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-wide">
          {SITE.name}
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm hover:opacity-80 ${pathname === l.href ? "text-brand" : "text-text-muted"}`}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a className="btn" href={SITE.github} target="_blank" rel="noreferrer"><Github size={18}/>GitHub</a>
          <a className="btn" href={SITE.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18}/>LinkedIn</a>
          <a className="btn" href={`mailto:${SITE.email}`}><Mail size={18}/>Email</a>
        </div>
      </nav>
    </header>
  );
}
