import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/siteConfig";

export const runtime = "edge";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(145deg, #F7F8F3 0%, #E8EFE4 45%, #D7E5D6 100%)",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              fontSize: 42,
              fontWeight: 800,
              color: "#16261C",
              letterSpacing: "-0.03em",
            }}
          >
            Pairings
          </div>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#D8402F",
              marginTop: -18,
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              color: "#16261C",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              maxWidth: 900,
            }}
          >
            {siteConfig.tagline}
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#4A5C51",
              maxWidth: 820,
              lineHeight: 1.35,
            }}
          >
            Match with nearby golfers by handicap, course, and play style — then
            lock in a real tee time.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              background: "#1F5B3A",
              color: "#F7F8F3",
              padding: "14px 28px",
              borderRadius: 999,
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            Free to use · Join the waitlist
          </div>
          <div style={{ fontSize: 22, color: "#1F5B3A", fontWeight: 700 }}>
            pairings.app
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
