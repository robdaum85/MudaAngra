import {
  CalendarDays,
  Clock,
  MapPin,
  MessageCircle,
  UserCheck,
} from "lucide-react";
import { EVENT_INFO } from "../config/event";
import heroImage from "../assets/images/hero-angra.png";
import BrandLogo from "./BrandLogo";
import DecorativeDivider from "./DecorativeDivider";
import InfoChip from "./InfoChip";

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative isolate min-h-[92vh] overflow-hidden bg-deepNavy pt-16 text-white"
    >
      <img
        src={heroImage}
        alt="Vista panorâmica inspirada em Angra dos Reis, com mar, ilhas e montanhas"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_24%,rgba(255,223,0,0.24),transparent_22%),linear-gradient(105deg,rgba(6,26,51,0.96)_0%,rgba(0,39,118,0.82)_48%,rgba(0,151,57,0.58)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-warmWhite to-transparent" />
      <div
        className="absolute -right-24 top-24 h-72 w-72 rounded-full border border-brasilYellow/25"
        aria-hidden="true"
      />

      <div className="section-shell flex min-h-[calc(92vh-4rem)] items-center py-14 sm:py-20">
        <div className="max-w-3xl section-fade">
          <span className="inline-flex rounded-full border border-white/20 bg-white/12 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-brasilYellow backdrop-blur">
            {EVENT_INFO.date} • Angra dos Reis
          </span>
          <p className="mt-5 text-sm font-black uppercase tracking-[0.2em] text-brasilYellow">
            {EVENT_INFO.fullName}
          </p>
          <BrandLogo
            variant="complete"
            className="mt-4 aspect-[2.7/1] w-full max-w-[620px]"
          />
          <h1 className="mt-4 text-5xl font-black leading-[0.92] sm:text-6xl lg:text-7xl">
            {EVENT_INFO.name}
          </h1>
          <DecorativeDivider className="mt-5" />
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
            Um encontro para debater ideias, desafios e perspectivas para o
            futuro de Angra dos Reis e da Costa Verde.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-white/90">
            <InfoChip
              dark
              icon={<CalendarDays className="text-brasilYellow" size={18} />}
            >
              {EVENT_INFO.date}
            </InfoChip>
            <InfoChip
              dark
              icon={<MapPin className="text-brasilYellow" size={18} />}
            >
              {EVENT_INFO.location}
            </InfoChip>
            <InfoChip
              dark
              icon={<Clock className="text-brasilYellow" size={18} />}
            >
              {EVENT_INFO.time}
            </InfoChip>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#inscricao"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-brasilYellow px-6 py-4 text-sm font-black uppercase text-deepNavy shadow-warm transition hover:-translate-y-0.5 hover:bg-gold sm:w-auto"
            >
              <UserCheck size={20} />
              Confirmar presença
            </a>
            <a
              href="#atualizacoes"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-4 text-sm font-black uppercase text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-brasilGreen hover:bg-brasilGreen/25"
            >
              <MessageCircle size={20} />
              Receber informações
            </a>
          </div>
          <p className="mt-5 text-sm font-semibold text-white/72">
            Credenciamento recomendado para organização de acesso ao evento.
          </p>
        </div>
      </div>
    </section>
  );
}
