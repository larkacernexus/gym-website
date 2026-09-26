import Link from 'next/link';
import Gallery from '@/app/components/Gallery';
import Testimonials from '@/app/components/Testimonials';
import MapEmbed from '@/app/components/MapEmbed';

export default function Home() {
  const facilityTags = [
    'Free Weights',
    'Boxing Ring',
    'Pilates Studio',
    'Cardio Zone',
    'Free WiFi',
    'Wide Parking',
  ];

  const offers = [
    { title: 'Weight Training', desc: 'Sculpt and define' },
    { title: 'Strength Training', desc: 'Build raw power' },
    { title: 'Boxing', desc: 'Strike and condition' },
    { title: 'Muaythai', desc: 'Clinch and kick' },
    { title: 'Step Dance', desc: 'Cardio in rhythm' },
    { title: 'Zumba', desc: 'Dance and burn' },
    { title: 'Asian Mat Pilates', desc: 'Core and posture' },
    { title: 'HIIT Functional', desc: 'Max effort, max burn' },
  ];

  return (
    <div className="bg-black">
      {/* HERO — Split layout */}
      <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 pt-24">
        {/* LEFT — Content */}
        <div className="flex flex-col justify-center px-6 lg:px-16 xl:px-24 py-20 lg:py-32">
          <div className="flex items-center gap-4 mb-8 fade-up">
            <span className="w-10 h-px bg-sky-400"></span>
            <span className="luxe-label">Est. 2022 · Valencia City</span>
          </div>

     <h1 className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.88] text-white fade-up delay-1">
  Do not stop.
  <br />
  Hanggat di ka pa <span className="text-gradient-blue">masarap.</span>
</h1>

          <p className="max-w-lg text-white/70 text-lg mt-8 mb-10 fade-up delay-2 leading-relaxed">
            A community built on strength, discipline, and motivation.
            We help you become the best version of yourself.
          </p>

          <div className="flex flex-wrap gap-4 fade-up delay-3">
            <a href="tel:09954630320" className="btn-primary">
              Join the Gym
            </a>
            <Link href="/classes" className="btn-outline">
              Explore Programs
            </Link>
          </div>

          {/* Facility tags */}
          <div className="flex flex-wrap gap-2 mt-12 fade-up delay-4">
            {facilityTags.map((tag) => (
              <span key={tag} className="tag-chip">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT — Image / Visual */}
        <div className="relative hidden lg:block">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1400')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

          {/* Floating badge */}
          <div className="absolute bottom-12 right-12 text-right">
            <div className="font-condensed text-xs tracking-[0.35em] text-sky-400 mb-2">
              All In One Gym
            </div>
            <div className="font-display text-3xl text-white">
              FOR ALL YOUR GOALS
            </div>
          </div>
        </div>

        {/* Top stat bar */}
        <div className="lg:absolute lg:top-24 lg:left-0 lg:right-0 z-10 border-y border-white/10 bg-black/50 backdrop-blur-sm">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-4 flex flex-wrap gap-x-10 gap-y-2 justify-center lg:justify-start">
            <span className="font-condensed text-xs tracking-[0.3em] text-white/60 uppercase">
              16K+ Facebook Family
            </span>
            <span className="hidden md:inline text-sky-400">•</span>
            <span className="font-condensed text-xs tracking-[0.3em] text-white/60 uppercase">
              Open Mon–Sat 6AM–10PM
            </span>
            <span className="hidden md:inline text-sky-400">•</span>
            <span className="font-condensed text-xs tracking-[0.3em] text-white/60 uppercase">
              Q Square Building, Barok
            </span>
          </div>
        </div>
      </section>

      {/* MARQUEE — Bold blue */}
      <section className="bg-blue-700 py-6 overflow-hidden">
        <div className="flex items-center justify-center gap-8 text-white font-display text-lg md:text-2xl tracking-[0.15em]">
          <span>STRONG BODY</span>
          <span className="text-white/50">◆</span>
          <span>STRONG MIND</span>
          <span className="text-white/50">◆</span>
          <span className="text-white/80">STRONGER YOU</span>
        </div>
      </section>

      {/* ABOUT — Like "More Than Room to Train" */}
      <section className="py-32 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="luxe-label mb-4">Built for the way you train</div>
            <h2 className="font-display text-5xl md:text-7xl text-white leading-[0.9]">
              More Than
              <br />
              Room to Train.
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                'Free Weights Area',
                'Boxing Ring',
                'Pilates Studio',
                'Cardio Zone',
                'Free WiFi',
                'Wide Parking',
              ].map((t) => (
                <span key={t} className="tag-chip">
                  {t}
                </span>
              ))}
            </div>
            <p className="text-white/70 text-lg leading-relaxed">
              Everything you need, under one roof. From heavy lifting to
              high-energy boxing, mindful Pilates to full-on HIIT — FitLife is
              built for every body, every goal, every level.
            </p>
          </div>
        </div>
      </section>

      {/* WE OFFER — Grid of programs */}
      <section className="py-32 px-6 lg:px-16 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="luxe-label mb-4">We Offer</div>
              <h2 className="font-display text-5xl md:text-7xl text-white leading-[0.9]">
                World-Class
                <br />
                Programs.
              </h2>
            </div>
            <p className="text-white/60 max-w-md">
              Ten distinct programs — built to meet every goal, every schedule,
              every fitness level.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-white/10">
            {offers.map((offer, i) => (
              <div
                key={i}
                className="group bg-black p-8 hover:bg-blue-600/5 transition-colors duration-500 relative"
              >
                <div className="font-condensed text-xs tracking-[0.3em] text-sky-400 mb-6">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-display text-2xl text-white mb-2 group-hover:text-sky-400 transition-colors">
                  {offer.title}
                </h3>
                <p className="font-condensed text-sm tracking-wider text-white/40 uppercase">
                  {offer.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS — Big numbers */}
      <section className="py-32 px-6 lg:px-16 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <div className="luxe-label mb-4">By the numbers</div>
            <h2 className="font-display text-5xl md:text-7xl text-white leading-[0.9]">
              One Gym.
              <br />
              One Standard.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            {[
              { num: '16K+', label: 'Facebook Family' },
              { num: '4K+', label: 'Community Members' },
              { num: '10', label: 'Programs' },
              { num: '2022', label: 'Established' },
            ].map((s, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="font-display text-6xl md:text-8xl text-white leading-none">
                  {s.num}
                </div>
                <div className="luxe-label mt-4">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY CHOICE */}
      <section className="py-32 px-6 lg:px-16 bg-gradient-to-br from-blue-700 to-blue-900">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="luxe-label !text-white/80 mb-6">Community Choice</div>
          <h2 className="font-display text-5xl md:text-8xl text-white leading-[0.9] mb-8">
            Valencia's
            <br />
            Home Gym.
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            From first-time lifters to competitive athletes — every body finds
            their place at FitLife.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-32 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <div className="luxe-label mb-4">Inside the gym</div>
            <h2 className="font-display text-5xl md:text-7xl text-white leading-[0.9]">
              The Gallery.
            </h2>
          </div>
          <Gallery />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 px-6 lg:px-16 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <div className="luxe-label mb-4">Social proof</div>
            <h2 className="font-display text-5xl md:text-7xl text-white leading-[0.9]">
              What Members
              <br />
              Say.
            </h2>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* MAP */}
      <section className="py-32 px-6 lg:px-16 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <div className="luxe-label mb-4">Find us</div>
            <h2 className="font-display text-5xl md:text-7xl text-white leading-[0.9]">
              Train with us
              <br />
              in Valencia.
            </h2>
          </div>
          <MapEmbed />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-6 lg:px-16 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="font-display text-6xl md:text-9xl text-white leading-[0.9] mb-8">
            Don't Just Dream
            <br />
            of a Better Body.
          </h2>
          <div className="font-display text-5xl md:text-7xl text-sky-400 mb-12">
            TRAIN FOR IT.
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:09954630320" className="btn-primary">
              Call 0995 463 0320
            </a>
            <a
              href="https://www.facebook.com/fitlifegymph"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Message on Facebook
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}