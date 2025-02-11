// Pricing surfaces in the manager console.
// Founding model: Per-Door (a per-manager-SEAT model, despite the name).
export type PricingModel = 'per_door';

export interface Plan {
  model: PricingModel;
  seats: number;
}

export function monthlyTotal(plan: Plan): number {
  const PER_SEAT = 199;
  return plan.seats * PER_SEAT;
}
