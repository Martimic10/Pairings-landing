"use client";

import { useEffect, useState, useTransition } from "react";

import { getCityWaitlistCount } from "@/actions/waitlist";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { trackCitySelected } from "@/lib/analytics";
import { getCityLabel, siteConfig } from "@/lib/siteConfig";

export function NewcomersSection() {
  const { newcomers } = siteConfig.copy;
  const cities = siteConfig.launchCities.filter((c) => c.value !== "other");
  const [city, setCity] = useState<string>(cities[0]?.value ?? "austin");
  const [count, setCount] = useState<number | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    let cancelled = false;
    startTransition(async () => {
      const result = await getCityWaitlistCount(city);
      if (!cancelled) {
        setCount(result.count);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [city]);

  const label = getCityLabel(city);
  const showCount =
    typeof count === "number" && count > siteConfig.cityCountThreshold;

  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:gap-10 sm:px-6 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
        <div className="text-center lg:text-left">
          <h2 className="text-[1.75rem] font-extrabold tracking-tight text-black sm:text-3xl lg:text-4xl">
            {newcomers.headline}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-black/55 sm:mt-4 sm:text-base lg:mx-0 lg:text-lg">
            {newcomers.subhead}
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-[var(--border)] bg-white p-5 shadow-sm sm:rounded-3xl sm:p-8">
          <label
            htmlFor="newcomers-city"
            className="text-sm font-semibold text-black"
          >
            {newcomers.pickCityLabel}
          </label>
          <div className="mt-3">
            <Select
              value={city}
              onValueChange={(value) => {
                setCity(value);
                trackCitySelected(value, "newcomers");
              }}
            >
              <SelectTrigger id="newcomers-city" className="h-12 rounded-xl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {cities.map((c) => (
                  <SelectItem key={c.value} value={c.value}>
                    {c.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div
            className="mt-5 min-h-[4.5rem] rounded-2xl bg-[#f3f3f3] px-4 py-5 sm:mt-6"
            aria-live="polite"
          >
            {isPending && count === null ? (
              <p className="text-sm text-black/50">Checking {label}…</p>
            ) : showCount ? (
              <p className="text-xl font-extrabold tracking-tight text-black sm:text-2xl">
                {newcomers.countTemplate.replace("{count}", String(count))}
              </p>
            ) : (
              <p className="text-base font-extrabold text-black sm:text-lg">
                {newcomers.firstInTown.replace("{city}", label)}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
