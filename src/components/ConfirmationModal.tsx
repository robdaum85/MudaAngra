import { CalendarDays, CheckCircle2, Clock, MapPin, X } from "lucide-react";
import { MouseEvent, useEffect } from "react";
import { EVENT_INFO } from "../config/event";

type ConfirmationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  whatsappGroupLink: string;
};

export default function ConfirmationModal({
  isOpen,
  onClose,
  whatsappGroupLink,
}: ConfirmationModalProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  function handleOverlayClick(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  function handleGroupClick(event: MouseEvent<HTMLAnchorElement>) {
    if (whatsappGroupLink === "#") {
      event.preventDefault();
    }
  }

  return (
    <div
      className="fixed inset-0 z-[80] grid place-items-center bg-deepNavy/82 px-4 py-6 backdrop-blur-sm"
      onMouseDown={handleOverlayClick}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirmation-modal-title"
        className="section-fade relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-[30px] border border-white/70 bg-warmWhite p-5 text-ink shadow-2xl sm:p-7"
      >
        <button
          type="button"
          onClick={onClose}
          className="focus-ring absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-deepNavy/8 text-ink transition hover:bg-deepNavy/14"
          aria-label="Fechar confirmação"
        >
          <X size={20} />
        </button>

        <div className="pr-10">
          <span className="grid h-16 w-16 place-items-center rounded-full bg-brasilGreen text-white shadow-lift">
            <CheckCircle2 size={34} />
          </span>
          <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-forestGreen">
            Credenciamento
          </p>
          <h2
            id="confirmation-modal-title"
            className="mt-2 text-3xl font-black leading-tight text-deepNavy"
          >
            Presença confirmada!
          </h2>
        </div>

        <p className="mt-5 text-base leading-8 text-slate-700">
          Obrigado por confirmar sua presença no {EVENT_INFO.name}. Seus dados
          foram recebidos e a organização poderá enviar novas informações pelos
          canais informados.
        </p>

        <div className="mt-6 grid gap-3">
          <EventLine
            icon={<CalendarDays size={19} />}
            label="Data"
            value={EVENT_INFO.date}
          />
          <EventLine
            icon={<MapPin size={19} />}
            label="Local"
            value={EVENT_INFO.location}
          />
          <EventLine
            icon={<Clock size={19} />}
            label="Horário"
            value={EVENT_INFO.time.replace("Horário ", "").toLowerCase()}
          />
        </div>

        <p className="mt-5 rounded-[20px] border border-brasilYellow/40 bg-brasilYellow/18 px-4 py-3 text-sm font-semibold leading-6 text-deepNavy">
          Fique atento ao WhatsApp e ao e-mail informados no credenciamento.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]">
          <a
            href={whatsappGroupLink}
            target={whatsappGroupLink === "#" ? undefined : "_blank"}
            rel={whatsappGroupLink === "#" ? undefined : "noreferrer"}
            onClick={handleGroupClick}
            className="focus-ring inline-flex items-center justify-center rounded-full bg-brasilYellow px-5 py-3 text-sm font-black uppercase text-deepNavy shadow-warm transition hover:bg-gold"
          >
            Entrar no grupo oficial
          </a>
          <button
            type="button"
            onClick={onClose}
            className="focus-ring inline-flex items-center justify-center rounded-full border border-deepNavy/15 bg-white px-5 py-3 text-sm font-black uppercase text-deepNavy transition hover:bg-offWhite"
          >
            Fechar
          </button>
        </div>
      </section>
    </div>
  );
}

type EventLineProps = {
  icon: JSX.Element;
  label: string;
  value: string;
};

function EventLine({ icon, label, value }: EventLineProps) {
  return (
    <div className="flex items-center gap-3 rounded-[18px] border border-yellow-900/10 bg-white px-4 py-3 shadow-sm">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brasilGreen/12 text-forestGreen">
        {icon}
      </span>
      <p className="text-sm leading-5">
        <span className="font-black text-deepNavy">{label}: </span>
        <span className="font-semibold text-slate-700">{value}</span>
      </p>
    </div>
  );
}
