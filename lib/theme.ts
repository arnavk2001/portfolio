// Theme configuration
export const theme = {
  light: {
    background: {
      primary: "#f8fafc", // slate-50
      secondary: "#f1f5f9", // slate-100
      tertiary: "#e2e8f0", // slate-200
    },
    text: {
      primary: "#0f172a", // slate-900
      secondary: "#334155", // slate-700
      muted: "#64748b", // slate-500
      accent: "#0ea5e9", // sky-500
    },
    ocean: {
      blue: "#0ea5e9", // sky-500
      darkBlue: "#0284c7", // sky-600
      lightBlue: "#38bdf8", // sky-400
      deep: "#0c4a6e", // sky-900
    },
    accents: {
      orange: "#f97316", // orange-500
      orangeLight: "#fb923c", // orange-400
      orangeDark: "#ea580c", // orange-600
      purple: "#a855f7", // purple-500
      purpleLight: "#c084fc", // purple-400
      purpleDark: "#9333ea", // purple-600
      magenta: "#ec4899", // pink-500
      magentaLight: "#f472b6", // pink-400
      magentaDark: "#db2777", // pink-600
    },
    border: {
      default: "#cbd5e1", // slate-300
      light: "#e2e8f0", // slate-200
    },
  },
  dark: {
    background: {
      primary: "#000810",
      secondary: "#001220",
      tertiary: "#011627",
    },
    text: {
      primary: "#f1f5f9", // slate-100
      secondary: "#cbd5e1", // slate-300
      muted: "#94a3b8", // slate-400
      accent: "#0ea5e9", // sky-500
    },
    ocean: {
      blue: "#0284c7", // sky-600
      darkBlue: "#075985", // sky-700
      lightBlue: "#0ea5e9", // sky-500
      deep: "#0c4a6e", // sky-900
    },
    accents: {
      orange: "#fb923c", // orange-400
      orangeLight: "#fdba74", // orange-300
      orangeDark: "#f97316", // orange-500
      purple: "#c084fc", // purple-400
      purpleLight: "#d8b4fe", // purple-300
      purpleDark: "#a855f7", // purple-500
      magenta: "#f472b6", // pink-400
      magentaLight: "#f9a8d4", // pink-300
      magentaDark: "#ec4899", // pink-500
    },
    border: {
      default: "#1e293b", // slate-800
      light: "#334155", // slate-700
    },
  },
  gradients: {
    primary: "from-sky-600 via-sky-500 to-sky-600",
    secondary: "from-sky-700 via-sky-600 to-sky-500",
    accent: "from-sky-500 via-sky-400 to-sky-500",
    ocean: "from-sky-600 to-sky-400",
    orange: "from-orange-600 via-orange-500 to-orange-400",
    purple: "from-purple-600 via-purple-500 to-purple-400",
    magenta: "from-pink-600 via-pink-500 to-pink-400",
    complementary: "from-orange-500 via-orange-400 to-yellow-400", // Complementary to blue
  },
  animations: {
    gradientShift: "animate-gradient",
    gradientXY: "animate-gradient-xy",
    pulseGlow: "animate-pulse-glow",
    float: "animate-float",
    fadeIn: "animate-fade-in",
  },
} as const;
