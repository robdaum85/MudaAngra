import { Car, MapPinned, Navigation } from "lucide-react";
import { EVENT_INFO } from "../config/event";
import EventInfoCard from "./EventInfoCard";
import SectionLabel from "./SectionLabel";

const eventAddress = "Endereço completo a confirmar.";
const accessGuidance =
  "Orientações de acesso serão divulgadas pela organização.";
const parkingInfo =
  "Informações sobre estacionamento serão atualizadas em breve.";
const googleMapsEmbedUrl = "";

export default function Location() {
  return (
    <section id="local" className="brasil-texture py-16 sm:py-20">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div>
            <SectionLabel>Local do evento</SectionLabel>
            <h2 className="mt-4 text-3xl font-black leading-tight text-ink sm:text-4xl">
              {EVENT_INFO.location}
            </h2>

            <div className="mt-8 grid gap-4">
              <EventInfoCard
                icon={<MapPinned size={22} />}
                label="Local"
                title={EVENT_INFO.location}
                text="Evento presencial."
              />
              <EventInfoCard
                icon={<MapPinned size={22} />}
                label="Endereço"
                title="A confirmar"
                text={eventAddress}
              />
              <EventInfoCard
                icon={<Navigation size={22} />}
                label="Acesso"
                title="Orientações"
                text={accessGuidance}
              />
              <EventInfoCard
                icon={<Car size={22} />}
                label="Estacionamento"
                title="Informações em breve"
                text={parkingInfo}
              />
            </div>
          </div>

          <div className="min-h-[360px] overflow-hidden rounded-[30px] border border-yellow-900/10 bg-white shadow-lift">
            {googleMapsEmbedUrl ? (
              <iframe
                src={googleMapsEmbedUrl}
                title="Mapa do Clube Comercial de Angra dos Reis"
                className="h-full min-h-[360px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="relative grid h-full min-h-[360px] place-items-center overflow-hidden bg-[radial-gradient(circle_at_25%_25%,rgba(255,223,0,0.24),transparent_22%),radial-gradient(circle_at_75%_70%,rgba(0,151,57,0.18),transparent_28%),linear-gradient(135deg,#fffdf4,#eef6f0)] p-6 text-center">
                <div
                  className="absolute inset-0 opacity-35 [background-image:linear-gradient(0deg,rgba(0,39,118,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(0,39,118,0.12)_1px,transparent_1px)] [background-size:42px_42px]"
                  aria-hidden="true"
                />
                <div className="relative max-w-xs rounded-[24px] border border-white/70 bg-white/86 p-6 shadow-soft backdrop-blur">
                  <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brasilGreen text-white shadow-lift">
                    <MapPinned size={34} />
                  </span>
                  <h3 className="mt-4 text-xl font-black text-ink">
                    Mapa em breve
                  </h3>
                  <p className="mt-2 text-sm font-bold leading-6 text-slate-700">
                    O mapa será inserido quando o link for confirmado.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
