import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      {/* Big motto */}
      <div className="border-b border-white/10 py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-6xl md:text-8xl lg:text-9xl text-white leading-[0.9]">
            TRAIN FOR IT.
          </h2>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          <div className="col-span-2 md:col-span-1">
            <div className="font-display text-2xl mb-2">FITLIFE</div>
            <div className="font-condensed text-xs tracking-[0.35em] text-sky-400 font-semibold mb-6">
              FITNESS GYM
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Your Fitness. Your Community. Your Transformation.
            </p>
          </div>

          <div>
            <h3 className="luxe-label mb-6">Explore</h3>
            <ul className="space-y-3">
              {[
                { href: '/about', label: 'About' },
                { href: '/classes', label: 'Programs' },
                { href: '/trainers', label: 'Coaches' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/pricing', label: 'Rates' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-condensed text-sm tracking-[0.15em] uppercase text-white/60 hover:text-sky-400 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="luxe-label mb-6">Visit</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>Q Square Building</li>
              <li>Barok, Valencia City</li>
              <li>Philippines 8709</li>
              <li className="pt-2">
                <a
                  href="tel:09954630320"
                  className="font-condensed tracking-[0.15em] hover:text-sky-400 transition-colors"
                >
                  0995 463 0320
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="luxe-label mb-6">Hours</h3>
            <ul className="space-y-2 text-sm text-white/60 font-condensed tracking-wider">
              <li className="flex justify-between">
                <span>MON–SAT</span>
                <span>6AM – 10PM</span>
              </li>
              <li className="flex justify-between text-red-400">
                <span>SUNDAY</span>
                <span>CLOSED</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-condensed text-xs tracking-[0.3em] uppercase text-white/40">
            © 2024 FitLife Fitness Gym
          </p>
          <p className="font-condensed text-xs tracking-[0.3em] uppercase text-white/40">
            Be Stronger Than Your Excuses
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;