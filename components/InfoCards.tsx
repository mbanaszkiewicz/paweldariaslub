import { Bus, Baby, BedDouble, UtensilsCrossed } from "lucide-react";
import { weddingData } from "@/config/wedding";

const icons: Record<string, React.ReactNode> = {
  Dojazd: <Bus size={26} />,
  Dzieci: <Baby size={26} />,
  Nocleg: <BedDouble size={26} />,
  Menu: <UtensilsCrossed size={26} />
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
                  style={{ fontFamily: "var(--font-cormorant)", color: "var(--secondary)", fontWeight: 400 }}
                >
                  {item.title}
                </h3>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-lato)", fontWeight: 300, whiteSpace: "pre-line" }}
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
