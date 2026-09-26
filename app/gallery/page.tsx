import Gallery from '@/app/components/Gallery';
import Link from 'next/link';

export default function GalleryPage() {
  return (
    <div className="bg-black pt-32">
      <section className="py-24 px-6 text-center">
        <div className="luxe-label mb-6 fade-up">The Visual Story</div>
        <h1 className="font-display text-6xl md:text-8xl mb-8 fade-up delay-1">
          PHOTO <span className="text-gradient-blue">GALLERY</span>
        </h1>
        <p className="text-white/60 max-w-2xl mx-auto text-lg fade-up delay-2">
          A look inside FitLife Fitness Gym — our space, our equipment, our
          community.
        </p>
        <div className="divider-blue"></div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Gallery />

          <div className="mt-24 bg-gradient-to-br from-blue-700 to-blue-900 p-16 text-center">
            <div className="luxe-label !text-white/80 mb-4">Stay Connected</div>
            <h3 className="font-display text-4xl md:text-5xl mb-6 tracking-wide text-white">
              WANT TO SEE <span className="text-white">MORE?</span>
            </h3>
            <p className="text-white/80 mb-10 max-w-xl mx-auto">
              Follow us on Facebook for daily updates, member spotlights, and
              workout tips.
            </p>
            <a
              href="https://www.facebook.com/fitlifegymph"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-700 px-10 py-4 font-bold tracking-widest uppercase text-xs hover:bg-neutral-100 transition-all"
              style={{
                clipPath:
                  'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
              }}
            >
              Follow FitLife
            </a>
          </div>

          <div className="text-center mt-16">
            <Link href="/contact" className="btn-outline">
              Plan Your Visit →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}