import Link from 'next/link';
import Gallery from '@/app/components/Gallery';
import Testimonials from '@/app/components/Testimonials';
import MapEmbed from '@/app/components/MapEmbed';
import FollowCommunity from '@/app/components/FollowCommunity';

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
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center pt-24 overflow-hidden">
        {/* Background image — covers the WHOLE hero on every screen size */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600')",
          }}
        />
        {/* Dark overlays for legibility */}
        <div className="absolute inset-0 bg-black/70 lg:bg-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black lg:bg-gradient-to-r lg:from-black lg:via-black/60 lg:to-transparent" />

        {/* Content grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 max-w-[1400px] mx-auto w-full px-6 lg:px-16 xl:px-24">
          {/* LEFT — Content */}
          <div className="flex flex-col justify-center py-16 lg:py-32">
            <div className="flex items-center gap-4 mb-6 md:mb-8 fade-up">
              <span className="w-10 h-px bg-sky-400"></span>
              <span className="luxe-label">Est. 2022 · Valencia City</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.88] text-white fade-up delay-1">
              Do not stop.
              <br />
              Hanggat di ka pa <span className="text-gradient-blue">masarap.</span>
            </h1>

            <p className="max-w-lg text-white/70 text-base md:text-lg mt-6 md:mt-8 mb-8 md:mb-10 fade-up delay-2 leading-relaxed">
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
            <div className="flex flex-wrap gap-2 mt-10 md:mt-12 fade-up delay-4">
              {facilityTags.map((tag) => (
                <span key={tag} className="tag-chip">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — empty on desktop, keeps layout balance */}
          <div className="hidden lg:block" />
        </div>

        {/* Floating badge (desktop only, sits over image) */}
        <div className="absolute bottom-12 right-12 text-right hidden lg:block z-10">
          <div className="font-condensed text-xs tracking-[0.35em] text-sky-400 mb-2">
            All In One Gym
          </div>
          <div className="font-display text-3xl text-white">
            FOR ALL YOUR GOALS
          </div>
        </div>

        {/* Top stat bar */}
        <div className="relative lg:absolute lg:top-24 lg:left-0 lg:right-0 z-10 border-y border-white/10 bg-black/50 backdrop-blur-sm mt-8 lg:mt-0">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-3 lg:py-4 flex flex-wrap gap-x-4 md:gap-x-10 gap-y-2 justify-center lg:justify-start">
            <span className="font-condensed text-[0.65rem] md:text-xs tracking-[0.25em] md:tracking-[0.3em] text-white/60 uppercase">
              16K+ Facebook Family
            </span>
            <span className="hidden md:inline text-sky-400">•</span>
            <span className="font-condensed text-[0.65rem] md:text-xs tracking-[0.25em] md:tracking-[0.3em] text-white/60 uppercase">
              Open Mon–Sat 6AM–10PM
            </span>
            <span className="hidden md:inline text-sky-400">•</span>
            <span className="font-condensed text-[0.65rem] md:text-xs tracking-[0.25em] md:tracking-[0.3em] text-white/60 uppercase">
              Quillo Building, Valencia City
            </span>
          </div>
        </div>
      </section>

      {/* MARQUEE — Bold blue */}
      <section className="bg-blue-700 py-5 md:py-6 overflow-hidden">
        <div className="flex items-center justify-center gap-4 md:gap-8 text-white font-display text-sm sm:text-base md:text-2xl tracking-[0.15em] px-4">
          <span>STRONG BODY</span>
          <span className="text-white/50">◆</span>
          <span>STRONG MIND</span>
          <span className="text-white/50 hidden sm:inline">◆</span>
          <span className="text-white/80 hidden sm:inline">STRONGER YOU</span>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 md:py-32 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="luxe-label mb-4">Built for the way you train</div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl text-white leading-[0.9]">
              More Than
              <br />
              Room to Train.
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
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
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              Everything you need, under one roof. From heavy lifting to
              high-energy boxing, mindful Pilates to full-on HIIT — FitLife is
              built for every body, every goal, every level.
            </p>
          </div>
        </div>
      </section>

      {/* WE OFFER */}
      <section className="py-20 md:py-32 px-6 lg:px-16 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <div className="luxe-label mb-4">We Offer</div>
              <h2 className="font-display text-4xl sm:text-5xl md:text-7xl text-white leading-[0.9]">
                World-Class
                <br />
                Programs.
              </h2>
            </div>
            <p className="text-white/60 max-w-md text-base">
              Ten distinct programs — built to meet every goal, every schedule,
              every fitness level.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-white/10">
            {offers.map((offer, i) => (
              <div
                key={i}
                className="group bg-black p-5 sm:p-6 md:p-8 hover:bg-blue-600/5 transition-colors duration-500 relative"
              >
                <div className="font-condensed text-[0.65rem] md:text-xs tracking-[0.25em] md:tracking-[0.3em] text-sky-400 mb-4 md:mb-6">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-display text-lg sm:text-xl md:text-2xl text-white mb-2 group-hover:text-sky-400 transition-colors leading-tight">
                  {offer.title}
                </h3>
                <p className="font-condensed text-[0.65rem] md:text-sm tracking-wider text-white/40 uppercase">
                  {offer.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 md:py-32 px-6 lg:px-16 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="luxe-label mb-4">By the numbers</div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl text-white leading-[0.9]">
              One Gym.
              <br />
              One Standard.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-16">
            {[
              { num: '16K+', label: 'Facebook Family' },
              { num: '4K+', label: 'Community Members' },
              { num: '10', label: 'Programs' },
              { num: '2022', label: 'Established' },
            ].map((s, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="font-display text-5xl sm:text-6xl md:text-8xl text-white leading-none">
                  {s.num}
                </div>
                <div className="luxe-label mt-3 md:mt-4 text-[0.65rem] md:text-sm">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY CHOICE */}
      <section className="py-20 md:py-32 px-6 lg:px-16 bg-gradient-to-br from-blue-700 to-blue-900">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="luxe-label !text-white/80 mb-6">Community Choice</div>
          <h2 className="font-display text-4xl sm:text-6xl md:text-8xl text-white leading-[0.9] mb-6 md:mb-8">
            Valencia&apos;s
            <br />
            Home Gym.
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-base md:text-lg">
            From first-time lifters to competitive athletes — every body finds
            their place at FitLife.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 md:py-32 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12 md:mb-16">
            <div className="luxe-label mb-4">Inside the gym</div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl text-white leading-[0.9]">
              The Gallery.
            </h2>
          </div>
          <Gallery />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-32 px-6 lg:px-16 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12 md:mb-16">
            <div className="luxe-label mb-4">Social proof</div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl text-white leading-[0.9]">
              What Members
              <br />
              Say.
            </h2>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* FOLLOW THE COMMUNITY */}
      <FollowCommunity />

      {/* MAP */}
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

      {/* FINAL CTA */}
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
    </div>
  );
}