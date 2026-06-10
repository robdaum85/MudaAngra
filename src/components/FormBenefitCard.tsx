import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Receber orientações de acesso",
  "Acompanhar atualizações do evento",
  "Facilitar sua entrada no local",
  "Receber comunicados oficiais",
];

export default function FormBenefitCard() {
  return (
    <aside className="rounded-[28px] bg-gradient-to-br from-deepNavy via-brasilBlue to-forestGreen p-6 text-white shadow-lift lg:sticky lg:top-24">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-brasilYellow">Credenciamento</p>
      <h3 className="mt-3 text-2xl font-black leading-tight">Ao se credenciar, você poderá:</h3>
      <ul className="mt-6 grid gap-4">
        {benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-3 text-sm font-semibold leading-6 text-white/88">
            <CheckCircle2 className="mt-0.5 shrink-0 text-brasilYellow" size={20} />
            {benefit}
          </li>
        ))}
      </ul>
      <div className="mt-8 rounded-[20px] border border-white/15 bg-white/10 p-4 text-sm leading-6 text-white/80">
        Credenciamento recomendado para organização de acesso ao evento.
      </div>
    </aside>
  );
}
