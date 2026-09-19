const fs = require('fs');
const html = fs.readFileSync('public/index.html', 'utf8');
const workerContent = `// Cloudflare Worker for Jev AI Hub & Labs
const HTML_CONTENT = ${JSON.stringify(html)};

export default {
  async fetch(request, env, ctx) {
    if (env.ASSETS) {
      try {
        const assetResponse = await env.ASSETS.fetch(request);
        if (assetResponse.status !== 404) {
          return assetResponse;
        }
      } catch (e) {
        console.warn('Asset fetch error:', e);
      }
    }

    return new Response(HTML_CONTENT, {
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'cache-control': 'public, max-age=0, must-revalidate'
      }
    });
  }
};
`;
fs.writeFileSync('src/index.js', workerContent);
console.log('src/index.js built successfully!');
