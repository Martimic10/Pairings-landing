"use client";

import { track } from "@vercel/analytics";

export function trackWaitlistSubmitted(city: string) {
  track("waitlist_submitted", { city });
}

export function trackCitySelected(city: string, context: string) {
  track("city_selected", { city, context });
}

export function trackFaqOpened(question: string) {
  track("faq_opened", { question });
}
