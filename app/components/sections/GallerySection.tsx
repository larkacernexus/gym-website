import Link from 'next/link';
import Gallery from '@/app/components/Gallery';

export default function GallerySection() {
  return (
    <section className="py-20 md:py-32 px-6 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-10 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="luxe-label mb-4">Inside the gym</div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl text-white leading-[0.9]">
              The Gallery.
            </h2>
          </div>
          <Link
            href="/gallery"
            className="font-condensed text-[0.7rem] md:text-xs tracking-[0.3em] uppercase text-sky-400 hover:text-white transition-colors font-semibold whitespace-nowrap self-start md:self-auto md:pb-2"
          >
            View Full Gallery →
          </Link>
        </div>

        {/* Gallery */}
        <Gallery />

        {/* Bottom CTA (mobile-friendly) */}
        <div className="flex justify-center mt-10 md:mt-12">
          <Link href="/gallery" className="btn-outline">
            See All Photos →
          </Link>
        </div>
      </div>
    </section>
  );
}