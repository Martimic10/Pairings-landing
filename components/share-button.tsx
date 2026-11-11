"use client";

import { Check, Link2, Share2 } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/siteConfig";

export function ShareButton() {
  const [copied, setCopied] = useState(false);
  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    setCanShare(typeof navigator !== "undefined" && typeof navigator.share === "function");
  }, []);

  const share = async () => {
    const url = siteConfig.url;
    const payload = {
      title: siteConfig.name,
      text: `${siteConfig.tagline} Join the waitlist.`,
      url,
    };

    try {
      if (canShare) {
        await navigator.share(payload);
        return;
      }
    } catch {
      // User cancelled or share failed — fall through to copy.
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <Button type="button" variant="outline" size="lg" onClick={share}>
      {copied ? (
        <>
          <Check />
          {siteConfig.copy.thanks.shareCopied}
        </>
      ) : canShare ? (
        <>
          <Share2 />
          {siteConfig.copy.thanks.shareLabel}
        </>
      ) : (
        <>
          <Link2 />
          {siteConfig.copy.thanks.shareLabel}
        </>
      )}
    </Button>
  );
}
