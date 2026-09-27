import { notFound } from 'next/navigation';
import Link from 'next/link';

type Coach = {
  name: string;
  role: string;
  image: string;
  heroImage: string;
  bio: string[];
  specialties: string[];
  certifications: string[];
  experience: string;
  schedule: string;
};

const coaches: Record<string, Coach> = {
  'marcus-steel': {
    name: 'Marcus Steel',
    role: 'Strength & Conditioning',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=800&h=1000&fit=crop&crop=faces',
    heroImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1400&q=80',
    bio: [
      'Marcus has spent over a decade coaching strength athletes — from first-time lifters to competitive powerlifters. His approach is built on fundamentals: master the movement, then add load.',
      'He believes strength is not just physical. Every session under his watch is about building confidence, discipline, and a body that performs as good as it looks.',
    ],
    specialties: ['Powerlifting', 'Olympic Lifts', 'Mobility', 'Injury Prevention'],
    certifications: ['NSCA-CSCS', 'USAW Level 2', 'FMS Level 1'],
    experience: '10+ years',
    schedule: 'Mon–Fri · 6AM–2PM',
  },
  'sofia-reyes': {
    name: 'Sofia Reyes',
    role: 'Asian Mat Pilates',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&h=1000&fit=crop&crop=faces',
    heroImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1400&q=80',
    bio: [
      'Sofia discovered Pilates after a back injury ended her dance career. The method rebuilt her — and now she teaches it to help others move without pain.',
      'Her classes blend classical mat work with modern mobility drills. Expect slow, deliberate movements that leave you feeling taller and stronger.',
    ],
    specialties: ['Mat Pilates', 'Core Stability', 'Posture Correction', 'Breathwork'],
    certifications: ['Balanced Body Mat Certified', 'STOTT Pilates', 'Pre/Post Natal Pilates'],
    experience: '8+ years',
    schedule: 'Mon, Wed, Fri · 8AM–12PM',
  },
  'jake-morrison': {
    name: 'Jake Morrison',
    role: 'Boxing & Muaythai',
    image: 'https://images.unsplash.com/photo-1583468982228-19f19164aee2?w=800&h=1000&fit=crop&crop=faces',
    heroImage: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1400&q=80',
    bio: [
      'Jake fought professionally for 7 years before turning to coaching. He brings ring-tested technique to every class — no fluff, just real striking fundamentals.',
      'Whether you want to fight, get fit, or just learn to defend yourself, Jake meets you where you are and pushes you one step further.',
    ],
    specialties: ['Boxing Technique', 'Muaythai Clinch', 'Footwork', 'Conditioning'],
    certifications: ['USA Boxing Coach', 'Muaythai Pro Fighter', 'CPR/AED'],
    experience: '12+ years',
    schedule: 'Tue, Thu, Sat · 4PM–9PM',
  },
  'angela-lim': {
    name: 'Angela Lim',
    role: 'Zumba & Step Dance',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=800&h=1000&fit=crop&crop=faces',
    heroImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1400&q=80',
    bio: [
      'Angela turned her love of dance into a career. Her Zumba and Step Dance classes are famous for being the most fun hour of your week — while still burning serious calories.',
      'She believes fitness should feel like a party you keep coming back to. Expect high energy, great music, and a community that cheers you on.',
    ],
    specialties: ['Zumba', 'Step Aerobics', 'Dance Cardio', 'Group Energy'],
    certifications: ['Zumba Licensed Instructor', 'AFAA Group Fitness', 'Step Aerobics Certified'],
    experience: '6+ years',
    schedule: 'Mon–Fri · 5PM–9PM',
  },
  'carlos-mendez': {
    name: 'Carlos Mendez',
    role: 'HIIT Functional Training',
    image: 'https://images.unsplash.com/photo-1583500178690-f7fd39d8a1a0?w=800&h=1000&fit=crop&crop=faces',
    heroImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1400&q=80',
    bio: [
      'Carlos specializes in short, intense sessions that get real results. His HIIT and functional training classes are built around movements you actually use in life.',
      'He scales every workout so beginners and veterans train side by side. No one gets left behind, no one coasts.',
    ],
    specialties: ['HIIT', 'Kettlebells', 'Functional Movement', 'Fat Loss'],
    certifications: ['NASM-CPT', 'SFG Kettlebell Level 1', 'TRX Certified'],
    experience: '7+ years',
    schedule: 'Mon, Wed, Fri · 6AM–10AM',
  },
  'nina-torres': {
    name: 'Nina Torres',
    role: 'Beginner Fundamentals',
    image: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?w=800&h=1000&fit=crop&crop=faces',
    heroImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1400&q=80',
    bio: [
      'Nina is the coach you wish you had on day one. She specializes in teaching absolute beginners how to lift, move, and feel confident in the gym.',
      'No judgment. No complicated jargon. Just clear instruction and a lot of patience. If you have ever felt lost in a gym, Nina is your person.',
    ],
    specialties: ['Beginner Strength', 'Form Coaching', 'Gym Confidence', 'Nutrition Basics'],
    certifications: ['ACE-CPT', 'Precision Nutrition Level 1', 'First Aid/CPR'],
    experience: '5+ years',
    schedule: 'Tue, Thu, Sat · 7AM–12PM',
  },
  'david-park': {
    name: 'David Park',
    role: 'Cardio & Fat Loss',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=1000&fit=crop&crop=faces',
    heroImage: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1400&q=80',
    bio: [
      'David lost 60 pounds through cardio training and completely rebuilt his life. Now he helps others do the same — with structure, patience, and science.',
      'His programs combine heart-rate zone training, smart progression, and habit coaching. He does not sell shortcuts; he builds sustainable change.',
    ],
    specialties: ['Cardio Programming', 'Fat Loss', 'Endurance', 'Habit Coaching'],
    certifications: ['NASM-CPT', 'ACE Weight Management', 'Heart Rate Training Certified'],
    experience: '9+ years',
    schedule: 'Mon–Sat · 6AM–11AM',
  },
};

export async function generateStaticParams() {
  return Object.keys(coaches).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const coach = coaches[slug];
  if (!coach) return { title: 'Coach Not Found' };
  return {
    title: `${coach.name} — ${coach.role} | FitLife Gym`,
    description: coach.bio[0].slice(0, 155),
  };
}

export default async function CoachProfile({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const coach = coaches[slug];

  if (!coach) notFound();

  const related = Object.entries(coaches)
    .filter(([s]) => s !== slug)
    .slice(0, 3)
    .map(([s, c]) => ({ slug: s, ...c }));

  const firstName = coach.name.split(' ')[0];
  const lastName = coach.name.split(' ')[1];

  return (
    <div className="bg-black pt-24 md:pt-32">
      {/* ============ HERO ============ */}
      <section className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('${coach.heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-6 py-12 md:py-20">
          {/* Breadcrumb */}
          <div className="mb-6 md:mb-8 fade-up">
            <Link
              href="/trainers"
              className="font-condensed text-[0.65rem] md:text-xs tracking-[0.3em] uppercase text-sky-400 hover:text-white transition-colors"
            >
              ← All Coaches
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Photo */}
            <div className="lg:col-span-5 fade-up max-w-xs sm:max-w-sm lg:max-w-none mx-auto lg:mx-0">
              <div className="relative aspect-[3/4] overflow-hidden border border-blue-600/30">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-7 fade-up delay-1 text-center lg:text-left">
              <div className="luxe-label mb-3 md:mb-4">{coach.role}</div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-white mb-5 md:mb-6">
                {firstName}
                <br />
                <span className="text-gradient-blue">{lastName}</span>
              </h1>

              <div className="flex flex-wrap gap-5 md:gap-6 mb-6 md:mb-8 justify-center lg:justify-start">
                <div>
                  <div className="font-condensed text-[0.6rem] md:text-[0.65rem] tracking-[0.3em] uppercase text-sky-400 mb-1">
                    Experience
                  </div>
                  <div className="font-display text-lg md:text-2xl text-white">
                    {coach.experience}
                  </div>
                </div>
                <div className="w-px bg-white/20" />
                <div>
                  <div className="font-condensed text-[0.6rem] md:text-[0.65rem] tracking-[0.3em] uppercase text-sky-400 mb-1">
                    Schedule
                  </div>
                  <div className="font-display text-lg md:text-2xl text-white">
                    {coach.schedule}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                <a
                  href="tel:09954630320"
                  className="btn-primary text-center"
                >
                  Book a Session
                </a>
                <Link href="/classes" className="btn-outline text-center">
                  See Programs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ BIO ============ */}
      <section className="py-12 md:py-20 px-5 sm:px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="luxe-label mb-3 md:mb-4">About</div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-6 md:mb-8">
            THE <span className="text-gradient-blue">STORY</span>
          </h2>
          <div className="space-y-4 md:space-y-5 text-white/70 text-base md:text-lg leading-relaxed">
            {coach.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SPECIALTIES + CERTS ============ */}
      <section className="py-12 md:py-20 px-5 sm:px-6 bg-neutral-950 border-t border-white/5">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <div className="luxe-label mb-3 md:mb-4">What They Coach</div>
            <h3 className="font-display text-2xl md:text-3xl text-white mb-4 md:mb-6 tracking-wide">
              SPECIALTIES
            </h3>
            <div className="flex flex-wrap gap-2">
              {coach.specialties.map((s) => (
                <span key={s} className="tag-chip">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="luxe-label mb-3 md:mb-4">Credentials</div>
            <h3 className="font-display text-2xl md:text-3xl text-white mb-4 md:mb-6 tracking-wide">
              CERTIFICATIONS
            </h3>
            <ul className="space-y-2.5 md:space-y-3">
              {coach.certifications.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-3 text-white/70 text-sm md:text-base"
                >
                  <span className="text-blue-400 mt-1 shrink-0">▸</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-14 md:py-24 px-5 sm:px-6 bg-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <div className="luxe-label !text-white/70 mb-3 md:mb-4">
            Train With {firstName}
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-7xl text-white mb-6 md:mb-8">
            BOOK A SESSION
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 md:mb-10 text-sm md:text-base">
            First consultation is always free. Call or message us to schedule
            your session with {coach.name}.
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

      {/* ============ MORE COACHES ============ */}
      <section className="py-14 md:py-24 px-5 sm:px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <div className="luxe-label mb-3 md:mb-4">Keep Exploring</div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-4 md:mb-6">
              MORE <span className="text-gradient-blue">COACHES</span>
            </h2>
            <div className="divider-blue"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/trainers/${r.slug}`}
                className="group bg-neutral-950 border border-white/5 hover:border-blue-600/40 transition-colors"
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={r.image}
                    alt={r.name}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
                <div className="px-5 md:px-6 py-4 md:py-5 border-t-2 border-blue-600">
                  <div className="font-display text-lg md:text-xl text-white mb-1.5 md:mb-2">
                    {r.name}
                  </div>
                  <div className="font-condensed text-[0.65rem] md:text-[0.7rem] tracking-[0.15em] uppercase text-sky-400 font-semibold">
                    {r.role}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10 md:mt-12">
            <Link href="/trainers" className="btn-outline">
              View All Coaches →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}