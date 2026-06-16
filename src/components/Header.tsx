import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Temas", href: "#temas" },
  { label: "Apoiadores", href: "#apoiadores" },
  { label: "Inscrição", href: "#inscricao" },
  { label: "Local", href: "#local" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-yellow-900/10 bg-warmWhite/94 text-deepNavy shadow-lg backdrop-blur-xl">
      <nav
        className="section-shell flex h-16 items-center justify-between gap-4"
        aria-label="Menu principal"
      >
        <a
          href="#topo"
          className="focus-ring inline-flex shrink-0 items-center rounded-md text-xl font-black uppercase tracking-wide sm:text-2xl"
          aria-label="Muda Angra - início"
        >
          <span className="text-brasilGreen">Muda</span>
          <span className="mx-1 text-brasilYellow">Angra</span>
          <span className="h-2 w-2 rounded-full bg-oceanBlue" aria-hidden="true" />
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring group relative rounded-full px-3 py-2 text-sm font-bold text-deepNavy/78 transition hover:text-deepNavy"
            >
              {link.label}
              <span className="absolute inset-x-3 -bottom-0.5 h-0.5 scale-x-0 rounded-full bg-brasilYellow transition group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <a
          href="#inscricao"
          className="focus-ring hidden rounded-full bg-brasilYellow px-5 py-2.5 text-sm font-black text-deepNavy shadow-warm transition hover:-translate-y-0.5 hover:bg-gold lg:inline-flex"
        >
          Confirmar presença
        </a>

        <button
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-deepNavy/20 lg:hidden"
          type="button"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-yellow-900/10 bg-warmWhite lg:hidden">
          <div className="section-shell grid gap-2 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="focus-ring rounded-xl px-3 py-3 text-sm font-bold text-deepNavy/82 hover:bg-brasilGreen/10"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#inscricao"
              onClick={() => setIsOpen(false)}
              className="focus-ring mt-1 rounded-full bg-brasilYellow px-4 py-3 text-center text-sm font-black text-deepNavy"
            >
              Confirmar presença
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
