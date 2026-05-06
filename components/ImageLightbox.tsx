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
  /** Optional small mono-caps metadata line shown above the title in the
   *  caption block (e.g. "CUSTOM SOFTWARE · 2026 · MARKETING COMPANY"). */
  meta?: string;
  /** Optional caption title rendered as an h3 below the image. */
  title?: string;
  /** Optional caption description paragraph rendered below the title. */
  description?: string;
};

/**
 * Image lightbox — opens a centered modal with the full-size image and a
 * close button. Click backdrop, click ✕, or press Escape to close.
 *
 * Used by the example-builds cards on the build page so visitors can view
 * the screenshot in detail without leaving the page. When meta/title/
 * description props are supplied, a caption block renders below the image
 * (museum-exhibit pattern) so the build is properly explained at full
 * size, not just shown.
 */
export default function ImageLightbox({
  src,
  alt,
  children,
  className,
  ariaLabel,
  meta,
  title,
  description,
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

  const hasCaption = Boolean(meta || title || description);

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
          {/* Stop bubbling on the inner figure so clicking the image or
              caption doesn't close the modal — only the backdrop and
              ✕ button close it. */}
          <figure
            className="lightbox-figure"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={src} alt={alt} className="lightbox-image" />
            {hasCaption && (
              <figcaption className="lightbox-caption">
                {meta && <div className="lightbox-caption-meta">{meta}</div>}
                {title && (
                  <h3 className="lightbox-caption-title">{title}</h3>
                )}
                {description && (
                  <p className="lightbox-caption-desc">{description}</p>
                )}
              </figcaption>
            )}
          </figure>
        </div>
      )}
    </>
  );
}
