import { X } from "lucide-react";
import { MouseEvent, useEffect, useState } from "react";
import popupImage from "../assets/popupatual.png";

export default function LaunchPopup() {
  const [isOpen, setIsOpen] = useState(
    () =>
      window.location.hash !== "#inscricao" &&
      window.location.pathname !== "/obrigado",
  );

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  function handleOverlayClick(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      setIsOpen(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-[90] grid place-items-center bg-deepNavy/86 px-4 py-5 backdrop-blur-sm"
      onMouseDown={handleOverlayClick}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-label="Lancamento Muda Angra"
        className="section-fade relative max-h-[94vh] w-full max-w-[440px] overflow-hidden rounded-md border border-white/20 bg-deepNavy shadow-2xl sm:max-w-[500px]"
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="focus-ring absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-deepNavy/78 text-white shadow-lg backdrop-blur transition hover:bg-deepNavy"
          aria-label="Fechar pop-up"
        >
          <X size={22} />
        </button>

        <img
          src={popupImage}
          alt="Lancamento Muda Angra no dia 30 de junho, 18h30, no Clube Comercial de Angra dos Reis"
          className="block max-h-[94vh] w-full object-contain"
        />
      </section>
    </div>
  );
}
