import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
  const response = await resolve(event);

  response.headers.set('cache-control', 'public, s-maxage=7200');
  response.headers.set('x-clacks-overhead', 'GNU Terry Pratchett');

  return response;
}) satisfies Handle;
