import Image from "next/image";
import { weddingData } from "@/config/wedding";

export default function Hero() {
  const date = new Date(weddingData.weddingDate);
  const formatted = date.toLocaleDateString("pl-PL", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });

  return (
    <section className="relative overflow-hidden" style={{ height: "100svh", minHeight: "600px" }}>
      {/* Marble — fills any gap the photo doesn't cover */}
      <div className="absolute inset-0" style={{ filter: "blur(2px) brightness(0.92)" }}>
        <Image
          src="/marble.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Couple photo — fills the full viewport */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Daria i Paweł"
          fill
          priority
          className="object-cover object-top"
        />
      </div>

      {/* Bottom gradient with all text */}
      <div
        className="absolute bottom-0 left-0 right-0 px-8 pb-12 pt-32 text-center"
        style={{ background: "linear-gradient(to top, rgba(8,7,5,0.88) 40%, rgba(8,7,5,0.4) 70%, transparent)" }}
      >
        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-5 max-w-xs mx-auto">
          <div className="flex-1 h-px" style={{ background: "rgba(201,164,108,0.35)" }} />
          <span style={{ color: "var(--secondary)", fontSize: "14px" }}>✦</span>
          <div className="flex-1 h-px" style={{ background: "rgba(201,164,108,0.35)" }} />
        </div>

        {/* Names */}
        <h1
          className="text-6xl md:text-8xl text-white leading-none"
          style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
        >
          {weddingData.bride}
          <span style={{ color: "var(--secondary)" }}> & </span>
          {weddingData.groom}
        </h1>

        {/* Date */}
        <p
          className="mt-4 text-sm uppercase tracking-[5px]"
          style={{ color: "rgba(201,164,108,0.75)", fontFamily: "var(--font-lato)" }}
        >
          {formatted}
        </p>

        {/* Venue */}
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
