// themes/colors.ts
const dark = {
  text: "#ecf7f1",
  primary: "#35ff9d",
  secondary: "#336075",
  background: "#040906",
  accent: "#589e84",
  destructive: "#ef4444",
  black: "#000000",
  white: "#ffffff",
};

const light = {
  text: "#08120c",
  primary: "#35ff9d",
  secondary: "#8ab7cc",
  background: "#f4faf7",
  accent: "#589e84",
  destructive: "#ef4444",
  black: "#000000",
  white: "#ffffff",
};

export const THEMES = {
  dark: dark,
  light: light,
};

// change this to switch themes
export const COLORS = THEMES.dark;
