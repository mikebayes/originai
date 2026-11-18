"use client";

import { useEffect, useRef } from "react";

/**
 * The workflow animation on /services/build.
 *
 * Plays once per visit to the section: it starts from the beginning when
 * the visitor scrolls it into view, runs to the end, and then holds on
 * the final Origin frame. It does not loop. Scrolling away resets it, so
 * coming back plays it again from the start.
 *
 * This is the page's only client component. Markup and CSS cannot start
 * playback on scroll, and CSS cannot pause a video, so the viewport and
 * reduced-motion behaviour both have to live in JS.
 *
 * Notably NOT on the element:
 *
 *   loop     removed, because the animation now has to stop on its last
 *            frame rather than restart.
 *   autoPlay removed, because it fires on load regardless of where the
 *            section is. That would burn the single play before anyone
 *            had scrolled to it. The observer is the only thing that
 *            starts playback now.
 *
 * muted is what makes programmatic play() legal without a user gesture
 * in every current browser, and playsInline is what stops iOS Safari
 * taking it fullscreen. Neither is optional.
 */

/* Ratio at which the section counts as "substantially visible" and the
   animation starts. The reset happens only at ratio 0, when the element
   is fully out of view, which leaves 0 to 0.5 as a dead band: small
   scrolls and address-bar resizes move through it without retriggering
   anything, and the reset is never visible on screen because by the time
   it happens there is nothing left to see. */
const PLAY_AT = 0.5;

export default function WorkflowVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    /* Reduced motion gets the poster as a static frame and a control bar,
       so the animation is still reachable on demand rather than simply
       absent. Controls stay off for everyone else. */
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

    /* Tracks which side of the dead band we are on, so entering the
       section fires once rather than on every observer callback. */
    let armed = false;
    let observer: IntersectionObserver | undefined;

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.intersectionRatio >= PLAY_AT) {
              if (armed) continue;
              armed = true;
              if (reduce.matches) continue;
              el.currentTime = 0;
              /* play() rejects if the browser declines playback. Nothing
                 useful to do about it, and an unhandled rejection would
                 surface in the console, so swallow it and leave the
                 poster showing. */
              void el.play().catch(() => {});
            } else if (!entry.isIntersecting) {
              if (!armed) continue;
              armed = false;
              el.pause();
              el.currentTime = 0;
            }
            /* Anything between the two is the dead band: leave playback
               exactly as it is. */
          }
        },
        { threshold: [0, PLAY_AT] }
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
      muted
      playsInline
      preload="metadata"
      aria-label="An animated example showing a customer quote request being read, drafted, approved by a person, and answered"
    />
  );
}
