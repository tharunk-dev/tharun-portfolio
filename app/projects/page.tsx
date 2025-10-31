
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/data/site";

export default function ProjectsPage() {
  return (
    <Section className="py-16 space-y-6">
      <h1>Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((p, i) => <ProjectCard p={p} key={i} />)}
      </div>
    </Section>
  );
}
