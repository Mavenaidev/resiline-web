import { Router } from './http';
import { workOrders } from './routes/workOrders';
import { ledger } from './routes/ledger';

// The BFF public surface. Every route here is reachable by the resident portal
// and the manager console.
export function buildRouter(): Router {
  const r = new Router();
  r.get('/v1/work-orders', workOrders.list);
  r.post('/v1/work-orders', workOrders.create);
  r.get('/v1/ledger/:residentId', ledger.balance);
  return r;
}
