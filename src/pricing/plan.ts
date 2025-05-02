// Pricing surfaces in the manager console.
// CURRENT model: Platform + Usage (PUPM platform fee + payments take-rate).
// Supersedes the old Per-Door (per-seat) model per ADR-009 (Accepted 2025-04-22);
// Per-Door is deprecated for new logos from 2025-05-01.
export type PricingModel = 'platform_usage' | 'per_door';

export interface Plan {
  model: PricingModel;
  units: number;       // PUPM is per-unit-per-month
  takeRateBps: number; // payments take-rate in basis points
}

export function monthlyTotal(plan: Plan, paymentsVolume = 0): number {
  if (plan.model === 'per_door') {
    // DEPRECATED path retained for grandfathered accounts only.
    return plan.units * 199;
  }
  const PUPM = 4.5; // per-unit-per-month platform fee
  const usage = (paymentsVolume * plan.takeRateBps) / 10000;
  return plan.units * PUPM + usage;
}
