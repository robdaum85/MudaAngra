import { MessageCircle } from "lucide-react";
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
            </div>

            <div className="flex flex-col items-start gap-4 lg:items-end">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-white/12 text-brasilYellow backdrop-blur">
                <MessageCircle size={34} />
              </span>
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
