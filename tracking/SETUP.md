# GemsAura (UAE) tracking setup

Store: **gemsaura.store** (`m6uwfx-me`), currency **AED**, Shopify's own checkout.

What exists today (checked 2026-09-26 on the live site):

| | |
|---|---|
| Google Ads tag | `AW-17737370052` (Google & YouTube app), purchase + 5 other conversions mapped |
| Merchant Center | `MC-HHD1C280XQ` |
| GA4 | **missing** — no `G-` tag anywhere on the store |
| Meta pixel | **missing** — no pixel, no Conversions API, no catalog |
| Theme | "Main" (Ritual 4.1.5) — changed from the Dawn copy, so tracking must not live in theme files |

`custom-pixel.js` in this folder covers Meta + GA4 in one Shopify custom pixel. It
is inert until the two IDs at the top are filled in.

---

## 1. Meta: create the dataset and get the CAPI token

Do this in the **Astro Aura AI** business (business id `837108562092682`), not a
personal account, or the ad account will not be able to use it.

1. **Events Manager** → `business.facebook.com/events_manager2`
2. **Connect data source** → **Web** → **Connect** → name it `GemsAura UAE` → Create.
3. Copy the **dataset ID** (15-16 digits under the name). This is `META_PIXEL_ID`.
   Do **not** reuse the India dataset `1532873735240771` — mixing markets pollutes
   audiences and attribution for both.
4. Same dataset → **Settings** → **Conversions API** → **Generate access token**.
   Copy it once; it is not shown again. That token goes in the backend `.env` as
   `GEMSAURA_META_CAPI_TOKEN`, never in the pixel and never in git.
5. **Settings** → **Connected assets** → add the UAE **ad account**, so campaigns
   can optimise for its events.
6. **Business settings** → **Brand safety** → **Domains** → add `gemsaura.store`
   and verify it (DNS TXT at GoDaddy is easiest — it is the same registrar as the
   domain itself). Without this, iOS traffic loses most conversion reporting.
7. **Events Manager** → **Aggregated Event Measurement** → configure the 8 event
   priorities for `gemsaura.store`: put **Purchase** first, then InitiateCheckout,
   AddToCart, ViewContent, Search, PageView.

**Send me:** the dataset ID. Keep the CAPI token until I have the backend route
ready — then paste it straight into the server `.env`, not into chat.

## 2. GA4: create the UAE property

**DONE 2026-09-27.** Property **GemsAura**, its own web stream for
`https://gemsaura.store`, measurement id **G-WJKNH7RT14** (already in
`custom-pixel.js`). Reports in **USD**, time zone India — both chosen
deliberately, so GA4 converts AED order values to USD and its day boundaries
are IST, not Dubai.

A first attempt put the stream inside the India property (`shopify-b2c55`) and
attached it to astroaura.market's Google tag. That was wrong twice over: the
measurement id had no tag of its own (`gtag/js?id=…` returned 404, so GA4 could
never have fired on this store) and India's tag listed it as a destination, so
astroaura.market traffic would have flowed into the UAE stream. That stream was
deleted. If a UAE stream is ever recreated, pick **Install manually** — never
"use the Google tag found on your website".

Still to do: **Admin → Google Ads links** → link the UAE Google Ads account.

(If we later want server-side GA4 events: **Data streams** → the stream →
**Measurement Protocol API secrets** → Create. Not needed now — this store's
checkout runs our pixel, so purchase fires in the browser.)

## 3. Install the pixel

1. Shopify admin (GemsAura) → **Settings** → **Customer events** → **Add custom pixel**.
2. Name it `AuraAI Tracking`.
3. Paste the whole of `custom-pixel.js`, with the two IDs filled in at the top.
4. **Customer privacy**: set **Permission** to *Not required* only if your legal
   position allows it for the UAE; otherwise leave the default and the pixel will
   respect the visitor's consent choice. Data sale opt-out: leave default.
5. **Save**, then **Connect**.

Nothing goes into theme files. The theme can be replaced without touching tracking.

## 4. Two Google corrections while you are in there

- **Target country**: the Google tag is currently set to `ZZ` (unset) and the shop
  still reports country India. Set the store's country to the UAE
  (Settings → General) so Google Ads and Merchant Center geo-target correctly.
- **Don't double-count purchases**: the Google & YouTube app already reports
  purchase to `AW-17737370052`. Once GA4 is linked to Google Ads, do **not** also
  import the GA4 `purchase` as a primary conversion. Pick one as primary and mark
  the other secondary.

## 5. Verify (do not skip — a saved pixel is not a working pixel)

**Meta**
- Events Manager → your dataset → **Test events** → open `https://gemsaura.store`
  with the test code appended, browse a product, add to cart.
- Expect: PageView, ViewContent, AddToCart, then InitiateCheckout and Purchase on
  a real test order. Purchase must show `order_id` and an `eventID`.
- Check **Event match quality** on Purchase afterwards; email + phone + name +
  city should be present because the pixel re-inits with advanced matching at
  checkout.

**GA4**
- Admin → **DebugView**, then browse the store with the GA Debugger extension on.
- Expect page_view, view_item, add_to_cart, begin_checkout, purchase, and
  `purchase` carrying `transaction_id`, `value` and `currency: AED`.

**Both**
- Place one real low-value test order and confirm exactly **one** Purchase in Meta
  and **one** in GA4. Two Purchases means the dedupe id is wrong — tell me before
  campaigns scale.

## 6. Backend webhook (code is written, waiting on config)

Endpoint: **`https://api.astroaura.ai/functions/v1/shopify-order-webhook-gemsaura`**

It writes the UAE orders to their own table (`gemsaura_orders`, migration 072),
parses the ad parameters off `landing_site` into real columns, and sends the Meta
Conversions API Purchase to the UAE dataset with `event_id` = the Shopify order
id — the same id the pixel above sends, which is what lets Meta deduplicate the
browser and server copies. It runs none of the India side effects: no order push,
no cashback, no iThink shipping, no India GA4/Amplitude.

### 6a. Create the webhook in the GemsAura admin

**Settings → Notifications → Webhooks → Create webhook**, once per topic, format
JSON, latest API version, URL as above:

| Topic | Why |
|---|---|
| `orders/create` | the order lands, attribution is parsed, Purchase is sent |
| `orders/paid` | fills in financial status when payment settles after creation |
| `orders/updated` | keeps status current (never overwrites the channel) |
| `orders/cancelled` | suppresses Purchase for cancelled orders |
| `fulfillments/create`, `fulfillments/update` | courier tracking |

At the bottom of that same page Shopify shows **"Your webhooks will be signed
with …"** — that string is the store's signing secret. Copy it.

### 6b. Server environment (`/opt/aura/.env` on the box, mode 600)

```
GEMSAURA_SHOPIFY_WEBHOOK_SECRET=   # from Settings → Notifications → Webhooks
GEMSAURA_META_DATASET_ID=          # step 1
GEMSAURA_META_CAPI_TOKEN=          # step 1, the Conversions API token
GEMSAURA_META_TEST_EVENT_CODE=     # optional, ONLY while testing — set it and
                                   # events go to Test Events and never count
```

Each is checked at send time: with the Meta pair unset the webhook still stores
orders and simply skips the Purchase, so it is safe to deploy before they exist.
With the secret unset every delivery is rejected with 500, which is deliberate —
an unverified webhook must never be trusted.

### 6c. Order of operations

1. Deploy the backend (binary + migration 072).
2. Add the secret to `.env`, restart.
3. Create the webhooks in Shopify.
4. Place one test order → check `gemsaura_orders` has the row with `channel`
   filled in, and `capi_purchase_sent_at` set exactly once.
5. Add the Meta dataset and token, restart, place another test order → confirm
   **one** Purchase in Meta (not two), with `fbc` present if you arrived by ad.
