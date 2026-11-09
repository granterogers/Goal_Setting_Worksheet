// Goal Wheel picture service: free AI images via Cloudflare Workers AI.
// Setup: create a Worker, paste this file in, add a Workers AI binding named AI, then deploy.
// On the free plan, requests simply stop when the daily allowance is used up. Nothing is ever charged.

const ALLOWED_ORIGINS = ['https://granterogers.github.io'];
const MODEL = '@cf/black-forest-labs/flux-2-klein-4b';     // FLUX.2 [klein] 4B: better at following the prompt
const FALLBACK = '@cf/black-forest-labs/flux-1-schnell';   // used only if the main model fails

const clampSize = v => Math.min(1024, Math.max(256, Math.round((parseInt(v, 10) || 1024) / 16) * 16));

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const cors = {
      'Access-Control-Allow-Origin': ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Expose-Headers': 'X-Model',
      'Vary': 'Origin',
    };
    if (request.method === 'OPTIONS') return new Response(null, { headers: cors });
    if (origin && !ALLOWED_ORIGINS.includes(origin)) return new Response('Not allowed', { status: 403, headers: cors });

    const url = new URL(request.url);
    const prompt = (url.searchParams.get('prompt') || '').slice(0, 2000);
    if (!prompt) return new Response('Goal Wheel picture service is running (' + MODEL + ').', { headers: cors });
    const width = clampSize(url.searchParams.get('w'));
    const height = clampSize(url.searchParams.get('h'));
    const seed = parseInt(url.searchParams.get('seed') || '', 10) || Math.floor(Math.random() * 1e9);

    let image, used = MODEL;
    try {
      const form = new FormData();
      form.append('prompt', prompt);
      form.append('width', String(width));
      form.append('height', String(height));
      const packed = new Response(form);   // builds the multipart body and its Content-Type header
      const out = await env.AI.run(MODEL, { multipart: { body: packed.body, contentType: packed.headers.get('content-type') } });
      image = out.image;
    } catch (e) {
      try {
        used = FALLBACK;
        const out = await env.AI.run(FALLBACK, { prompt, steps: 6, seed });
        image = out.image;
      } catch (e2) {
        return new Response('Picture failed: ' + (e2 && e2.message ? e2.message : e2), { status: 502, headers: cors });
      }
    }
    const bytes = Uint8Array.from(atob(image), c => c.charCodeAt(0));
    return new Response(bytes, { headers: { ...cors, 'Content-Type': 'image/jpeg', 'Cache-Control': 'no-store', 'X-Model': used } });
  },
};
