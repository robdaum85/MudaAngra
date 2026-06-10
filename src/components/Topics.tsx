import {
  BriefcaseBusiness,
  Building2,
  CarFront,
  HardHat,
  Map,
  ShieldCheck,
  TreePalm,
  UsersRound,
  Vote,
} from "lucide-react";
import { topics } from "../data/topics";
import SectionLabel from "./SectionLabel";

const icons = [BriefcaseBusiness, TreePalm, CarFront, Building2, HardHat, UsersRound, ShieldCheck, Map, Vote];
const accents = ["bg-brasilGreen", "bg-oceanBlue", "bg-brasilYellow", "bg-forestGreen"];

export default function Topics() {
  return (
    <section id="temas" className="soft-waves bg-offWhite py-16 sm:py-20">
      <div className="section-shell">
        <div className="max-w-3xl">
          <SectionLabel>Temas em debate</SectionLabel>
          <h2 className="mt-4 text-3xl font-black leading-tight text-ink sm:text-4xl">
            Assuntos que impactam o dia a dia da população
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-700">
            Os debates foram pensados para tratar de pautas concretas da cidade, da região e da vida cotidiana da
            população.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic, index) => {
            const Icon = icons[index] ?? Vote;
            const accent = accents[index % accents.length];
            const iconTone = accent === "bg-brasilYellow" ? "text-deepNavy" : "text-white";
            return (
              <article
                key={topic}
                className="group overflow-hidden rounded-[22px] border border-yellow-900/10 bg-warmWhite shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className={`h-1.5 ${accent}`} />
                <div className="p-5">
                  <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${accent} ${iconTone} shadow-sm transition group-hover:scale-105`}>
                    <Icon size={27} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-black leading-snug text-ink">{topic}</h3>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
