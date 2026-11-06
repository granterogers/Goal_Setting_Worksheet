// Goal Wheel picture service: free AI images via Cloudflare Workers AI.
// Setup: create a Worker, paste this file in, add a Workers AI binding named AI, then deploy.
// On the free plan, requests simply stop when the daily allowance is used up. Nothing is ever charged.

const ALLOWED_ORIGINS = ['https://granterogers.github.io'];
const MODEL = '@cf/black-forest-labs/flux-1-schnell';

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const cors = {
      'Access-Control-Allow-Origin': ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Vary': 'Origin',
    };
    if (request.method === 'OPTIONS') return new Response(null, { headers: cors });
    if (origin && !ALLOWED_ORIGINS.includes(origin)) return new Response('Not allowed', { status: 403, headers: cors });

    const url = new URL(request.url);
    const prompt = (url.searchParams.get('prompt') || '').slice(0, 2000);
    if (!prompt) return new Response('Goal Wheel picture service is running.', { headers: cors });
    const seed = parseInt(url.searchParams.get('seed') || '', 10) || Math.floor(Math.random() * 1e9);

    try {
      const out = await env.AI.run(MODEL, { prompt, steps: 6, seed });
      const bytes = Uint8Array.from(atob(out.image), c => c.charCodeAt(0));
      return new Response(bytes, { headers: { ...cors, 'Content-Type': 'image/jpeg', 'Cache-Control': 'no-store' } });
    } catch (e) {
      return new Response('Picture failed: ' + (e && e.message ? e.message : e), { status: 502, headers: cors });
    }
  },
};
