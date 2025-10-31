
import Section from "@/components/Section";
import ExpItem from "@/components/ExpItem";
import { EXPERIENCE } from "@/data/site";

export default function ExperiencePage() {
  return (
    <Section className="py-16 space-y-6">
      <h1>Experience</h1>
      <div className="space-y-6">
        {EXPERIENCE.map((e, i) => <ExpItem e={e} key={i} />)}
      </div>
    </Section>
  );
}
