import Coaches from '@/app/components/Coaches';

export default function Trainers() {
  const values = [
    { title: 'Form First', desc: 'Learn safe, effective technique from day one' },
    { title: 'Guidance', desc: 'Personalized tips tailored to your goals' },
    { title: 'Motivation', desc: 'Push past your limits with a coach beside you' },
    { title: 'No Judgement', desc: 'Every level welcome, every effort respected' },
  ];

  return (
    <div className="bg-black pt-24 md:pt-32">
      {/* ============ HERO ============ */}
      <section className="py-12 md:py-24 px-5 sm:px-6 text-center">
        <div className="luxe-label mb-4 md:mb-6 fade-up">
          Everyday Coach · Available Daily
        </div>
        <h1 className="font-display text-4xl sm:text-6xl md:text-8xl mb-4 md:mb-8 fade-up delay-1">
          OUR <span className="text-gradient-blue">COACHES</span>
        </h1>
        <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-blue-400 max-w-2xl mx-auto fade-up delay-2">
          &ldquo;Train Hard, Train Smart.&rdquo;
        </p>
        <div className="divider-blue"></div>
      </section>

      {/* ============ COACHES CAROUSEL ============ */}
      <Coaches />

      {/* ============ PILLARS ============ */}
      <section className="py-16 md:py-24 px-5 sm:px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <div className="luxe-label mb-3 md:mb-4">Our Approach</div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl mb-4 md:mb-6">
              THE FOUR <span className="text-gradient-blue">PILLARS</span>
            </h2>
            <div className="divider-blue"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-blue-600/20">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-black p-6 sm:p-8 md:p-10 hover:bg-blue-600/5 transition-colors"
              >
                <div className="font-display text-blue-500 text-4xl md:text-5xl mb-4 md:mb-6">
                  0{i + 1}
                </div>
                <h3 className="font-display text-xl md:text-2xl mb-2 md:mb-3 tracking-wide">
                  {v.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ EVERYDAY COACH ============ */}
      <section className="py-16 md:py-24 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <div className="luxe-label mb-3 md:mb-4">Always Present</div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl mb-4 md:mb-6">
              AN EVERYDAY <span className="text-gradient-blue">COACH</span>
            </h2>
            <div className="divider-blue"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative aspect-[4/5] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8">
                <div className="font-display text-5xl md:text-7xl text-blue-500">
                  ALWAYS
                </div>
                <div className="luxe-label mt-2">On The Floor</div>
              </div>
            </div>
            <div>
              <div className="luxe-label mb-3 md:mb-4">Why It Matters</div>
              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl mb-6 md:mb-8">
                SOMEONE IN{' '}
                <span className="text-gradient-blue">YOUR CORNER</span>
              </h3>
              <div className="space-y-4 md:space-y-5 text-white/70 leading-relaxed text-sm md:text-base">
                <p>
                  At FitLife, our coaches are on the floor every day of
                  operation to help you with form, programming, and motivation.
                </p>
                <p>
                  No matter your experience level — whether you are touching a
                  barbell for the first time or chasing a new PR — you will
                  always have someone beside you.
                </p>
                <p>
                  Free consultation on your first visit. No pressure, no
                  judgement. Just coaching.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ BOTTOM CTA ============ */}
      <section className="py-16 md:py-24 px-5 sm:px-6 bg-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <div className="luxe-label !text-white/70 mb-3 md:mb-4">
            Ready to Train?
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-7xl text-white mb-6 md:mb-8">
            BOOK YOUR FREE CONSULTATION
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 md:mb-10 text-sm md:text-base">
            Visit us at Quillo Building or call to schedule your first session
            with a FitLife coach.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-stretch sm:items-center">
            <a
              href="tel:09954630320"
              className="inline-block bg-white text-blue-700 font-condensed font-bold tracking-[0.15em] uppercase text-sm px-8 md:px-10 py-4 md:py-5 hover:bg-neutral-100 transition-all text-center"
            >
              Call 0995 463 0320
            </a>
            <a
              href="https://www.facebook.com/fitlifegymph"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white text-white font-condensed font-bold tracking-[0.15em] uppercase text-sm px-8 md:px-10 py-4 md:py-5 hover:bg-white hover:text-blue-700 transition-all text-center"
            >
              Message on Facebook
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}