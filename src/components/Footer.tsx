import { Instagram, MessageCircle } from "lucide-react";
import { EVENT_INFO } from "../config/event";
import BrandLogo from "./BrandLogo";

const links = {
  instagram: "#",
  privacy: "#",
  terms: "#",
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deepNavy pb-24 pt-0 text-white sm:pb-12">
      <div className="h-1.5 bg-gradient-to-r from-brasilGreen via-brasilYellow to-oceanBlue" />
      <div className="section-shell">
        <div className="grid gap-8 py-12 md:grid-cols-3">
          <div>
            <BrandLogo
              variant="complete"
              className="aspect-[1.12/1] w-full max-w-[260px]"
            />
            <h2 className="mt-5 text-3xl font-black">{EVENT_INFO.name}</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
              {EVENT_INFO.fullName}
              <br />
              Angra dos Reis • Costa Verde
            </p>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-brasilYellow">
              Links rápidos
            </h3>
            <div className="mt-4 grid gap-3 text-sm font-semibold">
              <a
                className="focus-ring rounded-md text-white/78 hover:text-white"
                href="#sobre"
              >
                Sobre
              </a>
              <a
                className="focus-ring rounded-md text-white/78 hover:text-white"
                href="#temas"
              >
                Temas
              </a>
              <a
                className="focus-ring rounded-md text-white/78 hover:text-white"
                href="#inscricao"
              >
                Inscrição
              </a>
              <a
                className="focus-ring rounded-md text-white/78 hover:text-white"
                href="#local"
              >
                Local
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-brasilYellow">
              Canais oficiais
            </h3>
            <div className="mt-4 grid gap-3 text-sm font-semibold">
              <a
                className="focus-ring inline-flex items-center gap-2 rounded-md text-white/80 hover:text-white"
                href={links.instagram}
              >
                <Instagram size={18} />
                Instagram
              </a>
              <a
                className="focus-ring inline-flex items-center gap-2 rounded-md text-white/80 hover:text-white"
                href={EVENT_INFO.whatsappGroupLink}
                target={
                  EVENT_INFO.whatsappGroupLink === "#" ? undefined : "_blank"
                }
                rel={
                  EVENT_INFO.whatsappGroupLink === "#"
                    ? undefined
                    : "noreferrer"
                }
                onClick={(event) => {
                  if (EVENT_INFO.whatsappGroupLink === "#") {
                    event.preventDefault();
                  }
                }}
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <a
                className="focus-ring rounded-md text-white/80 hover:text-white"
                href={links.privacy}
              >
                Política de Privacidade
              </a>
              <a
                className="focus-ring rounded-md text-white/80 hover:text-white"
                href={links.terms}
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-sm text-white/60">
          © {currentYear} {EVENT_INFO.name}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
