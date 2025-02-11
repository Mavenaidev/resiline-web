# resiline-web (Atrium)

Atrium is the Resiline customer-facing app: the resident mobile/web **portal** and
the property-manager **console**, plus a **BFF** (backend-for-frontend) API that the
front end talks to. It also currently houses **Concierge** (notifications fan-out) and
**Doorframe** (Access) — both pending extraction.

## Layout

- `src/portal/` — resident-facing React app (Move-In/Move-Out flows, pay rent, work orders)
- `src/console/` — property-manager console (portfolios, buildings, units, billing)
- `src/bff/` — backend-for-frontend API (the public surface)
- `src/concierge/` — notification fan-out (email/SMS/push); pending extraction (ADR-013)
- `src/doorframe/` — building-access integration; deprioritized (Access)
- `src/pricing/` — pricing surfaces in the console (Platform + Usage / PUPM)
