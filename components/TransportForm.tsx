"use client";

import { useState } from "react";
import { Bus } from "lucide-react";
import { weddingData } from "@/config/wedding";

const attendanceOptions = ["Będę", "Nie będę"];
const dinnerOptions = ["Mięsna", "Wege"];
const transportOptions = ["Własny", "Autokar z Wrocławia", "Autokar z Łoziny"];
const returnOptions = ["Powrót autokarem", "Nocleg na miejscu"];

type Status = "idle" | "sending" | "sent" | "error";

const labelStyle: React.CSSProperties = {
  color: "var(--primary)",
  fontFamily: "var(--font-lato)",
  fontSize: "0.85rem",
  fontWeight: 400
};

const inputClass =
  "w-full border bg-white px-4 py-3 text-base outline-none transition-colors focus:border-[var(--secondary)] focus-visible:ring-2 focus-visible:ring-[var(--secondary)]/40";

const inputStyle: React.CSSProperties = {
  borderColor: "rgba(26,31,58,0.2)",
  color: "#2a2a2a",
  fontFamily: "var(--font-lato)",
  fontWeight: 300
};

function Choice({
  name,
  options,
  value,
  onChange,
  required
}: {
  name: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((opt) => {
        const checked = value === opt;
        return (
          <label
            key={opt}
            className="cursor-pointer border px-5 py-2.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[var(--secondary)]/50"
            style={{
              borderColor: checked ? "var(--secondary)" : "rgba(26,31,58,0.2)",
              background: checked ? "var(--primary)" : "#fff",
              color: checked ? "#fff" : "var(--primary)",
              fontFamily: "var(--font-lato)",
              fontWeight: 300
            }}
          >
            <input
              type="radio"
              name={name}
              value={opt}
              checked={checked}
              onChange={() => onChange(opt)}
              required={required}
              className="sr-only"
            />
            {opt}
          </label>
        );
      })}
    </div>
  );
}

export default function TransportForm() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("");
  const [dinner, setDinner] = useState("");
  const [companion, setCompanion] = useState("");
  const [companionDinner, setCompanionDinner] = useState("");
  const [transport, setTransport] = useState("");
  const [stop, setStop] = useState("");
  const [ret, setRet] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const absent = attendance === "Nie będę";
  const hasCompanion = !absent && companion.trim() !== "";
  const isBus = !absent && transport.startsWith("Autokar");

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const botcheck = (e.currentTarget.elements.namedItem("botcheck") as HTMLInputElement).checked;
    if (botcheck) return;

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: weddingData.formAccessKey,
          subject: `${absent ? "Nieobecność" : "Transport i kolacja"}: ${name.trim()}`,
          from_name: "Strona ślubu Darii i Pawła",
          "Imię i nazwisko": name.trim(),
          "Obecność": attendance,
          "Kolacja": absent ? "nie dotyczy" : dinner,
          "Osoba towarzysząca": hasCompanion ? companion.trim() : absent ? "nie dotyczy" : "brak",
          "Kolacja osoby towarzyszącej": hasCompanion ? companionDinner : "nie dotyczy",
          "Transport": absent ? "nie dotyczy" : transport,
          "Preferowana miejscowość odbioru": isBus ? stop.trim() || "brak" : "nie dotyczy",
          "Powrót": isBus ? ret : "nie dotyczy"
        })
      });
      const data = await res.json();
      setStatus(data.success ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="formularz" className="py-24 px-6" style={{ background: "#faf9f7" }}>
      <div className="max-w-xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center mb-6" style={{ color: "var(--secondary)" }}>
            <Bus size={36} strokeWidth={1} />
          </div>
          <h2 className="section-title">Transport i kolacja</h2>
          <div className="divider">
            <span style={{ color: "var(--secondary)", fontSize: "18px" }}>✦</span>
          </div>
          <p
            className="mt-6 mb-10 leading-relaxed"
            style={{ color: "#555", fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: "0.95rem" }}
          >
            Dajcie nam znać, jak dotrzecie na miejsce i którą kolację wybieracie.
          </p>
        </div>

        {status === "sent" ? (
          <div
            role="status"
            className="border bg-white px-8 py-10 text-center"
            style={{ borderColor: "rgba(201,164,108,0.35)" }}
          >
            <p className="text-2xl" style={{ fontFamily: "var(--font-cormorant)", color: "var(--primary)" }}>
              Dziękujemy!
            </p>
            <p className="mt-2 text-sm" style={{ color: "#555", fontFamily: "var(--font-lato)", fontWeight: 300 }}>
              Zgłoszenie dotarło do nas.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-8 border bg-white px-6 py-8 sm:px-10 sm:py-10"
            style={{ borderColor: "rgba(201,164,108,0.35)" }}
          >
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="flex flex-col gap-2">
              <label htmlFor="tf-name" style={labelStyle}>
                Imię i nazwisko
              </label>
              <input
                id="tf-name"
                type="text"
                required
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
                style={inputStyle}
              />
            </div>

            <fieldset className="flex flex-col gap-3">
              <legend className="mb-3" style={labelStyle}>
                Obecność
              </legend>
              <Choice
                name="attendance"
                options={attendanceOptions}
                value={attendance}
                onChange={setAttendance}
                required
              />
            </fieldset>

            {!absent && (
            <fieldset className="flex flex-col gap-3">
              <legend className="mb-3" style={labelStyle}>
                Kolacja
              </legend>
              <Choice name="dinner" options={dinnerOptions} value={dinner} onChange={setDinner} required />
            </fieldset>
            )}

            {!absent && (
            <div className="flex flex-col gap-2">
              <label htmlFor="tf-companion" style={labelStyle}>
                Osoba towarzysząca (imię i nazwisko)
              </label>
              <input
                id="tf-companion"
                type="text"
                value={companion}
                onChange={(e) => setCompanion(e.target.value)}
                className={inputClass}
                style={inputStyle}
              />
            </div>
            )}

            {hasCompanion && (
              <fieldset className="flex flex-col gap-3">
                <legend className="mb-3" style={labelStyle}>
                  Kolacja osoby towarzyszącej
                </legend>
                <Choice
                  name="companionDinner"
                  options={dinnerOptions}
                  value={companionDinner}
                  onChange={setCompanionDinner}
                  required
                />
              </fieldset>
            )}

            {!absent && (
            <fieldset className="flex flex-col gap-3">
              <legend className="mb-3" style={labelStyle}>
                Transport
              </legend>
              <Choice name="transport" options={transportOptions} value={transport} onChange={setTransport} required />
            </fieldset>
            )}

            {isBus && (
              <div className="flex flex-col gap-2">
                <label htmlFor="tf-stop" style={labelStyle}>
                  Preferowana miejscowość odbioru
                </label>
                <input
                  id="tf-stop"
                  type="text"
                  value={stop}
                  onChange={(e) => setStop(e.target.value)}
                  className={inputClass}
                  style={inputStyle}
                />
              </div>
            )}

            {isBus && (
              <fieldset className="flex flex-col gap-3">
                <legend className="mb-3" style={labelStyle}>
                  Powrót
                </legend>
                <Choice name="return" options={returnOptions} value={ret} onChange={setRet} required />
              </fieldset>
            )}

            {status === "error" && (
              <p role="alert" className="text-sm" style={{ color: "#a33", fontFamily: "var(--font-lato)" }}>
                Nie udało się wysłać formularza. Spróbujcie ponownie albo napiszcie do nas na WhatsAppie.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="self-center px-10 py-3 text-xs uppercase tracking-[3px] transition-opacity hover:opacity-85 disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--secondary)]"
              style={{ background: "var(--primary)", color: "var(--secondary)", fontFamily: "var(--font-lato)" }}
            >
              {status === "sending" ? "Wysyłanie…" : "Wyślij"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
