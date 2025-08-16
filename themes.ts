// themes/colors.ts
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

export const PADDINGS = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  full: "100%",
};

export const RADIUS = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
};

export const THEMES = {
  dark: dark,
  light: light,
};

// change this to switch dark
export const COLORS = THEMES.dark;
