import { PRICING, peso } from '@/app/lib/pricing';

export default function Pricing() {
  const plans = [
    {
      name: PRICING.dayPass.label,
      tag: PRICING.dayPass.tag,
      price: peso(PRICING.dayPass.price),
      priceNote: 'per day',
      features: [
        'Full gym access for 1 day',
        'All equipment available',
        'Coach assistance',
      ],
      featured: false,
    },
    {
      name: 'Monthly Membership',
      tag: 'Best Value',
      price: peso(PRICING.member.monthly),
      priceNote: 'per month',
      features: [
        'Unlimited gym access',
        'Free WiFi',
        'Everyday coach assistance',
        'All programs included',
        `Quarterly option: ${peso(PRICING.member.quarterly)}`,
        `Annual option: ${peso(PRICING.member.annual)}`,
      ],
      featured: true,
    },
    {
      name: PRICING.student.label,
      tag: 'With Valid ID',
      price: peso(PRICING.student.monthly),
      priceNote: 'per month',
      features: [
        'Special rates for students',
        `Bulk: ${peso(PRICING.student.bulk)} for ${PRICING.student.bulkMonths} months`,
        'Same full access',
      ],
      featured: false,
    },
  ];

  return (
    <div className="bg-black pt-24 md:pt-32">
      {/* ============ HERO ============ */}
      <section className="py-12 md:py-24 px-5 sm:px-6 text-center">
        <div className="luxe-label mb-4 md:mb-6 fade-up">Membership</div>
        <h1 className="font-display text-4xl sm:text-6xl md:text-8xl mb-4 md:mb-8 fade-up delay-1">
          RATES & <span className="text-gradient-blue">PLANS</span>
        </h1>
        <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg fade-up delay-2">
          Affordable rates. No hidden fees. Just real support for your fitness
          journey.
        </p>
        <div className="divider-blue"></div>
      </section>

      <section className="pb-20 md:py-20 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* ============ PLANS GRID ============ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-blue-600/20">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`p-6 sm:p-8 md:p-12 ${
                  plan.featured
                    ? 'bg-gradient-to-br from-blue-700 to-blue-900 md:-translate-y-3 md:shadow-[0_0_60px_-15px_rgba(37,99,235,0.6)] z-10 relative'
                    : 'bg-black'
                }`}
              >
                <div
                  className={`luxe-label mb-4 md:mb-6 ${
                    plan.featured ? '!text-white/80' : ''
                  }`}
                >
                  {plan.tag}
                </div>

                <h3 className="font-display text-2xl sm:text-3xl md:text-3xl mb-2 md:mb-3 tracking-wide">
                  {plan.name}
                </h3>

                <div className="mb-6 md:mb-8">
                  <div className="font-display text-4xl sm:text-5xl md:text-5xl text-white leading-none">
                    {plan.price}
                  </div>
                  <div className="font-condensed text-[0.65rem] md:text-[0.7rem] tracking-[0.3em] uppercase text-sky-400 font-semibold mt-1 md:mt-2">
                    {plan.priceNote}
                  </div>
                </div>

                <ul className="space-y-2.5 md:space-y-3 mb-8 md:mb-10">
                  {plan.features.map((f, j) => (
                    <li
                      key={j}
                      className={`flex items-start gap-3 text-sm ${
                        plan.featured ? 'text-white/90' : 'text-white/70'
                      }`}
                    >
                      <span
                        className={`mt-1 shrink-0 ${
                          plan.featured ? 'text-white/90' : 'text-blue-400'
                        }`}
                      >
                        ▸
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="tel:09954630320"
                  className={
                    plan.featured
                      ? 'btn-primary w-full text-center'
                      : 'btn-outline w-full text-center'
                  }
                >
                  Inquire
                </a>
              </div>
            ))}
          </div>

          {/* ============ COMPARE ROW ============ */}
          <div className="mt-12 md:mt-16 bg-neutral-950 border border-white/10 p-6 md:p-10">
            <div className="luxe-label mb-5 md:mb-6 text-center">Compare</div>
            <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
              <div>
                <div className="font-display text-xl sm:text-2xl text-white mb-1">
                  {peso(PRICING.walkIn.daily)}
                </div>
                <div className="font-condensed text-[0.55rem] md:text-[0.65rem] tracking-[0.25em] md:tracking-[0.3em] uppercase text-sky-400 font-semibold">
                  Walk-in Daily
                </div>
              </div>
              <div>
                <div className="font-display text-xl sm:text-2xl text-white mb-1">
                  {peso(PRICING.walkIn.monthly)}
                </div>
                <div className="font-condensed text-[0.55rem] md:text-[0.65rem] tracking-[0.25em] md:tracking-[0.3em] uppercase text-sky-400 font-semibold">
                  Walk-in Monthly
                </div>
              </div>
              <div>
                <div className="font-display text-xl sm:text-2xl text-sky-400 mb-1">
                  {peso(PRICING.member.monthly)}
                </div>
                <div className="font-condensed text-[0.55rem] md:text-[0.65rem] tracking-[0.25em] md:tracking-[0.3em] uppercase text-sky-400 font-semibold">
                  Member Monthly
                </div>
              </div>
            </div>
          </div>

          {/* ============ PREMIUM SECTION ============ */}
          {PRICING.premium.available && (
            <div className="mt-12 md:mt-16 bg-gradient-to-br from-blue-700 to-blue-900 p-6 sm:p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                <div>
                  <div className="luxe-label !text-white/80 mb-3 md:mb-4">
                    Upgrade
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-3 md:mb-4">
                    {PRICING.premium.label}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-4 md:mb-6">
                    <span className="font-display text-3xl sm:text-4xl md:text-5xl text-white">
                      {peso(PRICING.premium.monthly)}
                    </span>
                    <span className="font-condensed text-[0.6rem] md:text-xs tracking-[0.3em] uppercase text-white/70 font-semibold">
                      /month
                    </span>
                  </div>
                </div>
                <ul className="space-y-2.5 md:space-y-3">
                  {PRICING.premium.includes.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-white/90"
                    >
                      <span className="text-white/90 mt-1 shrink-0">▸</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <p className="text-center text-white/50 mt-8 md:mt-10 text-xs md:text-sm">
            Exact rates may vary. Call{' '}
            <a href="tel:09954630320" className="text-blue-400 font-semibold">
              0995 463 0320
            </a>{' '}
            for current pricing.
          </p>

          {/* ============ FAQ ============ */}
          <div className="mt-20 md:mt-32 max-w-3xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <div className="luxe-label mb-3 md:mb-4">Common Questions</div>
              <h2 className="font-display text-3xl sm:text-5xl mb-4 md:mb-6 tracking-wide">
                FAQ
              </h2>
              <div className="divider-blue"></div>
            </div>
            <div className="divide-y divide-blue-600/20">
              {[
                {
                  q: 'What are your opening hours?',
                  a: 'We are open Monday to Saturday, 6AM to 10PM. We are closed on Sundays.',
                },
                {
                  q: 'Do I need experience to join?',
                  a: 'Not at all. FitLife is an opportunity for everybody. Our everyday coach is available to assist your needs.',
                },
                {
                  q: 'What programs do you offer?',
                  a: 'Weight Training, Strength Training, Boxing, Muaythai, Step Dance, Zumba, Asian Mat Pilates, HIIT, Cardio & Fat Loss, and Beginner-Friendly Coaching.',
                },
                {
                  q: 'How do I enroll?',
                  a: 'Visit us at Quillo Building, Purok 10, Guinoyuran Rd, Valencia City, or call 0995 463 0320. Walk-ins welcome.',
                },
              ].map((faq, i) => (
                <div key={i} className="py-5 md:py-8">
                  <h3 className="font-display text-lg md:text-xl mb-2 md:mb-3 tracking-wide text-white">
                    {faq.q}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-sm md:text-base">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}