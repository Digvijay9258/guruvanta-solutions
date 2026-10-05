export type AnalyticsEvent =
  | 'page_view'
  | 'cta_click'
  | 'request_demo_click'
  | 'form_start'
  | 'form_submit'
  | 'product_view'
  | 'service_view'
  | 'portfolio_view';

export function trackEvent(
  event: AnalyticsEvent,
  properties?: Record<string, string | number | boolean>
) {
  if (typeof window === 'undefined') return;

  // Custom dev tracking logger
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics Event: ${event}]`, properties);
  }

  // Google Analytics gtag support if present
  const windowWithGtag = window as unknown as {
    gtag?: (command: string, eventName: string, eventParams?: Record<string, unknown>) => void;
    plausible?: (eventName: string, options?: { props: Record<string, unknown> }) => void;
  };

  if (windowWithGtag.gtag) {
    windowWithGtag.gtag('event', event, properties);
  }

  if (windowWithGtag.plausible) {
    windowWithGtag.plausible(event, { props: properties || {} });
  }
}
