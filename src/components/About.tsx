import { Landmark } from "lucide-react";
import heroImage from "../assets/images/hero-angra.png";
import DecorativeDivider from "./DecorativeDivider";
import InfoChip from "./InfoChip";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section id="sobre" className="brasil-texture py-16 sm:py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="section-fade">
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brasilBlue text-white shadow-lift">
            <Landmark size={24} />
          </div>
          <SectionLabel>Sobre o movimento</SectionLabel>
          <h2 className="mt-4 text-3xl font-black leading-tight text-ink sm:text-4xl">O que é o MUDA ANGRA?</h2>
          <DecorativeDivider className="mt-5" />
          <p className="mt-6 text-xl font-black leading-8 text-brasilBlue">
            Um espaço de encontro para quem acredita no futuro de Angra dos Reis e da Costa Verde.
          </p>
          <div className="mt-5 space-y-4 text-base leading-8 text-slate-700">
            <p>
              O Movimento União da Direita Angrense (MUDA ANGRA) é um encontro que reúne lideranças, representantes da
              sociedade civil e moradores da região para discutir temas relacionados ao desenvolvimento de Angra dos Reis
              e da Costa Verde.
            </p>
            <p>
              O evento será um espaço para diálogo, troca de experiências e apresentação de propostas sobre temas de
              interesse da população.
            </p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            {["Evento presencial", "Diálogo regional", "Participação cidadã", "Costa Verde"].map((item) => (
              <InfoChip key={item}>{item}</InfoChip>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-organic border-2 border-brasilYellow/60" aria-hidden="true" />
          <img
            src={heroImage}
            alt="Paisagem costeira de Angra dos Reis"
            className="relative h-72 w-full rounded-organic object-cover shadow-lift lg:h-[420px]"
          />
        </div>
      </div>
    </section>
  );
}
