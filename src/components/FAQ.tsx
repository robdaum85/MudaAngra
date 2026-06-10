import { ChevronDown } from "lucide-react";
import { faq } from "../data/faq";
import SectionLabel from "./SectionLabel";

export default function FAQ() {
  return (
    <section id="faq" className="bg-offWhite py-16 sm:py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-4 text-3xl font-black leading-tight text-ink sm:text-4xl">Dúvidas frequentes</h2>
          <p className="mt-4 text-base leading-8 text-slate-700">
            Informações básicas para quem deseja participar do encontro.
          </p>

          <div className="mt-8 grid gap-3">
            {faq.map((item) => (
              <details key={item.question} className="group rounded-[20px] border border-yellow-900/10 bg-warmWhite p-5 shadow-sm transition hover:shadow-soft">
                <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl text-left font-black text-ink">
                  {item.question}
                  <ChevronDown className="shrink-0 text-forestGreen transition duration-300 group-open:rotate-180" size={18} />
                </summary>
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-open:grid-rows-[1fr]">
                  <p className="mt-3 overflow-hidden leading-7 text-slate-700">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
