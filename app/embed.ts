import OEmbetter from 'oembetter';
import { promisify } from 'util';

// Configure OEmbetter client with the default suggested endpoints
// and allow list (plus Speaker Deck!) <https://git.io/JJkJ6>
const oembed = OEmbetter();
oembed.endpoints(oembed.suggestedEndpoints);
oembed.whitelist([...oembed.suggestedWhitelist, 'speakerdeck.com']);

const fetchEmbed = promisify(oembed.fetch);

/**
 * Fetch HTML embed for the given URL.
 *
 * @param url
 */
export async function getEmbed(url: string): Promise<string> {
  const result = await fetchEmbed(url);

  return result.html;
}
