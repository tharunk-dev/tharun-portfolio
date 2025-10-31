
import { SITE } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-bg-ring/60 bg-bg/60">
      <div className="container py-8 text-center text-text-muted">
        <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
