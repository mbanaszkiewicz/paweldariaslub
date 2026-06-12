import { User } from "lucide-react";
import { weddingData } from "@/config/wedding";

function WhatsAppIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.86 9.86 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 1.81c2.16 0 4.19.84 5.72 2.37a8.05 8.05 0 0 1 2.37 5.73c0 4.46-3.63 8.09-8.1 8.09a8.06 8.06 0 0 1-4.12-1.13l-.3-.18-3.11.82.83-3.04-.19-.31a8.05 8.05 0 0 1-1.23-4.27c0-4.46 3.63-8.09 8.1-8.09zm-4.6 4.42c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63 0 1.55 1.13 3.05 1.29 3.26.16.21 2.23 3.4 5.4 4.65 2.64 1.04 3.18.83 3.75.78.57-.05 1.84-.75 2.1-1.48.26-.73.26-1.35.18-1.48-.08-.13-.29-.21-.6-.36-.31-.16-1.84-.91-2.13-1.01-.29-.11-.5-.16-.71.16-.21.31-.81 1.01-.99 1.22-.18.21-.37.24-.68.08-.31-.16-1.31-.48-2.5-1.54-.92-.82-1.55-1.84-1.73-2.15-.18-.31-.02-.48.14-.63.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.11-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.54-.71-.55-.18-.01-.39-.01-.6-.01z" />
    </svg>
  );
}

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
                  href={`https://wa.me/${c.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
                  style={{ color: "#25D366", fontFamily: "var(--font-lato)", fontWeight: 300 }}
                >
                  <WhatsAppIcon size={15} />
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
