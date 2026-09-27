export default function Marquee() {
  return (
    <section className="bg-blue-700 py-5 md:py-6 overflow-hidden">
      <div className="flex items-center justify-center gap-4 md:gap-8 text-white font-display text-sm sm:text-base md:text-2xl tracking-[0.15em] px-4">
        <span>STRONG BODY</span>
        <span className="text-white/50">◆</span>
        <span>STRONG MIND</span>
        <span className="text-white/50 hidden sm:inline">◆</span>
        <span className="text-white/80 hidden sm:inline">STRONGER YOU</span>
      </div>
    </section>
  );
}