"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE } from "@/data/site";

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
    <header className="sticky top-0 z-40 backdrop-blur border-b border-b-gray-800">
      <nav className="container h-16 flex items-center justify-between text-text">
        {/* Logo / Name */}
        <Link href="/" className="font-semibold text-lg tracking-wide">
          {SITE.name}
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((i) => (
            <Link
              key={i.href}
              href={i.href as unknown as URL}
              className={`text-sm hover:opacity-80 transition ${
                pathname === i.href ? "text-brand" : "text-muted"
              }`}
            >
              {i.label}
            </Link>
          ))}
        </div>

        {/* External Links */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm border px-3 py-1 rounded-md hover:bg-brand/10 transition"
          >
            GitHub
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-sm border px-3 py-1 rounded-md hover:bg-brand/10 transition"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="text-sm border px-3 py-1 rounded-md hover:bg-brand/10 transition"
          >
            Email
          </a>
        </div>
      </nav>
    </header>
  );
}
