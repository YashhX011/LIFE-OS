import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#09090B",
          secondary: "#111114",
        },
        card: {
          DEFAULT: "#18181C",
          elevated: "#202027",
        },
        accent: {
          DEFAULT: "#A78BFA",
          secondary: "#8B5CF6",
          hover: "#9065f7",
        },
        text: {
          primary: "#F5F5F7",
          secondary: "#A1A1AA",
          muted: "#71717A",
        },
        border: {
          DEFAULT: "#29292F",
          light: "#383842",
        },
        success: "#22C55E",
        warning: "#F59E0B",
        danger: "#EF4444",
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.375rem",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;

