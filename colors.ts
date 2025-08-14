// themes/colors.ts
const dark = {
  primary: "#ffe0c2",
  secondary: "#393028",
  background: "#242424",
  foreground: "#ffffffff",
  accent: "#fadbbcff",
  muted: "#504d4bff",
  destructive: "#C62828",
};

const light = {
  primary: "#5e4e41ff",
  secondary: "#ffe0c2",
  background: "#ffffffff",
  foreground: "#242424",
  accent: "#ada194ff",
  muted: "#a19589ff",
  destructive: "#C62828",
};

export const THEMES = {
  dark: dark,
  light: light,
};

// change this to switch theme
export const COLORS = THEMES.dark;