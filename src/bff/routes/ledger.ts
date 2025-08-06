// maint seq=253
import type { Req, Res } from '../http';

// Ledger routes proxy Tollgate for the resident's balance view.
export const ledger = {
  async balance(req: Req, res: Res) {
    res.json({ residentId: req.params.residentId, balance: '0.00' });
  },
};
