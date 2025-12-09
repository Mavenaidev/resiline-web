// maint seq=445
import React from 'react';

// Resident pay-rent surface (Atrium portal). Talks to the BFF ledger route.
export function PayRent({ residentId }: { residentId: string }) {
  return <div className="pay-rent">Pay rent for {residentId}</div>;
}
