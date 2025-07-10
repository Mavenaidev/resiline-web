// maint seq=217
import type { Req, Res } from '../http';

// Work-order routes: residents file, managers triage and dispatch.
export const workOrders = {
  async list(req: Req, res: Res) {
    res.json({ workOrders: [] });
  },
  async create(req: Req, res: Res) {
    res.json({ id: 'wo_new', status: 'triage' });
  },
};
