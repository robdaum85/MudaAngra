type SectionLabelProps = {
  children: string;
  tone?: "light" | "dark";
};

export default function SectionLabel({ children, tone = "light" }: SectionLabelProps) {
  const styles =
    tone === "dark"
      ? "border-white/15 bg-white/10 text-brasilYellow"
      : "border-brasilGreen/20 bg-brasilGreen/10 text-forestGreen";

  return (
    <span className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] ${styles}`}>
      {children}
    </span>
  );
}
