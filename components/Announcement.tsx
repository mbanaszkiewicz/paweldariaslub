import { weddingData } from "@/config/wedding";

export default function Announcement() {
  return (
    <section className="py-16 px-6" style={{ background: "#faf9f7" }}>
      <div className="max-w-xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-6 max-w-xs mx-auto">
          <div className="flex-1 h-px" style={{ background: "rgba(201,164,108,0.35)" }} />
          <span style={{ color: "var(--secondary)", fontSize: "14px" }}>✦</span>
          <div className="flex-1 h-px" style={{ background: "rgba(201,164,108,0.35)" }} />
        </div>

        <p
          className="leading-relaxed"
          style={{
            color: "#6b6b6b",
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "1.35rem"
          }}
        >
          {weddingData.announcement}
        </p>
      </div>
    </section>
  );
}
