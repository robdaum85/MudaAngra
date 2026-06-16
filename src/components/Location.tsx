import { Car, MapPinned, Navigation } from "lucide-react";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { EVENT_INFO } from "../config/event";
import EventInfoCard from "./EventInfoCard";
import SectionLabel from "./SectionLabel";

const eventAddress = "Rua do Comércio, 79 - Centro, Angra dos Reis/RJ.";
const accessGuidance =
  "Use o mapa para localizar o Clube Comercial no Centro de Angra dos Reis.";
const parkingInfo =
  "Informações sobre estacionamento serão atualizadas em breve.";
const eventPosition: [number, number] = [-23.0078726, -44.3172561];
const directionsUrl =
  "https://www.openstreetmap.org/directions?to=-23.0078726%2C-44.3172561";
const markerIcon = L.divIcon({
  className: "",
  html: '<span class="map-pin-marker" aria-hidden="true"></span>',
  iconSize: [36, 36],
  iconAnchor: [18, 36],
  popupAnchor: [0, -34],
});

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
                title="Rua do Comércio, 79"
                text={eventAddress}
              />
              <EventInfoCard
                icon={<Navigation size={22} />}
                label="Acesso"
                title="Centro de Angra dos Reis"
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
            <MapContainer
              center={eventPosition}
              zoom={17}
              scrollWheelZoom={false}
              className="h-full min-h-[360px] w-full"
              aria-label="Mapa do Clube Comercial de Angra dos Reis"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={eventPosition} icon={markerIcon}>
                <Popup>
                  <strong>{EVENT_INFO.location}</strong>
                  <br />
                  {eventAddress}
                  <br />
                  <a href={directionsUrl} target="_blank" rel="noreferrer">
                    Abrir rota
                  </a>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
