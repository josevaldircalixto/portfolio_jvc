export const theme = {
  colors: {
    bg: "#0b0e14",
    text: "#e6e6e6",
    subtext: "#a3a3a3",
    accent: "#7CFF6B",
    accentSoft: "#2a5f3a",
  },
  fonts: {
    mono: "'DM Mono', monospace",
    sans: "Inter, sans-serif",
  },
  layout: { max: "1200px" },
} as const;

export type AppTheme = typeof theme;
