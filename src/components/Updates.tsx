import { Instagram, MessageCircle } from "lucide-react";
import { EVENT_INFO } from "../config/event";
import SectionLabel from "./SectionLabel";

export default function Updates() {
  return (
    <section id="atualizacoes" className="bg-warmWhite py-16 sm:py-20">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-brasilBlue via-oceanBlue to-brasilGreen p-6 text-white shadow-lift sm:p-10">
          <div
            className="absolute -right-10 -top-12 h-40 w-40 rounded-full border-[18px] border-brasilYellow/20"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-8 right-8 hidden h-20 w-20 rounded-full bg-brasilYellow/20 blur-xl sm:block"
            aria-hidden="true"
          />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <SectionLabel tone="dark">Receba atualizações</SectionLabel>
              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                Entre no grupo oficial de informações
              </h2>
              <p className="mt-4 text-base leading-8 text-white/85">
                O acesso ao grupo é liberado após o preenchimento do
                credenciamento.
              </p>
              <p className="mt-3 text-sm font-semibold text-brasilYellow">
                Confirme seus dados para receber comunicados, orientações e
                novidades do MUDA ANGRA.
              </p>
              <p className="mt-5 text-sm font-semibold text-white/85">
                Siga tambem o Instagram oficial {EVENT_INFO.instagramHandle} e
                acompanhe os proximos comunicados do movimento.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 lg:items-end">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-white/12 text-brasilYellow backdrop-blur">
                <Instagram size={34} />
              </span>
              <a
                href={EVENT_INFO.instagramLink}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-4 text-sm font-black uppercase text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-brasilYellow hover:bg-white/20 sm:w-auto"
              >
                <Instagram size={21} />
                Seguir no Instagram
              </a>
              <a
                href="#inscricao"
                className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-full bg-brasilYellow px-6 py-4 text-sm font-black uppercase text-deepNavy shadow-warm transition hover:-translate-y-0.5 hover:bg-gold sm:w-auto"
              >
                <MessageCircle size={21} />
                Preencher cadastro
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
