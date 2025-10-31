
import Section from "@/components/Section";
import { SITE, EDUCATION } from "@/data/site";

export default function AboutPage() {
  return (
    <Section className="py-16 space-y-6">
      <h1>About</h1>
      <p className="text-text-muted max-w-3xl">
        I’m a {SITE.role} with 5+ years of experience designing and building scalable applications.
        I specialize in Java/Spring Boot microservices, REST APIs, cloud infrastructure, and CI/CD.
        I also build full‑stack products with MERN and modern tooling.
      </p>
      <div className="card p-6">
        <h3 className="mb-3">Education</h3>
        <ul className="space-y-2 text-text-muted">
          {EDUCATION.map((ed, idx) => (
            <li key={idx}>
              <span className="font-medium text-text">{ed.degree}</span> — {ed.school}
              {ed.note ? <span className="ml-2 opacity-80">({ed.note})</span> : null}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm text-text-muted">
          * Graduation year intentionally omitted as requested.
        </p>
      </div>
    </Section>
  );
}
