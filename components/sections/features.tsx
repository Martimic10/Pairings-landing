"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
} from "motion/react";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";

import {
  AppScreenshot,
  type MockupKey,
} from "@/components/mockups/app-screenshot";
import { siteConfig } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";

const DRAG_THRESHOLD = 48;

export function FeaturesSection() {
  const { features } = siteConfig.copy;
  const slides = features.slides;
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [itemWidth, setItemWidth] = useState(300);
  const reduceMotion = useReducedMotion();

  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const itemWidthRef = useRef(300);
  const draggingRef = useRef(false);
  const pointerStartX = useRef(0);
  const startX = useRef(0);
  const didDrag = useRef(false);

  const x = useMotionValue(0);

  indexRef.current = index;
  itemWidthRef.current = itemWidth;

  const targetXForIndex = useCallback((i: number, width: number, viewportWidth: number) => {
    const centerOffset = viewportWidth / 2 - width / 2;
    return centerOffset - i * width;
  }, []);

  const getViewportWidth = () => viewportRef.current?.offsetWidth ?? 0;

  const snapTo = useCallback(
    (next: number) => {
      const width = itemWidthRef.current;
      const viewportWidth = getViewportWidth();
      const clamped = Math.max(0, Math.min(slides.length - 1, next));
      setIndex(clamped);
      indexRef.current = clamped;
      const destination = targetXForIndex(clamped, width, viewportWidth);
      if (reduceMotion) {
        x.set(destination);
        return;
      }
      animate(x, destination, {
        type: "spring",
        stiffness: 300,
        damping: 34,
        mass: 0.85,
      });
    },
    [reduceMotion, slides.length, targetXForIndex, x],
  );

  const measure = useCallback(() => {
    const first = trackRef.current?.querySelector<HTMLElement>("[data-slide]");
    const viewportWidth = getViewportWidth();
    if (!first || !viewportWidth) return;
    const width = first.offsetWidth;
    setItemWidth(width);
    itemWidthRef.current = width;
    x.set(targetXForIndex(indexRef.current, width, viewportWidth));
  }, [targetXForIndex, x]);

  useLayoutEffect(() => {
    measure();
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [measure]);

  const go = useCallback(
    (direction: -1 | 1) => {
      snapTo(indexRef.current + direction);
    },
    [snapTo],
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("input, textarea, select, [contenteditable=true]")) {
        return;
      }
      if (event.key === "ArrowLeft") go(-1);
      if (event.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [go]);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    draggingRef.current = true;
    didDrag.current = false;
    setIsDragging(true);
    pointerStartX.current = event.clientX;
    startX.current = x.get();
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    const delta = event.clientX - pointerStartX.current;
    if (Math.abs(delta) > 6) didDrag.current = true;
    x.set(startX.current + delta);
  };

  const endDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    setIsDragging(false);
    const delta = event.clientX - pointerStartX.current;

    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {
      // already released
    }

    if (Math.abs(delta) >= DRAG_THRESHOLD) {
      snapTo(indexRef.current + (delta < 0 ? 1 : -1));
      return;
    }

    const viewportWidth = getViewportWidth();
    const width = itemWidthRef.current;
    const centerOffset = viewportWidth / 2 - width / 2;
    const nearest = Math.round((centerOffset - x.get()) / width);
    snapTo(nearest);
  };

  return (
    <section id="features" className="scroll-mt-24 overflow-hidden bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.75rem] font-extrabold tracking-tight text-black sm:text-3xl lg:text-4xl">
            {features.headline}
          </h2>
          <p className="mt-3 text-[15px] text-black/55 sm:text-base lg:text-lg">
            {features.subhead}
          </p>
        </div>

        <div
          ref={viewportRef}
          className={cn(
            "relative mt-8 touch-pan-y select-none sm:mt-12",
            isDragging ? "cursor-grabbing" : "cursor-grab",
          )}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          role="region"
          aria-roledescription="carousel"
          aria-label="App feature mockups"
        >
          <div className="relative mx-auto h-[560px] w-full overflow-hidden sm:h-[620px] lg:h-[680px]">
            <motion.div
              ref={trackRef}
              className="absolute top-0 left-0 flex h-full items-center will-change-transform"
              style={{ x }}
            >
              {slides.map((slide, slideIndex) => {
                const distance = Math.abs(slideIndex - index);
                const isActive = slideIndex === index;

                return (
                  <div
                    key={slide.id}
                    data-slide
                    className="flex w-[260px] shrink-0 items-center justify-center px-3 sm:w-[300px] sm:px-4 lg:w-[320px] lg:px-5"
                  >
                    <motion.div
                      className="rounded-[2.75rem]"
                      animate={{
                        scale: isActive ? 1 : distance === 1 ? 0.9 : 0.82,
                        opacity: isActive ? 1 : distance === 1 ? 0.4 : 0.18,
                      }}
                      transition={
                        reduceMotion
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 280, damping: 30 }
                      }
                      aria-hidden={!isActive}
                      onClick={() => {
                        if (didDrag.current) return;
                        snapTo(slideIndex);
                      }}
                    >
                      <AppScreenshot
                        mockup={slide.mockup as MockupKey}
                        className="w-[240px] sm:w-[270px] lg:w-[290px]"
                        priority={slideIndex === 0}
                      />
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>

        <div className="relative z-10 mt-8 flex flex-col items-center gap-5 sm:mt-10">
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              disabled={index === 0}
              className="inline-flex size-11 items-center justify-center rounded-full bg-[#e9e9e9] transition-colors hover:bg-[#dddddd] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] disabled:opacity-40 sm:size-12"
              aria-label="Previous mockup"
            >
              <ChevronLeft className="size-5 text-black/50" strokeWidth={2.5} />
            </button>
            <div className="flex items-center gap-1.5 px-1" aria-hidden="true">
              {slides.map((slide, i) => (
                <span
                  key={slide.id}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    i === index ? "w-4 bg-black" : "w-1.5 bg-black/20",
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              disabled={index === slides.length - 1}
              className="inline-flex size-11 items-center justify-center rounded-full bg-[#e9e9e9] transition-colors hover:bg-[#dddddd] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] disabled:opacity-40 sm:size-12"
              aria-label="Next mockup"
            >
              <ChevronRight className="size-5 text-black/50" strokeWidth={2.5} />
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={slides[index]?.id}
              initial={reduceMotion ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="max-w-md px-2 text-center"
            >
              <p className="text-base font-extrabold text-black sm:text-lg lg:text-xl">
                {slides[index]?.title}
              </p>
              <p className="mt-2 text-sm text-black/55 sm:text-base">
                {slides[index]?.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
