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
  },
  animations: {
    gradientShift: "animate-gradient",
    gradientXY: "animate-gradient-xy",
    pulseGlow: "animate-pulse-glow",
    float: "animate-float",
    fadeIn: "animate-fade-in",
  },
} as const;
