import { weddingData } from "@/config/wedding";

const icons = [
  // rings
  <svg key="rings" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="8" cy="12" r="5"/><circle cx="16" cy="12" r="5"/></svg>,
  // two wine glasses clinking
  <svg key="toast" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    {/* left glass */}
    <path d="M4 3 L10 3 C10 3 11 8 8 10 L8 17 L6 19 L10 19"/>
    <path d="M4 3 C4 3 3 8 6 10"/>
    {/* right glass */}
    <path d="M14 3 L20 3 C20 3 21 8 18 10 L18 17 L16 19 L20 19"/>
    <path d="M14 3 C14 3 13 8 16 10"/>
    {/* clink sparkle */}
    <line x1="11" y1="2" x2="13" y2="2"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
  </svg>,
  // camera
  <svg key="camera" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>,
  // envelope / gift
  <svg key="envelope" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="2" y="5" width="20" height="14" rx="1"/><polyline points="2,5 12,13 22,5"/></svg>,
  // fork & knife
  <svg key="dinner" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><line x1="18" y1="3" x2="18" y2="21"/><path d="M10 3v6a3 3 0 0 0 3 3h0v9"/><path d="M7 3v4"/><path d="M13 3v4"/></svg>
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
                style={{
                  fontFamily: "var(--font-cormorant)",
                  color: "var(--secondary)",
                  fontWeight: 600
                }}
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
