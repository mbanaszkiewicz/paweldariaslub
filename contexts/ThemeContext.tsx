"use client";

import {
  createContext,
  useContext,
  useState
} from "react";

const fonts = {
  Playfair: "'Playfair Display', serif",
  Cormorant: "'Cormorant Garamond', serif",
  Poppins: "'Poppins', sans-serif"
};

const ThemeContext = createContext<any>(null);

export function ThemeProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [primary, setPrimary] =
    useState("#1E2342");

  const [secondary, setSecondary] =
    useState("#C9A46C");

  const [font, setFont] =
    useState(fonts.Playfair);

  return (
    <ThemeContext.Provider
      value={{
        primary,
        secondary,
        font,
        setPrimary,
        setSecondary,
        setFont,
        fonts
      }}
    >
      <div
        style={
          {
            "--primary": primary,
            "--secondary": secondary,
            fontFamily: font
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () =>
  useContext(ThemeContext);