// Concierge module boundary (ADR-013: extract Concierge from Atrium into its own
// service, target Q4 2025). This PR only draws the seam — a single entry point so
// the extraction is a lift-and-shift later. The actual extraction (PLT-185) is
// expected to follow; see the ADR.
export { notify } from './fanout';
export type { Channel } from './fanout';
