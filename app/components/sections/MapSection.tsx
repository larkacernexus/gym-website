import MapEmbed from '@/app/components/MapEmbed';

export default function MapSection() {
  return (
    <section className="py-20 md:py-32 px-6 lg:px-16 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-12 md:mb-16">
          <div className="luxe-label mb-4">Find us</div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl text-white leading-[0.9]">
            Train with us
            <br />
            in Valencia.
          </h2>
        </div>
        <MapEmbed />
      </div>
    </section>
  );
}