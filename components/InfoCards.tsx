import { weddingData } from "@/config/wedding";

const icons: Record<string, React.ReactNode> = {
  Dojazd: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="1" y="3" width="15" height="13" rx="1"/>
      <path d="M16 8h4l3 5v4h-7V8z"/>
      <circle cx="5.5" cy="18.5" r="2.5"/>
      <circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  ),
  Dzieci: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="12" cy="5" r="3"/>
      <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
      <path d="M12 12v4"/>
    </svg>
  ),
  Nocleg: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M3 20v-8l9-6 9 6v8"/>
      <rect x="9" y="14" width="6" height="6"/>
    </svg>
  ),
  Menu: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/>
      <path d="M12 6v6l4 2"/>
    </svg>
  )
};

export default function InfoCards() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--primary)" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="section-title">Kilka spraw organizacyjnych</h2>
          <div className="divider">
            <span style={{ color: "var(--secondary)", fontSize: "18px" }}>✦</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {weddingData.organization.map((item) => (
            <div
              key={item.title}
              className="p-8 border"
              style={{ borderColor: "rgba(201,164,108,0.25)", background: "rgba(255,255,255,0.04)" }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div style={{ color: "var(--secondary)" }}>{icons[item.title]}</div>
                <h3
                  className="text-2xl"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    color: "var(--secondary)",
                    fontWeight: 400
                  }}
                >
                  {item.title}
                </h3>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-lato)", fontWeight: 300 }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
