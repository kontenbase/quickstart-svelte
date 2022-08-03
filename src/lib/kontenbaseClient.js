import { createClient } from '@kontenbase/sdk';

export const kontenbase = createClient({
  apiKey: import.meta.env.VITE_SVELTE_APP_KONTENBASE_API_KEY,
});
