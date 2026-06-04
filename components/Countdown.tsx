"use client";

import { useEffect, useState } from "react";
import { weddingData } from "@/config/wedding";

const LABELS: Record<string, string> = {
  days: "dni",
  hours: "godzin",
  minutes: "minut",
  seconds: "sekund"
};

export default function Countdown() {
  const [time, setTime] = useState<Record<string, number>>({});

  useEffect(() => {
    const tick = () => {
      const diff = new Date(weddingData.weddingDate).getTime() - Date.now();
      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="py-20 text-center"
      style={{ backgroundColor: "var(--primary)" }}
    >
      <p
        className="uppercase tracking-[5px] text-xs mb-10"
        style={{ color: "rgba(201,164,108,0.7)", fontFamily: "var(--font-lato)" }}
      >
        do ślubu pozostało
      </p>

      <div className="flex justify-center gap-8 md:gap-16">
        {Object.entries(time).map(([key, val]) => (
          <div key={key} className="flex flex-col items-center">
            <span
              className="text-5xl md:text-7xl leading-none"
              style={{
                color: "var(--secondary)",
                fontFamily: "var(--font-cormorant)",
                fontWeight: 300
              }}
            >
              {String(val).padStart(2, "0")}
            </span>
            <span
              className="mt-2 text-xs uppercase tracking-[3px]"
              style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-lato)" }}
            >
              {LABELS[key]}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
