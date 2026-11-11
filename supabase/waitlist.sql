-- Pairings waitlist table
-- Run this in the Supabase SQL editor.
-- RLS is enabled with NO public policies — inserts happen only via
-- the service role key on the server (Next.js Server Actions).

create extension if not exists "pgcrypto";

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  city text not null,
  moved_recently text,
  other_city text,
  created_at timestamptz not null default now(),
  source text,
  referrer text,
  constraint waitlist_email_unique unique (email)
);

create index if not exists waitlist_city_idx on public.waitlist (city);
create index if not exists waitlist_created_at_idx on public.waitlist (created_at desc);

alter table public.waitlist enable row level security;

-- Intentionally no policies for anon/authenticated.
-- Service role bypasses RLS for server-side inserts and counts.

comment on table public.waitlist is 'Marketing waitlist signups; server-only access via service role.';
