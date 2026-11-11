# Pairings — marketing & waitlist site

Landing site for **Pairings**, a free iOS app that helps golfers who just moved find playing partners nearby.

Stack: Next.js 15 (App Router), TypeScript, Tailwind CSS v4, shadcn-style UI, Motion, Supabase waitlist, Vercel Analytics & Speed Insights.

## Local setup

1. **Install pnpm** (if needed):

   ```bash
   npm install -g pnpm
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Configure env vars:**

   ```bash
   cp .env.example .env.local
   ```

   Fill in:

   | Variable | Where it lives | Notes |
   | --- | --- | --- |
   | `NEXT_PUBLIC_SITE_URL` | Client + server | e.g. `http://localhost:3000` locally; production domain in Vercel |
   | `NEXT_PUBLIC_SUPABASE_URL` | Client + server | Supabase project URL |
   | `SUPABASE_SERVICE_ROLE_KEY` | **Server only** | Never expose to the browser or commit to git |

4. **Create the waitlist table** in the Supabase SQL editor:

   Run [`supabase/waitlist.sql`](./supabase/waitlist.sql).  
   RLS is enabled with **no public policies** — only the service role (used by Server Actions) can insert/read.

5. **Start the dev server:**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Local development (Turbopack) |
| `pnpm build` | Production build |
| `pnpm start` | Run production build |
| `pnpm lint` | ESLint |
| `pnpm format` | Prettier write |
| `pnpm format:check` | Prettier check |

## Editing copy & launch cities

All marketing copy, city list, contact email, and the launch flag live in:

```
lib/siteConfig.ts
```

Edit there — components read from this file.

## Flip to App Store CTA (post-launch)

In `lib/siteConfig.ts`:

1. Set `LAUNCHED: true`
2. Set `appStoreUrl` to your real App Store link
3. Set `appleAppId` to your numeric Apple app ID (enables the Smart App Banner meta tag)

When `LAUNCHED` is true, waitlist forms automatically become App Store download buttons.

## Waitlist behavior

- Fields: email, city, optional “how long since you moved?”, optional free-text city when “Somewhere else” is selected
- Zod validation on client + server
- Server Action inserts into `waitlist`
- Duplicate emails return a friendly “You’re already on the list!” message
- Honeypot field + IP rate limiting (5 requests / minute)
- Optional `?ref=code` is stored as `source`
- Events: `waitlist_submitted`, `city_selected`, `faq_opened` (Vercel Analytics)

City waitlist counts in the “Built for newcomers” section only display when the count is **above 25**.

## Deploy to Vercel

1. Push this repo to GitHub (or connect the folder in the Vercel dashboard).
2. **Import** the project in [Vercel](https://vercel.com/new).
3. Framework preset: **Next.js**. Install command: `pnpm install`.
4. Add environment variables (Production + Preview as needed):
   - `NEXT_PUBLIC_SITE_URL` → `https://your-domain.com`
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
5. Deploy.
6. **Custom domain:** Project → Settings → Domains → add `pairings.app` (or your domain) and follow DNS instructions (usually an `A`/`CNAME` at your registrar).
7. Confirm `NEXT_PUBLIC_SITE_URL` matches the canonical production URL (used for metadata, sitemap, OG, and share links).

Analytics and Speed Insights work automatically on Vercel — no cookie banner (privacy-friendly, no advertising cookies).

## Project structure

```
app/                 # Routes, metadata, OG image, sitemap, robots
actions/             # Server Actions (waitlist)
components/
  ui/                # Button, Input, Select, Accordion, etc.
  sections/          # Landing page sections
  mockups/           # Code-built phone / swipe mockup
lib/
  siteConfig.ts      # Copy, cities, LAUNCHED flag
  validators.ts      # Zod schemas
  supabase.ts        # Server-only Supabase client
  rate-limit.ts      # Simple IP rate limit
supabase/
  waitlist.sql       # Table + RLS
public/patterns/     # Fairway topo SVG background
```

## Pre-launch checklist

- [ ] Run `supabase/waitlist.sql` on the production Supabase project
- [ ] Env vars set in Vercel (especially service role key — server only)
- [ ] `NEXT_PUBLIC_SITE_URL` is the real production URL
- [ ] Legal pages (`/privacy`, `/terms`, `/guidelines`, `/support`) reviewed by a lawyer
- [ ] Contact / support emails in `siteConfig` are real inboxes
- [ ] Test waitlist submit, duplicate email, “Somewhere else”, and `?ref=`
- [ ] Test share on `/thanks` (Web Share + clipboard fallback)
- [ ] Lighthouse pass (aim 95+); check mobile layout and `prefers-reduced-motion`
- [ ] When the app ships: flip `LAUNCHED`, set App Store URL + Apple app ID

## License

Private — all rights reserved.
