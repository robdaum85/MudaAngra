import logoImage from "../assets/logos/logomudaangra.png";

type BrandLogoProps = {
  variant?: "compact" | "complete";
  className?: string;
  imageClassName?: string;
};

const logoMap = {
  compact: {
    src: logoImage,
    alt: "#MudaAngra",
    fit: "object-cover object-[50%_38%]",
    scale: "",
  },
  complete: {
    src: logoImage,
    alt: "Movimento Uniao #MudaAngra da Direita Angrense",
    fit: "object-contain",
    scale: "scale-[1.12]",
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
        className={`h-full w-full ${logo.fit} ${logo.scale} ${imageClassName}`}
      />
    </span>
  );
}
