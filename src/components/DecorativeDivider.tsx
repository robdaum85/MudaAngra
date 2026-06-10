type DecorativeDividerProps = {
  className?: string;
};

export default function DecorativeDivider({ className = "" }: DecorativeDividerProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`} aria-hidden="true">
      <span className="h-1.5 w-16 rounded-full bg-brasilGreen" />
      <span className="h-1.5 w-8 rounded-full bg-brasilYellow" />
      <span className="h-1.5 w-5 rounded-full bg-oceanBlue" />
    </div>
  );
}
