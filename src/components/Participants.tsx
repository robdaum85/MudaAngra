import { participants } from "../data/participants";
import DecorativeDivider from "./DecorativeDivider";
import ParticipantCard from "./ParticipantCard";
import SectionLabel from "./SectionLabel";

export default function Participants() {
  return (
    <section id="participantes" className="relative overflow-hidden bg-gradient-to-br from-deepNavy via-brasilBlue to-forestGreen py-16 text-white sm:py-20">
      <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full border border-brasilYellow/25" aria-hidden="true" />
      <div className="absolute -bottom-28 left-10 h-80 w-80 rounded-full bg-brasilYellow/10 blur-3xl" aria-hidden="true" />
      <div className="section-shell">
        <div className="max-w-3xl">
          <SectionLabel tone="dark">Participantes</SectionLabel>
          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">Presenças confirmadas</h2>
          <DecorativeDivider className="mt-5" />
          <p className="mt-4 text-base leading-8 text-white/80">
            Espaço reservado para fotos e mini biografias dos convidados.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {participants.map((participant) => (
            <ParticipantCard key={participant.name} {...participant} />
          ))}
        </div>
        <p className="mt-7 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white/78 backdrop-blur">
          Novos convidados serão divulgados conforme confirmação da organização.
        </p>
      </div>
    </section>
  );
}
