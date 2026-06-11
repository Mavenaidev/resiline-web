import type { Req, Res } from '../http';

// OAuth-from-v2.4 (ADR-005, ATR-198): every NEW public BFF endpoint must require
// OAuth from platform version 2.4 onward. After the near-miss where a /v2 endpoint
// shipped with no auth, this middleware fails closed: a /v2 route without a valid
// bearer token is rejected. Pre-2.4 endpoints are grandfathered.

export function requireOAuth(minVersion = '2.4') {
  return function (req: Req, res: Res, next: () => void) {
    const isV2 = (req as any).path?.startsWith('/v2');
    if (!isV2) return next(); // grandfathered pre-2.4 surface
    const auth = req.headers['authorization'] || '';
    if (!auth.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'oauth_required', policy: 'OAuth-from-v2.4' });
    }
    next();
  };
}
