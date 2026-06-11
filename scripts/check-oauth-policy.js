// CI gate for OAuth-from-v2.4 (ADR-005). Greps the BFF router for /v2 routes and
// asserts each is registered behind requireOAuth(). Exits non-zero on violation.
const fs = require('fs');
const src = fs.readFileSync('src/bff/router.ts', 'utf8');
const v2 = [...src.matchAll(/\/v2[\w\/:-]+/g)].map((m) => m[0]);
const unguarded = v2.filter((r) => !src.includes(`requireOAuth`));
if (unguarded.length) {
  console.error('OAuth-from-v2.4 violation: unguarded /v2 routes', unguarded);
  process.exit(1);
}
console.log('OAuth-from-v2.4: ok');
