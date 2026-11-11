import { z } from "zod";

import { siteConfig } from "@/lib/siteConfig";

const cityValues = siteConfig.launchCities.map((c) => c.value) as [
  string,
  ...string[],
];

const movedValues = siteConfig.movedOptions.map((o) => o.value) as [
  string,
  ...string[],
];

export const waitlistSchema = z
  .object({
    email: z.email("Enter a valid email address"),
    city: z.enum(cityValues, { error: "Choose a city" }),
    movedRecently: z.union([z.enum(movedValues), z.literal("")]).optional(),
    otherCity: z
      .string()
      .max(120, "Keep it under 120 characters")
      .optional()
      .or(z.literal("")),
    /** Honeypot — must stay empty. */
    website: z.string().max(0, "Invalid").optional().or(z.literal("")),
    source: z.string().max(120).optional().or(z.literal("")),
    referrer: z.string().max(500).optional().or(z.literal("")),
  })
  .superRefine((data, ctx) => {
    if (data.city === "other" && !data.otherCity?.trim()) {
      ctx.addIssue({
        code: "custom",
        path: ["otherCity"],
        message: "Tell us which city you're in",
      });
    }
  });

export type WaitlistInput = z.infer<typeof waitlistSchema>;
