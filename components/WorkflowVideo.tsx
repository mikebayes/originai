"use client";

import { useEffect, useRef } from "react";

/**
 * The looping workflow animation on /services/build.
 *
 * This is the only client component on that page. It exists for two
 * behaviours that cannot be done in markup or CSS:
 *
 *   1. Play only while on screen. An autoplaying loop that runs the
 *      whole time the page is open decodes 60fps video for nothing.
 *   2. Honour prefers-reduced-motion. CSS cannot pause a video, so the
 *      check has to happen in JS.
 *
 * The element still ships autoPlay/muted/loop/playsInline in the markup
 * so it behaves correctly with no JS at all: it simply plays, which is
 * the same thing it did before this component existed.
 *
 * muted is what makes autoplay legal in every current browser, and
 * playsInline is what stops iOS Safari taking it fullscreen. Neither is
 * optional here.
 */
export default function WorkflowVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    /* Reduced motion: stop the loop and hand back a control bar, so the
       animation is still reachable on demand rather than simply gone.
       Controls are off for everyone else, which is the whole point of
       the change. */
    const applyMotionPreference = () => {
      if (reduce.matches) {
        el.pause();
        el.currentTime = 0;
        el.controls = true;
      } else {
        el.controls = false;
      }
    };

    applyMotionPreference();
    reduce.addEventListener("change", applyMotionPreference);

    let observer: IntersectionObserver | undefined;

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (reduce.matches) return;
            if (entry.isIntersecting) {
              /* play() rejects if the browser declines autoplay. There
                 is nothing useful to do about that, and an unhandled
                 rejection would show up in the console, so swallow it
                 and leave the poster showing. */
              void el.play().catch(() => {});
            } else {
              el.pause();
            }
          }
        },
        /* A quarter visible. Lower would start it while it is still a
           sliver at the edge of the viewport. */
        { threshold: 0.25 }
      );

      observer.observe(el);
    }

    return () => {
      reduce.removeEventListener("change", applyMotionPreference);
      observer?.disconnect();
    };
  }, []);

  return (
    <video
      ref={ref}
      className="bp-demo-video"
      src="/videos/origin-ai-the-quote-request-web-embed.mp4"
      poster="/videos/origin-ai-the-quote-request-web-embed-poster.webp"
      width={720}
      height={720}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label="An animated example showing a customer quote request being read, drafted, approved by a person, and answered"
    />
  );
}
