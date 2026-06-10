import type { ReactNode } from "react";

type EventInfoCardProps = {
  label: string;
  title: string;
  text: string;
  icon: ReactNode;
};

export default function EventInfoCard({ label, title, text, icon }: EventInfoCardProps) {
  return (
    <article className="flex gap-4 rounded-[22px] border border-brasilGreen/10 bg-warmWhite p-5 shadow-sm">
      <span className="mt-1 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brasilGreen text-white shadow-sm">
        {icon}
      </span>
      <div>
        <p className="text-[11px] font-black uppercase tracking-[0.16em] text-forestGreen">{label}</p>
        <h3 className="mt-1 text-lg font-black text-ink">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-700">{text}</p>
      </div>
    </article>
  );
}
