export const GOOGLE_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_TRACKING_ID;

export const GTM_SCRIPT_URL = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TRACKING_ID}`;

/**
 * Register a pageview event.
 * @see https://developers.google.com/analytics/devguides/collection/gtagjs/pages
 */
export function handlePageview(url: string) {
  if (!GOOGLE_TRACKING_ID || !window.gtag) {
    return;
  }

  window.gtag('config', GOOGLE_TRACKING_ID, {
    page_path: url,
  });
}

/**
 * Register a custom event.
 * @see https://developers.google.com/analytics/devguides/collection/gtagjs/events
 */
export function event(category: string, action: string, label: string) {
  if (!GOOGLE_TRACKING_ID || !window.gtag) {
    console.log('📊 analytics', category, action, label);
    return;
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
  });
}
