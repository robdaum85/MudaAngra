type ParticipantCardProps = {
  name: string;
  image: string;
  imageClassName?: string;
};

export default function ParticipantCard({
  name,
  image,
  imageClassName = "object-center",
}: ParticipantCardProps) {
  return (
    <article className="group overflow-hidden rounded-[24px] border border-white/12 bg-white text-ink shadow-lift transition duration-300 hover:-translate-y-1">
      <div className="relative min-h-64 overflow-hidden bg-gradient-to-br from-oceanBlue/12 via-warmWhite to-brasilYellow/18">
        <img
          src={image}
          alt={`Foto de ${name}`}
          className={`absolute inset-0 z-10 h-full w-full object-cover ${imageClassName}`}
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
        <div className="absolute inset-0 grid place-items-center px-6 text-center">
          <div>
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full border-2 border-brasilYellow bg-white text-sm font-black text-brasilBlue shadow-sm">
              MA
            </span>
            <p className="mt-4 text-sm font-black uppercase tracking-[0.14em] text-forestGreen">Foto em breve</p>
          </div>
        </div>
      </div>

      <div className="p-5 text-center">
        <h3 className="text-xl font-black leading-tight">{name}</h3>
      </div>
    </article>
  );
}
