import type { ReactNode } from "react";

type InfoChipProps = {
  children: ReactNode;
  icon?: ReactNode;
  dark?: boolean;
};

export default function InfoChip({ children, icon, dark = false }: InfoChipProps) {
  const styles = dark
    ? "border-white/15 bg-white/10 text-white"
    : "border-brasilGreen/15 bg-white/80 text-ink shadow-sm";

  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-bold ${styles}`}>
      {icon}
      {children}
    </span>
  );
}
