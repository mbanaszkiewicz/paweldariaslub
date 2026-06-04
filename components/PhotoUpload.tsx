"use client";

import { QRCodeSVG } from "qrcode.react";
import { Camera } from "lucide-react";
import { weddingData } from "@/config/wedding";

export default function PhotoUpload() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--primary)" }}>
      <div className="max-w-xl mx-auto text-center">
        <div className="flex justify-center mb-6" style={{ color: "var(--secondary)" }}>
          <Camera size={36} strokeWidth={1} />
        </div>

        <h2 className="section-title">Wasze zdjęcia</h2>
        <div className="divider">
          <span style={{ color: "var(--secondary)", fontSize: "18px" }}>✦</span>
        </div>

        <p
          className="mt-6 mb-10 leading-relaxed"
          style={{
            color: "rgba(255,255,255,0.65)",
            fontFamily: "var(--font-lato)",
            fontWeight: 300,
            fontSize: "0.95rem"
          }}
        >
          Chcemy pamiętać ten dzień oczami wszystkich gości. Zeskanuj kod QR, aby dodać swoje zdjęcia do wspólnej galerii.
        </p>

        <div className="inline-block p-5 border" style={{ borderColor: "rgba(201,164,108,0.4)" }}>
          <QRCodeSVG
            value={weddingData.photoShareUrl}
            size={180}
            fgColor="#c9a46c"
            bgColor="transparent"
          />
        </div>

        <p
          className="mt-6 text-xs uppercase tracking-[3px]"
          style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-lato)" }}
        >
          zeskanuj, aby dodać zdjęcia
        </p>
      </div>
    </section>
  );
}
