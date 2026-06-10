import { BadgeCheck } from "lucide-react";

type ParticipantCardProps = {
  name: string;
  role: string;
  image: string;
};

export default function ParticipantCard({ name, role, image }: ParticipantCardProps) {
  return (
    <article className="group overflow-hidden rounded-[24px] border border-white/12 bg-white text-ink shadow-lift transition duration-300 hover:-translate-y-1">
      <div className="relative min-h-64 overflow-hidden bg-gradient-to-br from-oceanBlue/12 via-warmWhite to-brasilYellow/18">
        <img
          src={image}
          alt={`Foto de ${name}`}
          className="absolute inset-0 z-10 h-full w-full object-cover"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
        <div className="absolute inset-0 grid place-items-center px-6 text-center">
          <div>
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full border-2 border-brasilYellow bg-white text-sm font-black text-brasilBlue shadow-sm">
              MA
            </span>
            <p className="mt-4 text-sm font-black uppercase tracking-[0.14em] text-forestGreen">Foto em breve</p>
          </div>
        </div>
        <span className="absolute left-4 top-4 z-20 inline-flex items-center gap-1.5 rounded-full bg-brasilGreen px-3 py-1 text-xs font-black text-white shadow-sm">
          <BadgeCheck size={14} />
          Presença confirmada
        </span>
      </div>

      <div className="p-5">
        <span className="inline-flex rounded-full bg-brasilYellow/25 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-brasilBlue">
          Convidado
        </span>
        <h3 className="mt-4 text-xl font-black leading-tight">{name}</h3>
        <p className="mt-2 text-sm font-semibold text-forestGreen">{role}</p>
        <p className="mt-4 text-sm leading-6 text-slate-700">Mini bio e informações adicionais poderão ser incluídas em breve.</p>
      </div>
    </article>
  );
}
