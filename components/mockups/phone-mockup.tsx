import { AppScreenshot } from "@/components/mockups/app-screenshot";
import { cn } from "@/lib/utils";

type PhoneMockupProps = {
  className?: string;
  /** Kept for API compatibility with older call sites. */
  active?: boolean;
};

/** Hero / CTA phone — discover screen. */
export function PhoneMockup({ className }: PhoneMockupProps) {
  return (
    <AppScreenshot
      mockup="discover"
      priority
      className={cn("mx-auto", className)}
    />
  );
}
