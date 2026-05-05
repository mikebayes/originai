"use client";

import { useEffect, useState } from "react";

type Props = {
  /** Path to the full-size image. */
  src: string;
  /** Alt text for both the trigger thumbnail (provided by children) and the
   *  full-size image inside the modal. */
  alt: string;
  /** Render the trigger UI (the thumbnail card area). The whole subtree
   *  becomes clickable; clicking opens the modal. */
  children: React.ReactNode;
  /** Optional className applied to the trigger button so callers can pass
   *  the existing thumbnail styles through. */
  className?: string;
  /** Optional aria-label for the trigger button. */
  ariaLabel?: string;
};

/**
 * Image lightbox — opens a centered modal with the full-size image and a
 * close button. Click backdrop, click ✕, or press Escape to close.
 *
 * Used by the example-builds cards on the build page so visitors can view
 * the screenshot in detail without leaving the page.
 */
export default function ImageLightbox({
  src,
  alt,
  children,
  className,
  ariaLabel,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  // Close on Escape, lock body scroll while open.
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => setIsOpen(true)}
        aria-label={ariaLabel ?? `Open ${alt} at full size`}
      >
        {children}
      </button>

      {isOpen && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            className="lightbox-close"
            aria-label="Close image"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
          >
            ✕
          </button>
          <img
            src={src}
            alt={alt}
            className="lightbox-image"
            // Stop bubbling so clicking the image doesn't close — only the
            // backdrop and ✕ button close the modal.
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
