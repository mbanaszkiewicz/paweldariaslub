import { Gift } from "lucide-react";
import { weddingData } from "@/config/wedding";

export default function GiftSection() {
  return (
    <section className="py-24 px-6" style={{ background: "#faf9f7" }}>
      <div className="max-w-xl mx-auto text-center">
        <div className="flex justify-center mb-6" style={{ color: "var(--secondary)" }}>
          <Gift size={36} strokeWidth={1} />
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
