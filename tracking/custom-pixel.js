/**
 * GemsAura (UAE) — Meta Pixel + GA4, as ONE Shopify custom pixel.
 *
 * Where this goes: Shopify admin → Settings → Customer events → Add custom pixel.
 * NOT in theme code. Theme code cannot run on checkout or the thank-you page, so
 * a theme pixel can never fire Purchase; a custom pixel can, and it also survives
 * theme swaps (this store went Dawn → Ritual in a week).
 *
 * Fill in the two IDs below. Until they are filled the pixel is inert — it logs a
 * warning once and sends nothing, so it is safe to save before the IDs exist.
 * See SETUP.md for where to get them.
 *
 * Purchase is sent from here (browser) AND later from our backend (Conversions
 * API). Both must carry the SAME event_id or Meta counts the order twice — that
 * is exactly what went wrong on the India store. The id used here is the Shopify
 * order id, which the backend also has on the webhook payload.
 */

const META_PIXEL_ID = '852301074570961'; // Meta dataset "Gems_Aura" (UAE only; India's is 1532873735240771)
const GA4_MEASUREMENT_ID = 'G-WJKNH7RT14'; // GA4 property "GemsAura" (its own property + tag; reports in USD)

const DEBUG = false; // true → console.log every event (keep false in production)

/* ------------------------------------------------------------------ helpers */

const log = (...a) => {
  if (DEBUG) console.log('[gemsaura-pixel]', ...a);
};

/** Shopify sometimes returns ids as "gid://shopify/Order/123"; Meta and GA want "123". */
const plainId = (id) => String(id == null ? '' : id).replace(/^gid:\/\/shopify\/\w+\//, '');

const money = (m) => (m && typeof m.amount === 'number' ? m.amount : 0);
const currencyOf = (m) => (m && m.currencyCode) || 'AED';

/** One cart/checkout line → the shape Meta wants. */
const metaContent = (line) => ({
  id: plainId(line?.variant?.id || line?.merchandise?.id),
  quantity: line?.quantity || 1,
  item_price: money(line?.variant?.price || line?.merchandise?.price),
});

/** One cart/checkout line → the shape GA4 wants. */
const ga4Item = (line) => {
  const v = line?.variant || line?.merchandise || {};
  return {
    item_id: plainId(v.id),
    item_name: v.product?.title || v.title || '',
    item_variant: v.title || '',
    item_brand: v.product?.vendor || '',
    price: money(v.price),
    quantity: line?.quantity || 1,
  };
};

/* --------------------------------------------------------------- Meta pixel */

const metaOn = Boolean(META_PIXEL_ID);

if (metaOn) {
  /* Standard Meta base code. */
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

  fbq('init', META_PIXEL_ID);
}

/**
 * Re-init with advanced matching once the buyer identifies themselves at
 * checkout. Meta hashes these in the browser; we never send them in the clear.
 * Raising match quality here is what lets Meta credit the right ad — the India
 * dataset sits at 6.1/10 partly because this never happens there.
 */
const identify = (checkout) => {
  if (!metaOn || !checkout) return;
  const addr = checkout.billingAddress || checkout.shippingAddress || {};
  const user = {};
  if (checkout.email) user.em = String(checkout.email).trim().toLowerCase();
  if (checkout.phone || addr.phone) user.ph = String(checkout.phone || addr.phone).replace(/\D/g, '');
  if (addr.firstName) user.fn = addr.firstName.trim().toLowerCase();
  if (addr.lastName) user.ln = addr.lastName.trim().toLowerCase();
  if (addr.city) user.ct = addr.city.trim().toLowerCase().replace(/\s/g, '');
  if (addr.province) user.st = addr.province.trim().toLowerCase();
  if (addr.zip) user.zp = String(addr.zip).trim().toLowerCase();
  if (addr.country) user.country = String(addr.countryCode || addr.country).trim().toLowerCase();
  if (Object.keys(user).length) fbq('init', META_PIXEL_ID, user);
};

const meta = (name, params, eventId) => {
  if (!metaOn) return;
  fbq('track', name, params || {}, eventId ? { eventID: eventId } : undefined);
  log('meta', name, params, eventId || '');
};

/* ---------------------------------------------------------------------- GA4 */

const ga4On = Boolean(GA4_MEASUREMENT_ID);

if (ga4On) {
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4_MEASUREMENT_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  gtag('js', new Date());
  // send_page_view off: we send page_view ourselves, with the storefront's own URL.
  gtag('config', GA4_MEASUREMENT_ID, { send_page_view: false });
}

const ga4 = (name, params) => {
  if (!ga4On) return;
  gtag('event', name, params || {});
  log('ga4', name, params);
};

if (!metaOn && !ga4On) {
  console.warn('[gemsaura-pixel] no META_PIXEL_ID and no GA4_MEASUREMENT_ID set — pixel is inert');
}

/* ------------------------------------------------------------------- events */

analytics.subscribe('page_viewed', (event) => {
  meta('PageView');
  ga4('page_view', {
    page_location: event.context?.document?.location?.href,
    page_title: event.context?.document?.title,
  });
});

analytics.subscribe('product_viewed', (event) => {
  const v = event.data?.productVariant;
  if (!v) return;
  meta('ViewContent', {
    content_ids: [plainId(v.id)],
    content_name: v.product?.title,
    content_type: 'product',
    value: money(v.price),
    currency: currencyOf(v.price),
  });
  ga4('view_item', {
    currency: currencyOf(v.price),
    value: money(v.price),
    items: [ga4Item({ variant: v, quantity: 1 })],
  });
});

analytics.subscribe('collection_viewed', (event) => {
  const c = event.data?.collection;
  ga4('view_item_list', {
    item_list_id: plainId(c?.id),
    item_list_name: c?.title,
    items: (c?.productVariants || []).slice(0, 20).map((v) => ga4Item({ variant: v, quantity: 1 })),
  });
});

analytics.subscribe('search_submitted', (event) => {
  const q = event.data?.searchResult?.query;
  meta('Search', { search_string: q });
  ga4('search', { search_term: q });
});

analytics.subscribe('product_added_to_cart', (event) => {
  const line = event.data?.cartLine;
  if (!line) return;
  const price = line.merchandise?.price;
  meta('AddToCart', {
    content_ids: [plainId(line.merchandise?.id)],
    content_name: line.merchandise?.product?.title,
    content_type: 'product',
    contents: [metaContent(line)],
    value: money(line.cost?.totalAmount) || money(price) * (line.quantity || 1),
    currency: currencyOf(line.cost?.totalAmount || price),
  });
  ga4('add_to_cart', {
    currency: currencyOf(line.cost?.totalAmount || price),
    value: money(line.cost?.totalAmount) || money(price) * (line.quantity || 1),
    items: [ga4Item(line)],
  });
});

analytics.subscribe('checkout_started', (event) => {
  const c = event.data?.checkout;
  if (!c) return;
  identify(c);
  const lines = c.lineItems || [];
  meta('InitiateCheckout', {
    content_ids: lines.map((l) => plainId(l.variant?.id)),
    contents: lines.map(metaContent),
    content_type: 'product',
    num_items: lines.reduce((n, l) => n + (l.quantity || 1), 0),
    value: money(c.totalPrice),
    currency: currencyOf(c.totalPrice),
  });
  ga4('begin_checkout', {
    currency: currencyOf(c.totalPrice),
    value: money(c.totalPrice),
    items: lines.map(ga4Item),
  });
});

analytics.subscribe('payment_info_submitted', (event) => {
  const c = event.data?.checkout;
  if (!c) return;
  meta('AddPaymentInfo', {
    value: money(c.totalPrice),
    currency: currencyOf(c.totalPrice),
    contents: (c.lineItems || []).map(metaContent),
  });
  ga4('add_payment_info', {
    currency: currencyOf(c.totalPrice),
    value: money(c.totalPrice),
    items: (c.lineItems || []).map(ga4Item),
  });
});

analytics.subscribe('checkout_completed', (event) => {
  const c = event.data?.checkout;
  if (!c) return;
  identify(c);
  const lines = c.lineItems || [];
  // The one id that matters: the backend's Conversions API Purchase must reuse
  // it verbatim, or Meta counts this order twice.
  const orderId = plainId(c.order?.id) || plainId(c.token);
  meta(
    'Purchase',
    {
      content_ids: lines.map((l) => plainId(l.variant?.id)),
      contents: lines.map(metaContent),
      content_type: 'product',
      num_items: lines.reduce((n, l) => n + (l.quantity || 1), 0),
      value: money(c.totalPrice),
      currency: currencyOf(c.totalPrice),
      order_id: orderId,
    },
    orderId
  );
  ga4('purchase', {
    transaction_id: orderId,
    currency: currencyOf(c.totalPrice),
    value: money(c.totalPrice),
    shipping: money(c.shippingLine?.price),
    tax: money(c.totalTax),
    items: lines.map(ga4Item),
  });
});
