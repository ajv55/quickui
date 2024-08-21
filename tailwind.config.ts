import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4F46E5',  // Indigo
          dark: '#6366F1',   // Indigo for dark theme
        },
        secondary: {
          light: '#A0F0E9',  // Soft Teal
          dark: '#2DD4BF',   // Teal for dark theme
        },
        accent: {
          light: '#FECACA',  // Coral
          dark: '#F97316',   // Coral Red for dark theme
        },
        background: {
          light: '#F3F4F6',  // Light gray
          dark: '#1F2937',   // Dark gray
        },
        text: {
          light: '#111827',  // Dark gray for text
          dark: '#E5E7EB',   // Light gray for text in dark theme
        },
      },
      backgroundImage: {
        'gradient-light': 'linear-gradient(135deg, #4F46E5, #A0F0E9)', // Light theme gradient
        'gradient-dark': 'linear-gradient(135deg, #1F2937, #2DD4BF)', // Dark theme gradient
      },
    },
  },
  plugins: [],
};

export default config;
