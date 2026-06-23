import {
  CalendarDays,
  Flag,
  MapPin,
  PlayCircle,
  UserCheck,
} from "lucide-react";
import { EVENT_INFO } from "../config/event";
import DecorativeDivider from "./DecorativeDivider";
import InfoChip from "./InfoChip";
import SectionLabel from "./SectionLabel";

const VIDEO_URL =
  "https://kngofnnx.com/wp-content/uploads/2026/06/WhatsApp-Video-2026-06-23-at-16.49.54.mp4";

export default function VideoHighlight() {
  return (
    <section
      id="convite"
      className="relative overflow-hidden bg-deepNavy py-16 text-white sm:py-20"
    >
      <div
        className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,39,118,0.94),rgba(6,26,51,0.98)_46%,rgba(0,107,63,0.88)),radial-gradient(circle_at_18%_20%,rgba(255,223,0,0.22),transparent_28%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brasilGreen via-brasilYellow to-oceanBlue"
        aria-hidden="true"
      />

      <div className="section-shell relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="section-fade">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brasilYellow text-deepNavy shadow-warm">
            <PlayCircle size={25} />
          </div>
          <div className="mt-5">
            <SectionLabel>Convite especial</SectionLabel>
          </div>
          <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl">
            Pegue sua bandeira e venha fazer parte da união da direita regional
          </h2>
          <DecorativeDivider className="mt-5" />

          <blockquote className="mt-6 border-l-4 border-brasilYellow pl-5 text-lg font-black leading-8 text-white">
            "O momento é de pacificação e união. Vamos olhar para frente. O que
            mais importa, agora, é o futuro do nosso Brasil!"{" "}
            <span className="block pt-2 text-sm uppercase tracking-[0.14em] text-brasilYellow">
              Senador Flávio Bolsonaro
            </span>
          </blockquote>

          <div className="mt-6 space-y-4 text-base leading-8 text-white/86">
            <p>
              Para nós, defender o futuro do Brasil começa defendendo o futuro
              de Angra dos Reis e de toda a Costa Verde.
            </p>
            <p>
              O MUDA ANGRA nasce sob o manto dessa união. Enquanto alguns
              tentam criar divisões e disputas de espaço, nós escolhemos olhar
              para frente, reunindo todos aqueles que compartilham dos mesmos
              valores e princípios conservadores.
            </p>
            <p>
              Este evento é de toda a Direita unificada. É o espaço para quem
              quer somar, construir e debater soluções reais para o nosso
              município. Não caia em falsas narrativas: o movimento é real, é
              legítimo e foi feito para você.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3 text-sm font-semibold text-white/90">
            <InfoChip
              dark
              icon={<CalendarDays className="text-brasilYellow" size={18} />}
            >
              {EVENT_INFO.date}, às {EVENT_INFO.time}
            </InfoChip>
            <InfoChip
              dark
              icon={<MapPin className="text-brasilYellow" size={18} />}
            >
              {EVENT_INFO.location}
            </InfoChip>
            <InfoChip
              dark
              icon={<Flag className="text-brasilYellow" size={18} />}
            >
              mudaangra.com.br
            </InfoChip>
          </div>

          <a
            href="#inscricao"
            className="focus-ring mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-brasilYellow px-6 py-4 text-sm font-black uppercase text-deepNavy shadow-warm transition hover:-translate-y-0.5 hover:bg-gold"
          >
            <UserCheck size={20} />
            Quero confirmar presença
          </a>
        </div>

        <div className="relative">
          <div
            className="absolute -right-3 -top-3 h-full w-full rounded-[24px] border-2 border-brasilYellow/70"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-[24px] border border-white/15 bg-black shadow-lift">
            <video
              className="aspect-[9/16] max-h-[720px] w-full bg-black object-contain"
              controls
              playsInline
              preload="metadata"
              aria-label="Video convite para o evento MUDA ANGRA"
            >
              <source src={VIDEO_URL} type="video/mp4" />
              Seu navegador não suporta a reprodução deste vídeo.
            </video>
          </div>
          <p className="mt-4 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-bold leading-6 text-white/86 backdrop-blur">
            A nossa união começa agora. Nos vemos lá!
          </p>
        </div>
      </div>
    </section>
  );
}
