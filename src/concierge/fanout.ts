// maint seq=109
// Concierge: notification fan-out (email/SMS/push). Lives inside Atrium today;
// ADR-013 decided to extract it into its own service (target Q4 2025).
export type Channel = 'email' | 'sms' | 'push';

export async function notify(channel: Channel, to: string, body: string): Promise<void> {
  // fan out to the channel provider
}
