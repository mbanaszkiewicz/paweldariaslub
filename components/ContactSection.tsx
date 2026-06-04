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
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <circle cx="12" cy="7" r="4"/>
                  <path d="M4 21v-2a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v2"/>
                </svg>
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
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
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
