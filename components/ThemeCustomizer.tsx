"use client";

import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeCustomizer() {
  const {
    primary,
    secondary,
    setPrimary,
    setSecondary,
    setFont,
    fonts
  } = useTheme();

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-xl shadow-xl z-50">
      <h3 className="font-bold mb-3">
        Theme
      </h3>

      <div className="mb-2">
        <label>Primary</label>
        <input
          type="color"
          value={primary}
          onChange={(e) =>
            setPrimary(e.target.value)
          }
        />
      </div>

      <div className="mb-2">
        <label>Secondary</label>
        <input
          type="color"
          value={secondary}
          onChange={(e) =>
            setSecondary(e.target.value)
          }
        />
      </div>

      <select
        onChange={(e) =>
          setFont(fonts[e.target.value])
        }
      >
        {Object.keys(fonts).map((f) => (
          <option key={f}>{f}</option>
        ))}
      </select>
    </div>
  );
}