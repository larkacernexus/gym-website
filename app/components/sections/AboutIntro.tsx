const tags = [
  'Free Weights Area',
  'Boxing Ring',
  'Pilates Studio',
  'Cardio Zone',
  'Free WiFi',
  'Wide Parking',
];

export default function AboutIntro() {
  return (
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
            {tags.map((t) => (
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
  );
}