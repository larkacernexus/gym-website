export default function MapEmbed() {
  return (
    <div className="border border-white/10">
      <iframe
        src="https://www.google.com/maps?q=Q+Square+Building+Barok+Valencia+City+Bukidnon&output=embed"
        width="100%"
        height="500"
        style={{ border: 0, filter: 'grayscale(0.6) contrast(1.1)' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="FitLife Fitness Gym Location"
        className="w-full"
      />
      <div className="bg-black p-8 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/10">
        <div>
          <div className="luxe-label mb-2">The Gym</div>
          <div className="font-display text-2xl mb-1 tracking-wide">
            FITLIFE FITNESS GYM
          </div>
          <div className="text-white/60 text-sm">
            Q Square Building, Barok, Valencia City, Philippines 8709
          </div>
        </div>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Q+Square+Building+Barok+Valencia+City+Bukidnon"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary !py-3 !px-6 !text-xs whitespace-nowrap"
        >
          Open in Maps
        </a>
      </div>
    </div>
  );
}