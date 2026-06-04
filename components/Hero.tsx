"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";
import { weddingData } from "@/config/wedding";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Hero({ bannerImages }: { bannerImages: string[] }) {
  const images = bannerImages.map(src => `${base}${src}`);
  const [current, setCurrent] = useState(0);
  const [pickerOpen, setPickerOpen] = useState(false);

  const prev = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);

  const date = new Date(weddingData.weddingDate);
  const formatted = date.toLocaleDateString("pl-PL", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });

  return (
    <section className="relative overflow-hidden" style={{ height: "100svh", minHeight: "600px" }}>
      {/* Selected hero image */}
      <img
        src={images[current]}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ transition: "opacity 0.4s ease" }}
      />

      {/* Toggle picker button */}
      <button
        onClick={() => setPickerOpen(o => !o)}
        className="absolute top-4 right-4 z-30 p-2 rounded-full transition-opacity hover:opacity-80"
        style={{ background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.7)" }}
        aria-label="Wybierz zdjęcie tła"
      >
        <Images size={18} />
      </button>

      {/* Carousel picker */}
      {pickerOpen && (
        <div
          className="absolute top-14 right-4 z-30 p-3 rounded-xl flex flex-col gap-2"
          style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)" }}
        >
          <div className="flex items-center gap-2">
            <button onClick={prev} className="p-1 hover:opacity-70" style={{ color: "rgba(255,255,255,0.7)" }}>
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2 overflow-x-auto max-w-[260px]">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="flex-shrink-0 rounded overflow-hidden"
                  style={{
                    width: 52,
                    height: 52,
                    outline: i === current ? "2px solid var(--secondary)" : "none",
                    outlineOffset: 2
                  }}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <button onClick={next} className="p-1 hover:opacity-70" style={{ color: "rgba(255,255,255,0.7)" }}>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Bottom gradient with text */}
      <div
        className="absolute bottom-0 left-0 right-0 px-8 pb-12 pt-32 text-center z-10"
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
