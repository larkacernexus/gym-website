export default function Pricing() {
  return (
    <div className="bg-black pt-32">
      <section className="py-24 px-6 text-center">
        <div className="luxe-label mb-6 fade-up">Membership</div>
        <h1 className="font-display text-6xl md:text-8xl mb-8 fade-up delay-1">
          RATES & <span className="text-gradient-blue">PLANS</span>
        </h1>
        <p className="text-white/60 max-w-2xl mx-auto text-lg fade-up delay-2">
          Affordable rates. No hidden fees. Just real support for your fitness
          journey.
        </p>
        <div className="divider-blue"></div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-blue-600/20">
            {[
              {
                name: 'Day Pass',
                tag: 'Walk-in',
                features: ['Full gym access for 1 day', 'All equipment available', 'Coach assistance'],
                featured: false,
              },
              {
                name: 'Monthly Membership',
                tag: 'Best Value',
                features: ['Unlimited gym access', 'Free WiFi', 'Everyday coach assistance', 'All programs included'],
                featured: true,
              },
              {
                name: 'Student / Bulk',
                tag: 'Ask In Person',
                features: ['Special rates for students', 'Discounted bulk packages', 'Same full access'],
                featured: false,
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`p-12 ${
                  plan.featured
                    ? 'bg-gradient-to-br from-blue-700 to-blue-900'
                    : 'bg-black'
                }`}
              >
                <div
                  className={`luxe-label mb-6 ${plan.featured ? '!text-white/80' : ''}`}
                >
                  {plan.tag}
                </div>
                <h3 className="font-display text-3xl mb-8 tracking-wide">
                  {plan.name}
                </h3>
                <ul className="space-y-3 mb-10">
                  {plan.features.map((f, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm text-white/70"
                    >
                      <span className="text-blue-400 mt-1">▸</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:09954630320"
                  className={plan.featured ? 'btn-primary w-full text-center' : 'btn-outline w-full text-center'}
                >
                  Inquire
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-white/50 mt-10 text-sm">
            Exact rates may vary. Call{' '}
            <a href="tel:09954630320" className="text-blue-400 font-semibold">
              0995 463 0320
            </a>{' '}
            for current pricing.
          </p>

          {/* FAQ */}
          <div className="mt-32 max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <div className="luxe-label mb-4">Common Questions</div>
              <h2 className="font-display text-5xl mb-6 tracking-wide">
                FAQ
              </h2>
              <div className="divider-blue"></div>
            </div>
            <div className="divide-y divide-blue-600/20">
              {[
                { q: 'What are your opening hours?', a: 'We are open Monday to Saturday, 6AM to 10PM. We are closed on Sundays.' },
                { q: 'Do I need experience to join?', a: 'Not at all. FitLife is an opportunity for everybody. Our everyday coach is available to assist your needs.' },
                { q: 'What programs do you offer?', a: 'Weight Training, Strength Training, Boxing, Muaythai, Step Dance, Zumba, Asian Mat Pilates, HIIT, Cardio & Fat Loss, and Beginner-Friendly Coaching.' },
                { q: 'How do I enroll?', a: 'Visit us at Q Square Building, Barok, Valencia City, or call 0995 463 0320. Walk-ins welcome.' },
              ].map((faq, i) => (
                <div key={i} className="py-8">
                  <h3 className="font-display text-xl mb-3 tracking-wide text-white">
                    {faq.q}
                  </h3>
                  <p className="text-white/60 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}