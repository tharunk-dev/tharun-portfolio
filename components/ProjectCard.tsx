
import type { Project } from "@/data/site";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="card p-6 flex flex-col gap-3">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-xl font-semibold">{p.title}</h3>
        <div className="flex gap-2">
          {p.repo && <a className="badge" href={p.repo} target="_blank" rel="noreferrer">GitHub</a>}
          {p.link && <a className="badge" href={p.link} target="_blank" rel="noreferrer">Live</a>}
        </div>
      </div>
      <p className="text-text-muted">{p.description}</p>
      <ul className="list-disc pl-6 text-sm text-text-muted space-y-1">
        {p.highlights.map((h, i) => <li key={i}>{h}</li>)}
      </ul>
      <div className="flex flex-wrap gap-2 pt-2">
        {p.tags.map((t, i) => <span key={i} className="badge">{t}</span>)}
      </div>
    </div>
  );
}
