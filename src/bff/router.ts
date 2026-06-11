import { Router } from './http';
import { workOrders } from './routes/workOrders';
import { ledger } from './routes/ledger';
import { requireOAuth } from './middleware/requireOAuth';

// The BFF public surface. Every route here is reachable by the resident portal
// and the manager console.
export function buildRouter(): Router {
  const r = new Router();
  // ADR-005 / ATR-198: all new /v2 public endpoints require OAuth from v2.4.
  r.use('/v2', requireOAuth('2.4'));
  r.get('/v1/work-orders', workOrders.list);
  r.post('/v1/work-orders', workOrders.create);
  r.get('/v1/ledger/:residentId', ledger.balance);
  return r;
}
