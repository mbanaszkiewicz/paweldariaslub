import { Wine, Camera, Mail } from "lucide-react";
import { weddingData } from "@/config/wedding";

const icons = [
  // two wedding bands
  <svg key="rings" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
    <circle cx="9" cy="12" r="5"/>
    <circle cx="15" cy="12" r="5"/>
  </svg>,
  <Wine key="toast" size={20} />,
  <Camera key="camera" size={20} />,
  <Mail key="wishes" size={20} />,
  // serving cloche
  <svg key="cloche" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
    <ellipse cx="12" cy="18" rx="9" ry="2"/>
    <path d="M3 16 Q3 8 12 8 Q21 8 21 16"/>
    <line x1="12" y1="8" x2="12" y2="5"/>
    <circle cx="12" cy="4.5" r="1.5"/>
  </svg>
];

export default function Schedule() {
  return (
    <section className="py-24 px-6" style={{ background: "#faf9f7" }}>
      <div className="max-w-xl mx-auto text-center">
        <h2 className="section-title">Harmonogram</h2>
        <div className="divider">
          <span style={{ color: "var(--secondary)", fontSize: "18px" }}>✦</span>
        </div>
      </div>

      <ol className="max-w-lg mx-auto mt-12 space-y-0">
        {weddingData.schedule.map((item, i) => (
          <li key={item.time} className="flex gap-6 items-start relative pb-8">
            {i < weddingData.schedule.length - 1 && (
              <div
                className="absolute left-[29px] top-10 bottom-0 w-px"
                style={{ background: "rgba(201,164,108,0.25)" }}
              />
            )}
            <div
              className="flex-shrink-0 w-[60px] h-[60px] rounded-full flex items-center justify-center border"
              style={{ borderColor: "var(--secondary)", color: "var(--secondary)" }}
            >
              {icons[i]}
            </div>
            <div className="pt-3">
              <p
                className="text-2xl leading-none"
                style={{ fontFamily: "var(--font-cormorant)", color: "var(--secondary)", fontWeight: 600 }}
              >
                {item.time}
              </p>
              <p
                className="mt-1 text-sm"
                style={{ color: "#555", fontFamily: "var(--font-lato)", fontWeight: 300 }}
              >
                {item.title}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
