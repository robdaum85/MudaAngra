import { UserCheck } from "lucide-react";

export default function FloatingCTA() {
  return (
    <a
      href="#inscricao"
      className="focus-ring fixed inset-x-4 bottom-4 z-50 inline-flex items-center justify-center gap-2 rounded-full bg-brasilYellow px-5 py-4 text-sm font-black uppercase text-deepNavy shadow-warm transition hover:bg-gold sm:hidden"
    >
      <UserCheck size={20} />
      Confirmar presença
    </a>
  );
}
