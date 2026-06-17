import { Instagram, MessageCircle } from "lucide-react";
import { EVENT_INFO } from "../config/event";
import BrandLogo from "./BrandLogo";

const links = {
  privacy: "#",
  terms: "#",
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-warmWhite pb-24 pt-0 text-ink sm:pb-12">
      <div className="h-1.5 bg-gradient-to-r from-brasilGreen via-brasilYellow to-oceanBlue" />
      <div className="section-shell">
        <div className="grid gap-8 py-12 md:grid-cols-3">
          <div>
            <BrandLogo
              variant="complete"
              className="aspect-[1.12/1] w-full max-w-[260px]"
            />
            <h2 className="mt-5 text-3xl font-black">{EVENT_INFO.name}</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-700">
              {EVENT_INFO.fullName}
              <br />
              Angra dos Reis • Costa Verde
            </p>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-forestGreen">
              Links rápidos
            </h3>
            <div className="mt-4 grid gap-3 text-sm font-semibold">
              <a
                className="focus-ring rounded-md text-slate-700 hover:text-brasilBlue"
                href="#sobre"
              >
                Sobre
              </a>
              <a
                className="focus-ring rounded-md text-slate-700 hover:text-brasilBlue"
                href="#temas"
              >
                Temas
              </a>
              <a
                className="focus-ring rounded-md text-slate-700 hover:text-brasilBlue"
                href="#inscricao"
              >
                Inscrição
              </a>
              <a
                className="focus-ring rounded-md text-slate-700 hover:text-brasilBlue"
                href="#local"
              >
                Local
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-forestGreen">
              Canais oficiais
            </h3>
            <div className="mt-4 grid gap-3 text-sm font-semibold">
              <a
                className="focus-ring inline-flex items-center gap-2 rounded-md text-slate-700 hover:text-brasilBlue"
                href={EVENT_INFO.instagramLink}
                target="_blank"
                rel="noreferrer"
              >
                <Instagram size={18} />
                {EVENT_INFO.instagramHandle}
              </a>
              <a
                className="focus-ring inline-flex items-center gap-2 rounded-md text-slate-700 hover:text-brasilBlue"
                href="#inscricao"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <a
                className="focus-ring rounded-md text-slate-700 hover:text-brasilBlue"
                href={links.privacy}
              >
                Política de Privacidade
              </a>
              <a
                className="focus-ring rounded-md text-slate-700 hover:text-brasilBlue"
                href={links.terms}
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-yellow-900/10 pt-6 text-sm text-slate-600">
          © {currentYear} {EVENT_INFO.name}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
