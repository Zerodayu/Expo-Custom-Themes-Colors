// themes.ts
const dark = {
  primary: "#fafafa",
  secondary: "#27272a",
  background: "#09090b",
  foreground: "#fafafa",
  muted: "#27272a",
  destructive: "#ef4444",
  black: "#000000",
  white: "#ffffff",
};

const light = {
  primary: "#18181b",
  secondary: "#f4f4f5",
  background: "#ffffff",
  foreground: "#09090b",
  muted: "#f4f4f5",
  destructive: "#ef4444",
  black: "#000000",
  white: "#ffffff",
};

export const THEMES = {
  dark: dark,
  light: light,
};

// change this to switch dark
export const COLORS = THEMES.dark;
