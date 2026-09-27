// ============================================================
// FitLife AI Assistant — Knowledge Base & Config
// ============================================================

import { PRICING, peso } from './pricing';

export const GYM_INFO = {
  name: 'FitLife Fitness Gym',
  tagline: 'All In One Gym For All Your Goals',
  established: '2022',
  address: 'Quillo Building, Purok 10, Guinoyuran Rd, Valencia City, Bukidnon 8709',
  phone: '0995 463 0320',
  phoneRaw: '09954630320',
  facebook: 'https://www.facebook.com/fitlifegymph',
  facebookHandle: 'facebook.com/fitlifegymph',
  instagram: 'https://www.instagram.com/',
  googleMaps: 'https://maps.app.goo.gl/9gwtP4b6sLFVr6sG8',
  hours: {
    weekday: 'Monday to Saturday, 6:00 AM – 10:00 PM',
    sunday: 'Closed on Sundays',
  },
  followers: '16K+',
  members: '4K+',
  programs: 10,
  distanceFromCity: '≈10 minutes',
} as const;

// ============================================================
// EQUIPMENT
// ============================================================
export const EQUIPMENT = {
  strength: [
    'Barbells & weight plates',
    'Dumbbells (5–50 kg)',
    'Kettlebells (8–32 kg)',
    'Squat racks (2)',
    'Bench press stations (2)',
    'Cable crossover machine',
    'Lat pulldown / row machine',
    'Leg press',
    'Smith machine',
  ],
  cardio: [
    'Treadmills (4)',
    'Stationary bikes (3)',
    'Rowing machine (1)',
    'Elliptical (1)',
  ],
  boxing: [
    'Boxing ring (1)',
    'Heavy bags (4)',
    'Speed bags (2)',
    'Focus pads & gloves',
  ],
  pilates: [
    'Pilates mats',
    'Resistance bands',
    'Foam rollers',
    'Pilates rings',
  ],
  functional: [
    'Battle ropes',
    'Plyo boxes',
    'Medicine balls',
    'Slam balls',
    'Agility ladders',
  ],
} as const;

// ============================================================
// COACHES
// ============================================================
export const COACHES = [
  {
    name: 'Marcus Steel',
    role: 'Strength & Conditioning',
    specialties: ['Powerlifting', 'Olympic lifts', 'Mobility'],
    schedule: 'Mon–Fri · 6AM–2PM',
  },
  {
    name: 'Sofia Reyes',
    role: 'Asian Mat Pilates',
    specialties: ['Mat Pilates', 'Core', 'Posture', 'Flexibility'],
    schedule: 'Mon, Wed, Fri · 8AM–12PM',
  },
  {
    name: 'Jake Morrison',
    role: 'Boxing & Muaythai',
    specialties: ['Boxing technique', 'Muaythai clinch', 'Conditioning'],
    schedule: 'Tue, Thu, Sat · 4PM–9PM',
  },
  {
    name: 'Angela Lim',
    role: 'Zumba & Step Dance',
    specialties: ['Zumba', 'Step aerobics', 'Dance cardio'],
    schedule: 'Mon–Fri · 5PM–9PM',
  },
  {
    name: 'Carlos Mendez',
    role: 'HIIT Functional Training',
    specialties: ['HIIT', 'Kettlebells', 'Functional movement'],
    schedule: 'Mon, Wed, Fri · 6AM–10AM',
  },
  {
    name: 'Nina Torres',
    role: 'Beginner Fundamentals',
    specialties: ['Beginner strength', 'Form coaching', 'Gym confidence'],
    schedule: 'Tue, Thu, Sat · 7AM–12PM',
  },
  {
    name: 'David Park',
    role: 'Cardio & Fat Loss',
    specialties: ['Cardio programming', 'Fat loss', 'Endurance'],
    schedule: 'Mon–Sat · 6AM–11AM',
  },
] as const;

export type KBEntry = {
  keywords: string[];
  answer: string;
  category?: string;
};

export const KNOWLEDGE_BASE: KBEntry[] = [
  // ============================================================
  // META — FAQ, HELP
  // ============================================================
  {
    category: 'faq',
    keywords: ['faq', 'faqs', 'frequently asked', 'common questions', 'questions', 'q'],
    answer: `Here are the questions I get most often:

💰 How much is membership?
⏰ What are your hours?
📍 Where are you located?
🏋️ What equipment do you have?
👤 Who are the coaches?
🎫 Can I try for free?

Just type any of those and I'll answer! Or call ${GYM_INFO.phone}.`,
  },
  {
    category: 'help-confused',
    keywords: ['i dont understand', "i don't understand", 'confused', 'huh', 'help me', 'what can you do'],
    answer: `No problem! 😊 Here's what I can help with:

💰 Pricing
⏰ Hours
📍 Location & distance
🏋️ Equipment
👤 Coaches
📋 Programs
🎫 Free trial

Just type one of those, or call us at ${GYM_INFO.phone}.`,
  },

  // ============================================================
  // PRICING
  // ============================================================
  {
    category: 'pricing-day-pass',
    keywords: ['day pass', 'daypass', 'one day', '1 day', 'walk in fee', 'walk-in fee', 'dp'],
    answer: `Our Day Pass is ${peso(PRICING.dayPass.price)} — full gym access for one day, all equipment available, coach assistance included.`,
  },
  {
    category: 'pricing-premium',
    keywords: ['premium', 'vip', 'premium membership', 'premium member', 'prem'],
    answer: PRICING.premium.available
      ? `Premium Membership — ${peso(PRICING.premium.monthly)}/month

Includes:
${PRICING.premium.includes.map((i) => `• ${i}`).join('\n')}

Call ${GYM_INFO.phone} to upgrade.`
      : `We don't have a separate Premium tier — our standard membership already includes everyday coach assistance. Call ${GYM_INFO.phone} for details.`,
  },
  {
    category: 'pricing-student',
    keywords: ['student', 'student rate', 'student price', 'discount', 'bulk', 'promo', 'promos', 'estudyante', 'stud', 'stu'],
    answer: `Student rate — ${peso(PRICING.student.monthly)}/month (valid student ID required)
Bulk package — ${peso(PRICING.student.bulk)} for ${PRICING.student.bulkMonths} months prepaid

Call ${GYM_INFO.phone} to inquire.`,
  },
  {
    category: 'pricing-compare',
    keywords: ['member vs non', 'member and non', 'non member', 'non-member', 'nonmember', 'difference between'],
    answer: `Walk-in (non-member) Monthly — ${peso(PRICING.walkIn.monthly)}
Member Monthly — ${peso(PRICING.member.monthly)}
Member Quarterly — ${peso(PRICING.member.quarterly)}
Member Annual — ${peso(PRICING.member.annual)}
Day Pass — ${peso(PRICING.dayPass.price)}

Call ${GYM_INFO.phone} to enroll.`,
  },
  {
    category: 'pricing-member',
    keywords: ['member rate', 'member price', 'member fee', 'member monthly', 'mem'],
    answer: `Member Monthly — ${peso(PRICING.member.monthly)}
Member Quarterly — ${peso(PRICING.member.quarterly)}
Member Annual — ${peso(PRICING.member.annual)}

Call ${GYM_INFO.phone} to enroll.`,
  },
  {
    category: 'pricing-walk-in',
    keywords: ['walk in', 'walk-in', 'not a member', 'walkin'],
    answer: `Walk-in (non-member) Daily — ${peso(PRICING.walkIn.daily)}
Walk-in Monthly — ${peso(PRICING.walkIn.monthly)}
Day Pass — ${peso(PRICING.dayPass.price)}

Call ${GYM_INFO.phone} for details.`,
  },
  {
    category: 'pricing-monthly',
    keywords: ['monthly fee', 'monthly price', 'monthly rate', 'membership fee', 'membership price', 'per month', 'monthly', 'mo'],
    answer: `Our full rate list:

Day Pass — ${peso(PRICING.dayPass.price)}
Walk-in Monthly — ${peso(PRICING.walkIn.monthly)}
Member Monthly — ${peso(PRICING.member.monthly)}
Member Quarterly — ${peso(PRICING.member.quarterly)}
Member Annual — ${peso(PRICING.member.annual)}
Student Monthly — ${peso(PRICING.student.monthly)}${PRICING.premium.available ? `
Premium Monthly — ${peso(PRICING.premium.monthly)}` : ''}

Call ${GYM_INFO.phone} to enroll.`,
  },
  {
    category: 'pricing-general',
    keywords: ['pricing', 'price', 'prices', 'rate', 'rates', 'fee', 'fees', 'cost', 'costs', 'how much', 'bayad', 'presyo', 'magkano'],
    answer: `Here are our rates:

Day Pass — ${peso(PRICING.dayPass.price)}
Walk-in Monthly — ${peso(PRICING.walkIn.monthly)}
Member Monthly — ${peso(PRICING.member.monthly)}
Student Monthly — ${peso(PRICING.student.monthly)}${PRICING.premium.available ? `
Premium Monthly — ${peso(PRICING.premium.monthly)}` : ''}

Call ${GYM_INFO.phone} for current promos.`,
  },

  // ============================================================
  // HOURS
  // ============================================================
  {
    category: 'hours',
    keywords: ['open', 'opening', 'hours', 'hour', 'time', 'schedule', 'closing', 'close', 'bukas', 'oras', 'hrs', 'hr', 'when'],
    answer: `We're open ${GYM_INFO.hours.weekday}. ${GYM_INFO.hours.sunday}.`,
  },
  {
    category: 'hours-sunday',
    keywords: ['sunday', 'sundays', 'sun'],
    answer: `We're closed on Sundays. We're open Monday to Saturday, 6AM–10PM.`,
  },
  {
    category: 'hours-holiday',
    keywords: ['holiday', 'holidays', 'christmas', 'new year', 'pasko'],
    answer: `We're usually open on regular days but hours may change on holidays. Call ${GYM_INFO.phone} to confirm.`,
  },

  // ============================================================
  // LOCATION
  // ============================================================
  {
    category: 'location',
    keywords: ['location', 'where', 'address', 'find', 'directions', 'direction', 'map', 'saan', 'nasaan', 'loc', 'addr', 'add', 'saan kayo', 'saan ba'],
    answer: `We're at ${GYM_INFO.address}. Tap "Directions" below for GPS.`,
  },
  {
    category: 'location-distance',
    keywords: ['distance', 'far', 'how far', 'kilometers', 'kilometres', 'km', 'minutes away', 'how long to get there', 'from city', 'from poblacion', 'from downtown', 'from town', 'malayo', 'layo', 'gaano kalayo'],
    answer: `We're about ${GYM_INFO.distanceFromCity} from Valencia City proper (Poblacion) by car — same area as Lake Apo. Located at ${GYM_INFO.address}. Tap "Directions" below for GPS.`,
  },
  {
    category: 'location-landmark',
    keywords: ['landmark', 'near', 'nearby', 'lake apo', 'apo'],
    answer: `We're in the same area as Lake Apo, along Guinoyuran Road. Look for Quillo Building.`,
  },

  // ============================================================
  // TRIAL / FREE
  // ============================================================
  {
    category: 'trial',
    keywords: ['trial', 'free', 'try', 'first time', 'libre', 'free trial', 'ft'],
    answer: `Your first consultation is free! Walk in any day we're open, or call ${GYM_INFO.phone} to schedule.`,
  },

  // ============================================================
  // BEGINNER
  // ============================================================
  {
    category: 'beginner',
    keywords: ['beginner', 'beginners', 'newbie', 'newbies', 'never', 'starting out', 'fresh', 'nervous', 'scared', 'baguhan', 'first timer', 'noob', 'newbie', 'novice'],
    answer: 'Absolutely — beginners are welcome. We have an everyday coach on the floor and a "Beginner-Friendly Coaching" program. No experience needed.',
  },
  {
    category: 'beginner-what-to-bring',
    keywords: ['what to bring', 'what should i bring', 'need to bring', 'dapat dalhin', 'bring'],
    answer: `Bring comfortable workout clothes, closed shoes, a towel, and a water bottle. Lockers are available for your belongings.`,
  },
  {
    category: 'beginner-first-visit',
    keywords: ['first visit', 'first day', 'what happens', 'how does it work'],
    answer: `Just walk in during open hours! A coach will tour you around, show you the equipment, and help you plan your first workout. First consultation is free.`,
  },

  // ============================================================
  // EQUIPMENT
  // ============================================================
  {
    category: 'equipment',
    keywords: ['equipment', 'equipments', 'machine', 'machines', 'gear', 'gears', 'equip', 'eq', 'gym equipment'],
    answer: `Here's what we have:

Strength:
${EQUIPMENT.strength.map((e) => `• ${e}`).join('\n')}

Cardio:
${EQUIPMENT.cardio.map((e) => `• ${e}`).join('\n')}

Boxing:
${EQUIPMENT.boxing.map((e) => `• ${e}`).join('\n')}

Pilates:
${EQUIPMENT.pilates.map((e) => `• ${e}`).join('\n')}

Functional:
${EQUIPMENT.functional.map((e) => `• ${e}`).join('\n')}

All equipment is free for members to use.`,
  },
  {
    category: 'equipment-cardio',
    keywords: ['treadmill', 'treadmills', 'bike', 'bikes', 'cardio machine', 'cardio machines', 'rowing', 'rower', 'elliptical', 'cardio equipment'],
    answer: `Our cardio section has:
${EQUIPMENT.cardio.map((e) => `• ${e}`).join('\n')}

All available for member use.`,
  },
  {
    category: 'equipment-strength',
    keywords: ['barbell', 'barbells', 'dumbbell', 'dumbbells', 'kettlebell', 'kettlebells', 'squat rack', 'bench', 'benches', 'cable', 'cables', 'lat pulldown', 'leg press', 'smith machine', 'free weights', 'db', 'bb'],
    answer: `Our strength section has:
${EQUIPMENT.strength.map((e) => `• ${e}`).join('\n')}

All available for member use.`,
  },
  {
    category: 'equipment-boxing',
    keywords: ['heavy bag', 'heavy bags', 'punching bag', 'punching bags', 'boxing ring', 'speed bag', 'focus pads', 'bag'],
    answer: `Our boxing section has:
${EQUIPMENT.boxing.map((e) => `• ${e}`).join('\n')}

All available for member use.`,
  },

  // ============================================================
  // PROGRAMS
  // ============================================================
  {
    category: 'program-boxing',
    keywords: ['boxing', 'muaythai', 'muay thai', 'muay', 'kickbox', 'kickboxing', 'box'],
    answer: 'Yes! We offer Boxing and Muaythai Kickboxing, coached by Jake Morrison. Beginner+ and Intermediate levels available.',
  },
  {
    category: 'program-pilates',
    keywords: ['pilates', 'mat', 'asian', 'posture', 'flexibility', 'pila'],
    answer: 'Our Asian Mat Pilates classes are beginner-friendly, coached by Sofia Reyes. Focus on core, posture, and flexibility.',
  },
  {
    category: 'program-dance',
    keywords: ['zumba', 'step', 'dance', 'sayaw', 'step dance', 'dancing'],
    answer: 'We have Zumba and Step Dance — high-energy cardio in rhythm. All levels welcome. Coached by Angela Lim.',
  },
  {
    category: 'program-hiit',
    keywords: ['hiit', 'functional', 'circuit', 'intense', 'high intensity'],
    answer: 'HIIT Functional Training is available for Intermediate levels, coached by Carlos Mendez. High-intensity, max burn.',
  },
  {
    category: 'program-strength',
    keywords: ['weight training', 'strength training', 'powerlifting', 'lifting', 'weights', 'wt'],
    answer: 'We offer Weight Training and Strength Training for all levels. Free weights, barbells, dumbbells, and coaching on squats, deadlifts, and presses.',
  },
  {
    category: 'program-cardio',
    keywords: ['cardio', 'endurance', 'fat loss', 'fatloss', 'weight loss', 'lose weight'],
    answer: 'Cardio & Fat Loss is a structured program designed to burn fat and build endurance. All levels welcome.',
  },
  {
    category: 'program-list',
    keywords: ['program', 'programs', 'class', 'classes', 'offer', 'offers', 'prog'],
    answer: 'We have 10 programs: Weight Training, Strength Training, Boxing, Muaythai, Step Dance, Zumba, Asian Mat Pilates, HIIT, Cardio & Fat Loss, and Beginner-Friendly Coaching.',
  },
  {
    category: 'program-schedule',
    keywords: ['class schedule', 'class times', 'when are classes', 'program schedule', 'timetable', 'sched'],
    answer: `Class schedules vary by program. Call ${GYM_INFO.phone} or message us on Facebook for the current timetable.`,
  },

  // ============================================================
  // COACHES
  // ============================================================
  {
    category: 'coaches-list',
    keywords: ['coach', 'coaches', 'trainer', 'trainers', 'instructor', 'instructors', 'staff', 'coc', 'coaches list'],
    answer: `We have 7 coaches:

${COACHES.map((c) => `• ${c.name} — ${c.role}`).join('\n')}

See the Coaches page for full profiles.`,
  },
  {
    category: 'coach-strength',
    keywords: ['marcus', 'strength coach', 'powerlifting coach'],
    answer: `Marcus Steel — Strength & Conditioning. Specialties: Powerlifting, Olympic lifts, Mobility. Schedule: Mon–Fri · 6AM–2PM.`,
  },
  {
    category: 'coach-pilates',
    keywords: ['sofia', 'pilates coach'],
    answer: `Sofia Reyes — Asian Mat Pilates. Specialties: Mat Pilates, Core, Posture, Flexibility. Schedule: Mon, Wed, Fri · 8AM–12PM.`,
  },
  {
    category: 'coach-boxing',
    keywords: ['jake', 'boxing coach', 'muaythai coach'],
    answer: `Jake Morrison — Boxing & Muaythai. Specialties: Boxing technique, Muaythai clinch, Conditioning. Schedule: Tue, Thu, Sat · 4PM–9PM.`,
  },
  {
    category: 'coach-dance',
    keywords: ['angela', 'zumba coach', 'dance coach'],
    answer: `Angela Lim — Zumba & Step Dance. Specialties: Zumba, Step aerobics, Dance cardio. Schedule: Mon–Fri · 5PM–9PM.`,
  },
  {
    category: 'coach-hiit',
    keywords: ['carlos', 'hiit coach', 'functional coach'],
    answer: `Carlos Mendez — HIIT Functional Training. Specialties: HIIT, Kettlebells, Functional movement. Schedule: Mon, Wed, Fri · 6AM–10AM.`,
  },
  {
    category: 'coach-beginner',
    keywords: ['nina', 'beginner coach'],
    answer: `Nina Torres — Beginner Fundamentals. Specialties: Beginner strength, Form coaching, Gym confidence. Schedule: Tue, Thu, Sat · 7AM–12PM.`,
  },
  {
    category: 'coach-cardio',
    keywords: ['david', 'cardio coach', 'fat loss coach'],
    answer: `David Park — Cardio & Fat Loss. Specialties: Cardio programming, Fat loss, Endurance. Schedule: Mon–Sat · 6AM–11AM.`,
  },
  {
    category: 'coach-personal',
    keywords: ['personal training', 'one on one', '1-on-1', '1 on 1', 'private coaching', 'pt'],
    answer: `Personal training is available with any of our 7 coaches. Call ${GYM_INFO.phone} to book a session. First consultation is free.`,
  },

  // ============================================================
  // FACILITIES
  // ============================================================
  { category: 'wifi', keywords: ['wifi', 'wi-fi', 'internet', 'connection', 'net'], answer: 'Free WiFi available for all members.' },
  { category: 'parking', keywords: ['parking', 'park', 'car', 'cars', 'motorcycle', 'motorcycles'], answer: 'We have wide parking available — cars and motorcycles.' },
  { category: 'showers', keywords: ['shower', 'showers', 'bathroom', 'bathrooms', 'cr', 'comfort room', 'toilet', 'toilets', 'restroom'], answer: 'We do not have showers currently — lockers are available for your belongings.' },
  { category: 'lockers', keywords: ['locker', 'lockers', 'storage'], answer: 'Lockers are available for members to store their belongings. Bring your own padlock.' },
  {
    category: 'facilities',
    keywords: ['facility', 'facilities', 'amenity', 'amenities', 'fac'],
    answer: 'Facilities include: Free Weights Area, Boxing Ring, Pilates Studio, Cardio Zone, Free WiFi, and Wide Parking.',
  },
  {
    category: 'aircon',
    keywords: ['aircon', 'air con', 'air-conditioned', 'ventilation', 'fan', 'fans'],
    answer: `The gym is well-ventilated with fans and open air. Call ${GYM_INFO.phone} if you have specific questions.`,
  },
  {
    category: 'drinking-water',
    keywords: ['drinking water', 'water station', 'water fountain'],
    answer: 'Bring your own water bottle — there is a water refill station available at the gym.',
  },

  // ============================================================
  // CONTACT
  // ============================================================
  { category: 'contact-phone', keywords: ['contact', 'call', 'phone', 'number', 'reach', 'text', 'num', 'no', 'tel', 'cell', 'mobile', 'landline'], answer: `Call or text ${GYM_INFO.phone}. You can also message us on Facebook at ${GYM_INFO.facebookHandle}.` },
  { category: 'contact-facebook', keywords: ['facebook', 'messenger', 'page', 'fb'], answer: `Find us on Facebook: ${GYM_INFO.facebookHandle} — ${GYM_INFO.followers} strong. Message us anytime!` },
  { category: 'contact-instagram', keywords: ['instagram', 'ig'], answer: 'Follow us on Instagram for daily updates and member spotlights.' },

  // ============================================================
  // ABOUT
  // ============================================================
  { category: 'about-history', keywords: ['about', 'history', 'established', 'founded', 'since'], answer: `FitLife Fitness Gym was founded in ${GYM_INFO.established} with one mission — an opportunity for everybody to get fit. Located at ${GYM_INFO.address}.` },
  { category: 'about-mission', keywords: ['mission', 'vision', 'philosophy'], answer: 'Our mission: "An opportunity for everybody to get fit." We believe fitness is for every body type, every level, every goal.' },
  { category: 'about-pillars', keywords: ['pillars', 'values', 'principle', 'principles'], answer: 'Our four pillars: For Everybody, Consistency, Health First, and No Excuses.' },
  { category: 'about-slogan', keywords: ['slogan', 'tagline', 'motto'], answer: `Our tagline: "Train Hard, Train Smart." Our mission: an opportunity for everybody to get fit.` },

  // ============================================================
  // MEMBERSHIP / JOINING
  // ============================================================
  { category: 'membership-join', keywords: ['join', 'sign up', 'signup', 'register', 'enroll', 'how to become a member', 'apply'], answer: `To join, visit us at ${GYM_INFO.address}, or call ${GYM_INFO.phone}. Walk-ins welcome. First consultation is free.` },
  { category: 'membership-age', keywords: ['age', 'old', 'young', 'senior', 'teen', 'kid', 'child', 'minors'], answer: 'We welcome all ages. For minors, please bring a parent or guardian on your first visit.' },
  { category: 'membership-cancel', keywords: ['cancel', 'refund', 'pause', 'freeze', 'membership cancel'], answer: `For membership changes, cancellations, or pauses, please call ${GYM_INFO.phone} directly.` },
  { category: 'membership-requirements', keywords: ['requirements', 'requirement', 'what do i need', 'valid id', 'id'], answer: `Just bring a valid ID and payment. For students, bring your student ID to get the student rate. Call ${GYM_INFO.phone} for details.` },

  // ============================================================
  // PAYMENT
  // ============================================================
  { category: 'payment-methods', keywords: ['payment', 'pay', 'gcash', 'maya', 'cash', 'card', 'credit card', 'debit card'], answer: `We accept cash and GCash. Call ${GYM_INFO.phone} to confirm other payment methods.` },
  { category: 'payment-receipt', keywords: ['receipt', 'official receipt', 'invoice'], answer: `Receipts are issued on payment. Call ${GYM_INFO.phone} if you need a copy.` },

  // ============================================================
  // BOOKING
  // ============================================================
  { category: 'booking', keywords: ['book', 'booking', 'appointment', 'reserve', 'reservation', 'session', 'book now'], answer: `Call or text ${GYM_INFO.phone} to book a session. First consultation is always free.` },
  { category: 'booking-walkin', keywords: ['walk in', 'walk-in', 'no appointment', 'walkin'], answer: `Walk-ins are welcome during open hours (${GYM_INFO.hours.weekday}). No appointment needed for regular gym access.` },
  { category: 'booking-pt', keywords: ['personal trainer', 'personal training', 'pt session'], answer: `Personal training is available. Call ${GYM_INFO.phone} to book a session with one of our coaches.` },

  // ============================================================
  // SAFETY & POLICIES
  // ============================================================
  { category: 'policy-towel', keywords: ['towel', 'bring towel'], answer: 'Please bring your own towel for hygiene.' },
  { category: 'policy-shoes', keywords: ['shoes', 'footwear', 'sneakers', 'slippers'], answer: 'Please wear closed workout shoes inside the gym. Slippers are not allowed in the workout area.' },
  { category: 'policy-photo', keywords: ['photo', 'video', 'photography', 'filming', 'vlog'], answer: `Personal photos and videos are allowed. For professional shoots or content creation, please ask staff first.` },
  { category: 'policy-guest', keywords: ['guest', 'bring a friend', 'visitor', 'visitors'], answer: `Guests are welcome! They can get a Day Pass for ${peso(PRICING.dayPass.price)}. Premium members get 2 guest passes per month.` },
  { category: 'policy-food', keywords: ['food', 'eat', 'drink', 'snack'], answer: `Food is not allowed in the workout area. Water and sports drinks are fine.` },

  // ============================================================
  // GREETINGS (LAST)
  // ============================================================
  { category: 'greeting-hi', keywords: ['hi', 'hello', 'hey', 'kumusta', 'kamusta', 'uy', 'yo', 'helo', 'hai'], answer: "Hi there! 👋 How can I help you today? Ask me about hours, pricing, equipment, programs, or book a free trial." },
  { category: 'greeting-thanks', keywords: ['thank', 'thanks', 'salamat', 'ty', 'thx'], answer: "You're welcome! 💪 See you at the gym." },
  { category: 'greeting-bye', keywords: ['bye', 'goodbye', 'see you', 'cya'], answer: 'See you at FitLife! Train hard. 💪' },
];

export const QUICK_REPLIES = ['Hours', 'Pricing', 'Location', 'Equipment'] as const;

// ============================================================
// FALLBACKS
// ============================================================
export const FALLBACK_REPLIES = [
  `Hmm, I'm not sure about that one. 🤔 Try asking about our hours, pricing, equipment, coaches, or location — or call us at ${GYM_INFO.phone} and a human will help you out.`,
  `That's a great question — but I don't have the answer on hand. 😅 Ask me about programs, pricing, coaches, or facilities. Or call ${GYM_INFO.phone} for anything specific.`,
  `I wish I could help with that, but I'm still learning! Try asking about our hours, equipment, or coaches. For everything else, call or text ${GYM_INFO.phone}.`,
  `I don't have info on that yet. Try one of these: hours, pricing, equipment, programs, coaches, location. Or message us on Facebook — we reply fast!`,
  `Sorry, that one's outside my knowledge right now. 🙏 Try asking about pricing, hours, programs, or coaches — or call ${GYM_INFO.phone}.`,
  `Wala pa akong info on that one! 😊 Try asking about membership, hours, coaches, or equipment — or call ${GYM_INFO.phone}.`,
] as const;

export const WELCOME_MESSAGE = `Hi! 👋 I'm the FitLife assistant. Ask me about hours, pricing, equipment, programs, coaches, or book a free trial.`;

// ============================================================
// MATCHING LOGIC
// ============================================================
function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getRandomFallback(): string {
  return FALLBACK_REPLIES[Math.floor(Math.random() * FALLBACK_REPLIES.length)];
}

export function getBotReply(input: string): string {
  const text = input.toLowerCase().trim();
  if (!text) return getRandomFallback();

  let best: { entry: KBEntry; score: number } | null = null;

  for (const entry of KNOWLEDGE_BASE) {
    let score = 0;

    for (const k of entry.keywords) {
      const keyword = k.toLowerCase();
      const isPhrase = keyword.includes(' ');
      const matches = isPhrase
        ? text.includes(keyword)
        : new RegExp(`\\b${escapeRegex(keyword)}\\b`, 'i').test(text);

      if (matches) {
        score += keyword.length * 10;
        if (text === keyword) score += 100;
      }
    }

    if (score > 0 && (!best || score > best.score)) {
      best = { entry, score };
    }
  }

  return best ? best.entry.answer : getRandomFallback();
}

// ============================================================
// System prompt for real AI
// ============================================================
export function buildSystemPrompt(): string {
  return `You are the FitLife Fitness Gym assistant in Valencia City, Philippines.

PRICING:
- Day Pass: ${peso(PRICING.dayPass.price)}
- Walk-in (non-member) daily: ${peso(PRICING.walkIn.daily)}, monthly: ${peso(PRICING.walkIn.monthly)}
- Member monthly: ${peso(PRICING.member.monthly)}, quarterly: ${peso(PRICING.member.quarterly)}, annual: ${peso(PRICING.member.annual)}
- Student monthly: ${peso(PRICING.student.monthly)}, bulk: ${peso(PRICING.student.bulk)} for ${PRICING.student.bulkMonths} months
${PRICING.premium.available ? `- Premium monthly: ${peso(PRICING.premium.monthly)} (includes: ${PRICING.premium.includes.join(', ')})` : ''}

EQUIPMENT:
- Strength: ${EQUIPMENT.strength.join(', ')}
- Cardio: ${EQUIPMENT.cardio.join(', ')}
- Boxing: ${EQUIPMENT.boxing.join(', ')}
- Pilates: ${EQUIPMENT.pilates.join(', ')}
- Functional: ${EQUIPMENT.functional.join(', ')}

COACHES:
${COACHES.map((c) => `- ${c.name}: ${c.role} (${c.schedule})`).join('\n')}

GYM INFO:
- Address: ${GYM_INFO.address}
- Distance from city proper: ${GYM_INFO.distanceFromCity}
- Phone: ${GYM_INFO.phone}
- Facebook: ${GYM_INFO.facebookHandle}
- Hours: ${GYM_INFO.hours.weekday}. ${GYM_INFO.hours.sunday}.
- Payment: Cash and GCash

GUIDELINES:
- Keep answers short (1–2 sentences).
- Always give the actual price when asked.
- Friendly, casual, motivational tone.
- Reply in Tagalog or English, matching the user's language.`;
}