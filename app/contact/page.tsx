'use client';

import { useState } from 'react';
import MapEmbed from '@/app/components/MapEmbed';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-black pt-24 md:pt-32">
      {/* ============ HERO ============ */}
      <section className="py-12 md:py-24 px-5 sm:px-6 text-center">
        <div className="luxe-label mb-4 md:mb-6 fade-up">Get In Touch</div>
        <h1 className="font-display text-4xl sm:text-6xl md:text-8xl mb-4 md:mb-8 fade-up delay-1">
          LET&apos;S <span className="text-gradient-blue">TALK</span>
        </h1>
        <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg fade-up delay-2">
          Visit us, call us, or message us on Facebook. We&apos;d love to help
          you start your journey.
        </p>
        <div className="divider-blue"></div>
      </section>

      <section className="pb-20 md:py-20 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">

          {/* ============ FORM — shown FIRST on mobile, RIGHT on desktop ============ */}
          <div className="order-1 lg:order-2">
            <div className="luxe-label mb-6 md:mb-8">Send a Message</div>
            {submitted ? (
              <div className="border border-blue-600/40 p-8 md:p-12 text-center bg-blue-600/5">
                <div className="font-display text-blue-500 text-5xl md:text-6xl mb-3 md:mb-4">
                  ✓
                </div>
                <h3 className="font-display text-2xl md:text-3xl mb-2 md:mb-3 tracking-wide">
                  Salamat!
                </h3>
                <p className="text-white/60 text-sm md:text-base">
                  We&apos;ll get back to you shortly. Kitakits!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-8">
                {[
                  { key: 'name', label: 'Name', type: 'text', required: true },
                  { key: 'email', label: 'Email', type: 'email', required: true },
                  { key: 'phone', label: 'Phone', type: 'tel', required: false },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="luxe-label block mb-2 md:mb-3">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      required={field.required}
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) =>
                        setForm({ ...form, [field.key]: e.target.value })
                      }
                      className="w-full bg-transparent border-b-2 border-white/20 py-2.5 md:py-3 text-base text-white focus:border-blue-500 outline-none transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label className="luxe-label block mb-2 md:mb-3">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-white/20 py-2.5 md:py-3 text-base text-white focus:border-blue-500 outline-none transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* ============ INFO — shown SECOND on mobile, LEFT on desktop ============ */}
          <div className="order-2 lg:order-1">
            <div className="luxe-label mb-6 md:mb-8">Find Us</div>
            <div className="space-y-5 md:space-y-8">
              {[
                {
                  label: 'Location',
                  value: 'Quillo Building, Purok 10, Guinoyuran Rd, Valencia City, Bukidnon 8709',
                },
                { label: 'Phone', value: '0995 463 0320', href: 'tel:09954630320' },
                {
                  label: 'Facebook',
                  value: 'facebook.com/fitlifegymph',
                  href: 'https://www.facebook.com/fitlifegymph',
                },
                { label: 'Hours', value: 'Mon–Sat: 6AM – 10PM · Sunday: Closed' },
              ].map((item, i) => (
                <div key={i} className="border-t border-blue-600/20 pt-4 md:pt-6">
                  <div className="luxe-label mb-2">{item.label}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-display text-base sm:text-lg md:text-xl hover:text-blue-400 transition-colors tracking-wide break-words"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-display text-base sm:text-lg md:text-xl leading-snug tracking-wide">
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-3 md:gap-4">
              <a href="tel:09954630320" className="btn-primary text-center">
                Call Now
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
        </div>

        {/* ============ MAP ============ */}
        <div className="max-w-7xl mx-auto mt-20 md:mt-32">
          <div className="text-center mb-10 md:mb-16">
            <div className="luxe-label mb-3 md:mb-4">On The Map</div>
            <h2 className="font-display text-3xl sm:text-5xl mb-4 md:mb-6 tracking-wide">
              FIND THE <span className="text-gradient-blue">GYM</span>
            </h2>
            <div className="divider-blue"></div>
          </div>
          <MapEmbed />
        </div>
      </section>
    </div>
  );
}