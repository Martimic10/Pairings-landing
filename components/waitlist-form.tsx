"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import { submitWaitlist } from "@/actions/waitlist";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { trackCitySelected, trackWaitlistSubmitted } from "@/lib/analytics";
import { siteConfig } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";
import { waitlistSchema, type WaitlistInput } from "@/lib/validators";

type WaitlistFormProps = {
  id?: string;
  compact?: boolean;
  /** Stacked fields + black pill button for the final CTA panel */
  panel?: boolean;
  className?: string;
  analyticsContext?: string;
};

export function WaitlistForm({
  id = "waitlist",
  compact = false,
  panel = false,
  className,
  analyticsContext = "form",
}: WaitlistFormProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [referrer, setReferrer] = useState("");
  const [source, setSource] = useState("");

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
    setError,
  } = useForm<WaitlistInput>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      email: "",
      city: undefined,
      movedRecently: "",
      otherCity: "",
      website: "",
      source: "",
      referrer: "",
    },
  });

  const city = watch("city");

  useEffect(() => {
    if (typeof window === "undefined") return;
    setReferrer(document.referrer || "");
    const params = new URLSearchParams(window.location.search);
    const ref = params.get("ref");
    if (ref) setSource(ref);
  }, []);

  if (siteConfig.showAppStoreCta) {
    return (
      <div className={cn("flex flex-col gap-3", className)}>
        <Button
          asChild
          size="lg"
          className={cn(
            "w-full sm:w-auto",
            panel &&
              "rounded-full bg-black text-white hover:bg-black/90 focus-visible:ring-black",
          )}
        >
          <a href={siteConfig.appStoreUrl}>
            {siteConfig.copy.hero.appStoreCtaLabel}
          </a>
        </Button>
      </div>
    );
  }

  const onSubmit = (values: WaitlistInput) => {
    startTransition(async () => {
      const result = await submitWaitlist({
        ...values,
        source: source || values.source || "",
        referrer: referrer || values.referrer || "",
      });

      if (result.fieldErrors) {
        for (const [key, messages] of Object.entries(result.fieldErrors)) {
          setError(key as keyof WaitlistInput, {
            message: messages[0],
          });
        }
      }

      if (result.status === "success") {
        trackWaitlistSubmitted(values.city);
        toast.success(result.message);
        router.push("/thanks");
        return;
      }

      if (result.status === "duplicate") {
        toast.message(result.message);
        return;
      }

      toast.error(result.message);
    });
  };

  return (
    <form
      id={id}
      onSubmit={handleSubmit(onSubmit)}
      className={cn("space-y-4", className)}
      noValidate
    >
      {/* Honeypot — hidden from users and assistive tech */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
        {...register("website")}
      />

      <div
        className={cn(
          "grid gap-3",
          panel
            ? "grid-cols-1"
            : compact
              ? "grid-cols-1 md:grid-cols-[1.2fr_1fr_auto]"
              : "grid-cols-1 sm:grid-cols-2",
        )}
      >
        <div className="space-y-1.5 sm:col-span-1">
          <Label
            htmlFor={`${id}-email`}
            className={compact || panel ? "sr-only" : undefined}
          >
            Email
          </Label>
          <Input
            id={`${id}-email`}
            type="email"
            autoComplete="email"
            placeholder="you@email.com"
            aria-invalid={!!errors.email}
            className={panel ? "h-12 rounded-full bg-white" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-[var(--accent)]" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label
            htmlFor={`${id}-city`}
            className={compact || panel ? "sr-only" : undefined}
          >
            City
          </Label>
          <Controller
            control={control}
            name="city"
            render={({ field }) => (
              <Select
                value={field.value}
                onValueChange={(value) => {
                  field.onChange(value);
                  trackCitySelected(value, analyticsContext);
                }}
              >
                <SelectTrigger
                  id={`${id}-city`}
                  aria-invalid={!!errors.city}
                  className={cn(
                    "w-full",
                    panel && "h-12 rounded-full bg-white",
                  )}
                >
                  <SelectValue placeholder="Your city" />
                </SelectTrigger>
                <SelectContent>
                  {siteConfig.launchCities.map((c) => (
                    <SelectItem key={c.value} value={c.value}>
                      {c.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.city && (
            <p className="text-xs text-[var(--accent)]" role="alert">
              {errors.city.message}
            </p>
          )}
        </div>

        {compact && !panel && (
          <div className="flex items-end">
            <Button
              type="submit"
              size="lg"
              className="h-12 w-full rounded-full"
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <Loader2 className="animate-spin" />
                  Joining…
                </>
              ) : (
                siteConfig.copy.hero.ctaLabel
              )}
            </Button>
          </div>
        )}
      </div>

      {city === "other" && (
        <div className="space-y-1.5">
          <Label htmlFor={`${id}-other-city`}>Which city?</Label>
          <Input
            id={`${id}-other-city`}
            placeholder="City, State"
            aria-invalid={!!errors.otherCity}
            {...register("otherCity")}
          />
          {errors.otherCity && (
            <p className="text-xs text-[var(--accent)]" role="alert">
              {errors.otherCity.message}
            </p>
          )}
        </div>
      )}

      {!compact && !panel && (
        <div className="space-y-1.5">
          <Label htmlFor={`${id}-moved`}>How long since you moved? (optional)</Label>
          <Controller
            control={control}
            name="movedRecently"
            render={({ field }) => (
              <Select
                value={field.value || undefined}
                onValueChange={field.onChange}
              >
                <SelectTrigger id={`${id}-moved`}>
                  <SelectValue placeholder="Select one" />
                </SelectTrigger>
                <SelectContent>
                  {siteConfig.movedOptions.map((o) => (
                    <SelectItem key={o.value} value={o.value}>
                      {o.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>
      )}

      {(panel || !compact) && (
        <Button
          type="submit"
          size="lg"
          className={cn(
            panel
              ? "mt-1 h-12 w-full rounded-full bg-black text-white hover:bg-black/90 focus-visible:ring-black"
              : "h-12 w-full rounded-full sm:w-auto",
          )}
          disabled={isPending}
        >
          {isPending ? (
            <>
              <Loader2 className="animate-spin" />
              Joining…
            </>
          ) : (
            siteConfig.copy.hero.ctaLabel
          )}
        </Button>
      )}

      {!panel && (
        <p className="text-xs text-[var(--muted-foreground)]">
          {siteConfig.copy.hero.trustLine}
        </p>
      )}
    </form>
  );
}
