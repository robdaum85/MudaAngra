import compactLogo from "../assets/logos/muda-angra-logo-2-transparent.png";
import completeLogo from "../assets/logos/muda-angra-logo-1-transparent.png";

type BrandLogoProps = {
  variant?: "compact" | "complete";
  className?: string;
  imageClassName?: string;
};

const logoMap = {
  compact: {
    src: compactLogo,
    alt: "#MudaAngra",
    position: "object-[50%_57%]",
  },
  complete: {
    src: completeLogo,
    alt: "Movimento Uniao #MudaAngra da Direita Angrense",
    position: "object-[50%_56%]",
  },
};

export default function BrandLogo({
  variant = "compact",
  className = "",
  imageClassName = "",
}: BrandLogoProps) {
  const logo = logoMap[variant];

  return (
    <span className={`block overflow-hidden rounded-md ${className}`}>
      <img
        src={logo.src}
        alt={logo.alt}
        className={`h-full w-full object-cover ${logo.position} ${imageClassName}`}
      />
    </span>
  );
}
