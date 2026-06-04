import fs from "fs";
import path from "path";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Schedule from "@/components/Schedule";
import InfoCards from "@/components/InfoCards";
import GiftSection from "@/components/GiftSection";
import ContactSection from "@/components/ContactSection";
import PhotoUpload from "@/components/PhotoUpload";

export default function Home() {
  const bannerDir = path.join(process.cwd(), "public", "banner");
  const bannerImages = fs
    .readdirSync(bannerDir)
    .filter(f => /\.(jpe?g|png|webp)$/i.test(f))
    .sort()
    .map(f => `/banner/${f}`);

  return (
    <>
      <Hero bannerImages={bannerImages} />
      <Countdown />
      <Schedule />
      <InfoCards />
      <GiftSection />
      <PhotoUpload />
      <ContactSection />

      <footer
        className="py-8 text-center text-xs"
        style={{
          backgroundColor: "var(--primary)",
          color: "rgba(255,255,255,0.25)",
          fontFamily: "var(--font-lato)"
        }}
      >
        Daria &amp; Paweł · 03.07.2027
      </footer>
    </>
  );
}
