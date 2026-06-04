import { weddingData } from "@/config/wedding";

export default function GiftSection() {
  return (
    <section className="py-24 px-6" style={{ background: "#faf9f7" }}>
      <div className="max-w-xl mx-auto text-center">
        <div
          className="flex justify-center mb-6"
          style={{ color: "var(--secondary)" }}
        >
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M20 12v10H4V12"/>
            <path d="M22 7H2v5h20V7z"/>
            <line x1="12" y1="22" x2="12" y2="7"/>
            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
          </svg>
        </div>

        <h2 className="section-title">W temacie prezentów</h2>
        <div className="divider">
          <span style={{ color: "var(--secondary)", fontSize: "18px" }}>✦</span>
        </div>

        <p
          className="mt-6 leading-relaxed"
          style={{
            color: "#555",
            fontFamily: "var(--font-lato)",
            fontWeight: 300,
            fontSize: "0.95rem"
          }}
        >
          {weddingData.gifts}
        </p>
      </div>
    </section>
  );
}
