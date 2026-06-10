type BrazilBadgeProps = {
  className?: string;
};

export default function BrazilBadge({ className = "" }: BrazilBadgeProps) {
  return (
    <span
      className={`relative inline-grid h-12 w-12 place-items-center rounded-full border-2 border-brasilYellow bg-deepNavy text-sm font-black text-white shadow-lift ${className}`}
      aria-label="MUDA ANGRA"
    >
      <span className="absolute inset-1 rounded-full border border-brasilGreen/80" />
      <span className="relative">MA</span>
    </span>
  );
}
