"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { weddingData } from "@/config/wedding";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const bannerImages = [
  `${base}/banner/amber-martin-9pvTSsNV2T4-unsplash.jpg`,
  `${base}/banner/aperture-vintage-SshYpuf607g-unsplash.jpg`,
  `${base}/banner/marble.jpg`,
  `${base}/banner/nastasia-kalinina-uKXKSR7R7Qc-unsplash.jpg`,
  `${base}/banner/nikola-tomasic-U0PdX-CO5VQ-unsplash.jpg`,
  `${base}/banner/rene-bohmer-YeUVDKZWSZ4-unsplash.jpg`,
  `${base}/banner/susan-wilkinson-GaKIWjTppAU-unsplash.jpg`,
  `${base}/banner/vows-on-the-move-p0vZplFhKYI-unsplash.jpg`,
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((index: number) => {
    setFading(true);
    setTimeout(() => {
      setCurrent((index + bannerImages.length) % bannerImages.length);
      setFading(false);
    }, 400);
  }, []);

  useEffect(() => {
    const id = setInterval(() => goTo(current + 1), 6000);
    return () => clearInterval(id);
  }, [current, goTo]);

  const date = new Date(weddingData.weddingDate);
  const formatted = date.toLocaleDateString("pl-PL", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });

  return (
    <section className="relative overflow-hidden" style={{ height: "100svh", minHeight: "600px" }}>
      {/* Carousel background */}
      <img
        key={current}
        src={bannerImages[current]}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{
          transition: "opacity 0.4s ease",
          opacity: fading ? 0 : 1
        }}
      />

      {/* Couple photo on top */}
      <img
        src={`${base}/hero.jpg`}
        alt="Daria i Paweł"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* Prev / Next arrows */}
      <button
        onClick={() => goTo(current - 1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 transition-opacity hover:opacity-70"
        style={{ color: "rgba(255,255,255,0.5)" }}
        aria-label="Poprzednie zdjęcie"
      >
        <ChevronLeft size={32} strokeWidth={1} />
      </button>
      <button
        onClick={() => goTo(current + 1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 transition-opacity hover:opacity-70"
        style={{ color: "rgba(255,255,255,0.5)" }}
        aria-label="Następne zdjęcie"
      >
        <ChevronRight size={32} strokeWidth={1} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {bannerImages.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="w-1.5 h-1.5 rounded-full transition-all"
            style={{
              background: i === current ? "var(--secondary)" : "rgba(255,255,255,0.35)",
              transform: i === current ? "scale(1.4)" : "scale(1)"
            }}
            aria-label={`Zdjęcie ${i + 1}`}
          />
        ))}
      </div>

      {/* Bottom gradient with text */}
      <div
        className="absolute bottom-0 left-0 right-0 px-8 pb-16 pt-32 text-center z-10"
        style={{ background: "linear-gradient(to top, rgba(8,7,5,0.88) 40%, rgba(8,7,5,0.4) 70%, transparent)" }}
      >
        <div className="flex items-center justify-center gap-4 mb-5 max-w-xs mx-auto">
          <div className="flex-1 h-px" style={{ background: "rgba(201,164,108,0.35)" }} />
          <span style={{ color: "var(--secondary)", fontSize: "14px" }}>✦</span>
          <div className="flex-1 h-px" style={{ background: "rgba(201,164,108,0.35)" }} />
        </div>

        <h1
          className="text-6xl md:text-8xl text-white leading-none"
          style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
        >
          {weddingData.bride}
          <span style={{ color: "var(--secondary)" }}> & </span>
          {weddingData.groom}
        </h1>

        <p
          className="mt-4 text-sm uppercase tracking-[5px]"
          style={{ color: "rgba(201,164,108,0.75)", fontFamily: "var(--font-lato)" }}
        >
          {formatted}
        </p>

        <p
          className="mt-5 text-xs uppercase tracking-[4px]"
          style={{ color: "rgba(201,164,108,0.6)", fontFamily: "var(--font-lato)" }}
        >
          {weddingData.venue.name}
        </p>
        <a
          href={weddingData.venue.mapUrl}
          target="_blank"
          rel="nofollow noreferrer"
          className="mt-1 inline-block text-xs uppercase tracking-[3px] transition-opacity hover:opacity-60"
          style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-lato)" }}
        >
          Pokaż na mapie →
        </a>
      </div>
    </section>
  );
}
