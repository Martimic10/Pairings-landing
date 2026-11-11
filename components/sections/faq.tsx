"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { trackFaqOpened } from "@/lib/analytics";
import { siteConfig } from "@/lib/siteConfig";

export function FaqSection() {
  const { faq } = siteConfig.copy;

  return (
    <section id="faq" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:py-24">
        <h2 className="text-center text-[1.75rem] font-extrabold tracking-tight text-black sm:text-3xl lg:text-4xl">
          {faq.headline}
        </h2>

        <Accordion
          type="single"
          collapsible
          className="mt-8 space-y-2.5 sm:mt-10 sm:space-y-3"
          onValueChange={(value) => {
            if (!value) return;
            const item = faq.items[Number(value)];
            if (item) trackFaqOpened(item.question);
          }}
        >
          {faq.items.map((item, index) => (
            <AccordionItem
              key={item.question}
              value={String(index)}
              className="rounded-2xl border border-[#ececec] bg-white px-4 shadow-none sm:px-5"
            >
              <AccordionTrigger className="py-4 text-left text-[15px] font-medium text-black hover:no-underline sm:py-5 sm:text-base">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-[15px] leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
