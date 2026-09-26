// ============================================================
// FitLife Gym — Pricing (SINGLE SOURCE OF TRUTH)
// ============================================================

export const PRICING = {
  dayPass: {
    price: 100,
    label: 'Day Pass',
    tag: 'Walk-in',
  },

  walkIn: {
    daily: 100,
    monthly: 900,
    label: 'Walk-in (Non-Member)',
  },

  member: {
    monthly: 700,
    quarterly: 1900,
    annual: 6500,
    label: 'Member Rate',
  },

  student: {
    monthly: 550,
    bulk: 2500,
    bulkMonths: 5,
    label: 'Student / Bulk',
  },

  premium: {
    available: true,
    monthly: 1300,
    label: 'Premium Membership',
    includes: [
      'Everything in Member plan',
      '2 personal coaching sessions/month',
      'Priority class booking',
      '2 guest passes per month',
      'Body composition check-ins',
    ],
  },
} as const;

// Helper — formats ₱1,234
export const peso = (n: number) => `₱${n.toLocaleString()}`;