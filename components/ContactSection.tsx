import { User, Phone } from "lucide-react";
import { weddingData } from "@/config/wedding";

export default function ContactSection() {
  return (
    <section className="py-24 px-6" style={{ background: "#faf9f7" }}>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="section-title">Kontakt w razie pytań</h2>
        <div className="divider">
          <span style={{ color: "var(--secondary)", fontSize: "18px" }}>✦</span>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center mt-12">
          {weddingData.contacts.map((c) => (
            <div
              key={c.name}
              className="flex-1 border py-10 px-8"
              style={{ borderColor: "rgba(201,164,108,0.35)" }}
            >
              <div className="flex justify-center mb-4" style={{ color: "var(--secondary)" }}>
                <User size={28} strokeWidth={1.2} />
              </div>

              <p
                className="text-xs uppercase tracking-[3px] mb-2"
                style={{ color: "rgba(201,164,108,0.8)", fontFamily: "var(--font-lato)" }}
              >
                {c.role}
              </p>

              <p
                className="text-2xl mb-4"
                style={{
                  color: "var(--primary)",
                  fontFamily: "var(--font-cormorant)",
                  fontWeight: 400
                }}
              >
                {c.name}
              </p>

              {c.phone && (
                <a
                  href={`tel:${c.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
                  style={{ color: "#666", fontFamily: "var(--font-lato)", fontWeight: 300 }}
                >
                  <Phone size={14} strokeWidth={1.5} />
                  {c.phone}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
