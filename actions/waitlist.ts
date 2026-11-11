"use server";

import { headers } from "next/headers";

import { getClientIp, rateLimit } from "@/lib/rate-limit";
import { getSupabaseAdmin, isSupabaseConfigured } from "@/lib/supabase";
import { waitlistSchema } from "@/lib/validators";

export type WaitlistActionState = {
  status: "idle" | "success" | "duplicate" | "error";
  message: string;
  fieldErrors?: Record<string, string[]>;
};

export async function submitWaitlist(
  raw: unknown,
): Promise<WaitlistActionState> {
  const headerStore = await headers();
  const ip = getClientIp(headerStore);
  const limited = rateLimit(`waitlist:${ip}`);

  if (!limited.success) {
    return {
      status: "error",
      message: "Too many attempts. Please wait a minute and try again.",
    };
  }

  const parsed = waitlistSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: Record<string, string[]> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path.join(".") || "form";
      fieldErrors[key] ??= [];
      fieldErrors[key].push(issue.message);
    }
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      fieldErrors,
    };
  }

  const data = parsed.data;

  // Honeypot tripped
  if (data.website) {
    return {
      status: "success",
      message: "You're on the list! We'll be in touch.",
    };
  }

  if (!isSupabaseConfigured()) {
    console.error("Supabase env vars are not configured");
    return {
      status: "error",
      message:
        "Waitlist is temporarily unavailable. Email us or try again soon.",
    };
  }

  try {
    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("waitlist").insert({
      email: data.email.toLowerCase().trim(),
      city: data.city,
      moved_recently: data.movedRecently || null,
      other_city: data.city === "other" ? data.otherCity?.trim() || null : null,
      source: data.source || null,
      referrer: data.referrer || null,
    });

    if (error) {
      if (error.code === "23505") {
        return {
          status: "duplicate",
          message: "You're already on the list!",
        };
      }
      console.error("Waitlist insert error:", error.message);
      return {
        status: "error",
        message: "Something went wrong. Please try again.",
      };
    }

    return {
      status: "success",
      message: "You're on the list! We'll be in touch.",
    };
  } catch (err) {
    console.error("Waitlist unexpected error:", err);
    return {
      status: "error",
      message:
        "Waitlist is temporarily unavailable. Email us or try again soon.",
    };
  }
}

export async function getCityWaitlistCount(
  city: string,
): Promise<{ count: number | null; error?: string }> {
  if (!city || city === "other") {
    return { count: null };
  }

  if (!isSupabaseConfigured()) {
    return { count: null };
  }

  try {
    const supabase = getSupabaseAdmin();
    const { count, error } = await supabase
      .from("waitlist")
      .select("*", { count: "exact", head: true })
      .eq("city", city);

    if (error) {
      console.error("City count error:", error.message);
      return { count: null, error: error.message };
    }

    return { count: count ?? 0 };
  } catch (err) {
    console.error("City count unexpected error:", err);
    return { count: null };
  }
}
