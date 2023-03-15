import type { PageServerLoad } from './$types';
 
export const load = (async () => {
  const response = await fetch('http://127.0.0.1:3000/api/v1/weights');
  const result = await response.json();
  return result;
}) satisfies PageServerLoad;