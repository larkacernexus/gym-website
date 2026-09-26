const testimonials = [
  { name: 'Maria Santos', role: 'Member since 2023', rating: 5, text: 'FitLife changed my life. The coaches are so approachable and the community feels like family. I started as a total beginner and now I look forward to every session.' },
  { name: 'John Dela Cruz', role: 'Member since 2022', rating: 5, text: 'Best gym in Valencia, hands down. Clean facilities, great equipment, and the free WiFi is a nice bonus. Worth every peso.' },
  { name: 'Angela Reyes', role: 'Pilates Regular', rating: 5, text: 'The Asian Mat Pilates class is amazing. I have improved my posture and flexibility so much. Highly recommend.' },
  { name: 'Mark Villanueva', role: 'Boxing Member', rating: 5, text: 'Be stronger than your excuses — that motto hits different once you start training here. The everyday coach is always ready to help.' },
  { name: 'Sofia Lim', role: 'Zumba Regular', rating: 4, text: 'Very affordable and the location at Q Square is super accessible. Parking can be tricky during peak hours but the gym itself is top tier.' },
  { name: 'Carlo Mendoza', role: 'Weight Training', rating: 5, text: 'Solid free weights, good atmosphere, real community. If you are looking for a no-BS gym in Valencia City, this is it.' },
];

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex gap-1 text-sky-400 mb-4">
    {[...Array(5)].map((_, i) => (
      <span key={i} className="text-sm">{i < rating ? '★' : '☆'}</span>
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
      {testimonials.map((t, i) => (
        <div key={i} className="bg-black p-10 hover:bg-blue-600/5 transition-colors duration-500">
          <Stars rating={t.rating} />
          <p className="text-white/80 leading-relaxed mb-6">"{t.text}"</p>
          <div className="pt-6 border-t border-white/10">
            <div className="font-display text-white tracking-wide">{t.name}</div>
            <div className="font-condensed text-[0.7rem] tracking-[0.3em] uppercase text-sky-400 font-semibold mt-1">
              {t.role}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}