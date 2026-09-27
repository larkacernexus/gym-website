export default function FinalCTA() {
  return (
    <section className="py-20 md:py-32 px-6 lg:px-16 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto text-center">
        <h2 className="font-display text-4xl sm:text-6xl md:text-9xl text-white leading-[0.9] mb-6 md:mb-8">
          Don&apos;t Just Dream
          <br />
          of a Better Body.
        </h2>
        <div className="font-display text-3xl sm:text-5xl md:text-7xl text-sky-400 mb-10 md:mb-12">
          TRAIN FOR IT.
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-stretch sm:items-center">
          <a href="tel:09954630320" className="btn-primary text-center">
            Call 0995 463 0320
          </a>
          <a
            href="https://www.facebook.com/fitlifegymph"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-center"
          >
            Message on Facebook
          </a>
        </div>
      </div>
    </section>
  );
}