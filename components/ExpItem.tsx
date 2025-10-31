
type Exp = {
  role: string; company: string; period: string; bullets: string[];
};

export default function ExpItem({ e }: { e: Exp }) {
  return (
    <div className="card p-6 space-y-3">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <h3 className="text-xl font-semibold">{e.role} · <span className="text-brand">{e.company}</span></h3>
        <p className="text-sm text-text-muted">{e.period}</p>
      </div>
      <ul className="list-disc pl-6 text-text-muted space-y-1">
        {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  );
}
