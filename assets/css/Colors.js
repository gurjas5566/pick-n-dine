const tintColorLight = "#6B8E23";  // Olive green
const tintColorDark = "#A3C76D";   // Soft light olive
const primary = "#6B8E23";         // Main brand green
const secondary = "#A9A9A9";       // Neutral gray

export const Colors = {
  light: {
    text: "#2F2F2F",               // Dark gray for readability
    background: "#FFFDF6",         // Light cream
    tint: tintColorLight,
    icon: "#FFD580",               // Soft gold
    tabIconDefault: "#D3D3D3",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECECEC",               // Light text
    background: "#1A1A1A",         // Rich dark mode
    tint: tintColorDark,
    icon: "#FFB84D",               // Brighter gold
    tabIconDefault: "#5A5A5A",
    tabIconSelected: tintColorDark,
  },
  PRIMARY: primary,
  SECONDARY: secondary,
};
