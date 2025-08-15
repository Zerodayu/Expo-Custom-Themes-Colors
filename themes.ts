// themes/colors.ts
const dark = {
  primary: "#ffe0c2",
  secondary: "#393028",
  background: "#242424",
  foreground: "#ffffffff",
  muted: "#fadbbc4f",
  destructive: "#C62828",
  black: "#000000",
  white: "#ffffff",
};

const light = {
  primary: "#5e4e41ff",
  secondary: "#ffe0c2",
  background: "#ffffffff",
  foreground: "#242424",
  muted: "#a1958964",
  destructive: "#C62828",
  black: "#000000",
  white: "#ffffff",
};

export const THEMES = {
  dark: dark,
  light: light,
};

// change this to switch theme
export const COLORS = THEMES.dark;
