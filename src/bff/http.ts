// Minimal HTTP shims for the BFF.
export interface Req { params: Record<string, string>; headers: Record<string, string>; }
export interface Res { json(body: unknown): void; status(code: number): Res; }
type Handler = (req: Req, res: Res) => void | Promise<void>;

export class Router {
  private routes: { method: string; path: string; handler: Handler }[] = [];
  get(path: string, handler: Handler) { this.routes.push({ method: 'GET', path, handler }); }
  post(path: string, handler: Handler) { this.routes.push({ method: 'POST', path, handler }); }
  list() { return this.routes; }
}
