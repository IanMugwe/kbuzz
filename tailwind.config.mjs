import forms from '@tailwindcss/forms'
import containerQueries from '@tailwindcss/container-queries'

// Theme moved verbatim from the old inline Tailwind CDN config.
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}', './public/scripts/**/*.js'],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "primary": "#b70011",
        "tertiary-fixed": "#ffdcc3",
        "on-tertiary": "#ffffff",
        "on-error": "#ffffff",
        "tertiary-container": "#ad5d00",
        "on-primary-container": "#fff6f5",
        "on-secondary-container": "#00714e",
        "primary-fixed": "#ffdad6",
        "inverse-primary": "#ffb4ab",
        "error-container": "#ffdad6",
        "surface-container-lowest": "#ffffff",
        "on-primary-fixed": "#410002",
        "secondary-fixed-dim": "#68dba9",
        "on-secondary-fixed-variant": "#005137",
        "on-tertiary-fixed": "#2f1500",
        "on-secondary": "#ffffff",
        "tertiary-fixed-dim": "#ffb77d",
        "on-background": "#1b1b1e",
        "surface-variant": "#e4e1e6",
        "primary-container": "#dc2626",
        "outline-variant": "#e6bdb8",
        "surface-container-high": "#eae7eb",
        "on-tertiary-container": "#fff6f2",
        "on-primary-fixed-variant": "#93000b",
        "surface-dim": "#dcd9dd",
        "on-secondary-fixed": "#002114",
        "primary-fixed-dim": "#ffb4ab",
        "surface-bright": "#fbf8fc",
        "inverse-on-surface": "#f3f0f4",
        "surface": "#fbf8fc",
        "surface-container-low": "#f6f2f7",
        "on-surface": "#1b1b1e",
        "on-surface-variant": "#5c403c",
        "tertiary": "#894900",
        "error": "#ba1a1a",
        "on-error-container": "#93000a",
        "surface-tint": "#bf0715",
        "secondary-fixed": "#85f8c4",
        "secondary-container": "#82f5c1",
        "outline": "#916f6b",
        "inverse-surface": "#303033",
        "background": "#fbf8fc",
        "on-tertiary-fixed-variant": "#6e3900",
        "surface-container": "#f0edf1",
        "surface-container-highest": "#e4e1e6",
        "on-primary": "#ffffff",
        "secondary": "#006c4a"
      },
      "borderRadius": {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      "spacing": {
        "gutter": "1.5rem",
        "space-sm": "0.5rem",
        "space-xl": "2.5rem",
        "margin-mobile": "1rem",
        "space-lg": "1.5rem",
        "space-md": "1rem",
        "gutter-mobile": "1rem",
        "space-xs": "0.25rem",
        "margin": "3rem"
      },
      "fontFamily": {
        "display-xl": ["Newsreader", "serif"],
        "headline-lg-mobile": ["Newsreader", "serif"],
        "body-md": ["Hanken Grotesk", "sans-serif"],
        "body-lg": ["Hanken Grotesk", "sans-serif"],
        "display-xl-mobile": ["Newsreader", "serif"],
        "headline-md": ["Newsreader", "serif"],
        "label-md": ["JetBrains Mono", "monospace"],
        "body-sm": ["Hanken Grotesk", "sans-serif"],
        "headline-lg": ["Newsreader", "serif"],
        "label-sm": ["JetBrains Mono", "monospace"],
        "headline-sm": ["Newsreader", "serif"]
      },
      "fontSize": {
        "display-xl": ["72px", { "lineHeight": "76px", "letterSpacing": "-0.03em", "fontWeight": "600" }],
        "headline-lg-mobile": ["32px", { "lineHeight": "38px", "letterSpacing": "-0.01em", "fontWeight": "500" }],
        "body-md": ["15px", { "lineHeight": "24px", "fontWeight": "400" }],
        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
        "display-xl-mobile": ["44px", { "lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "600" }],
        "headline-md": ["32px", { "lineHeight": "38px", "fontWeight": "500" }],
        "label-md": ["12px", { "lineHeight": "16px", "letterSpacing": "0.06em", "fontWeight": "500" }],
        "body-sm": ["13px", { "lineHeight": "20px", "fontWeight": "400" }],
        "headline-lg": ["48px", { "lineHeight": "54px", "letterSpacing": "-0.02em", "fontWeight": "500" }],
        "label-sm": ["10px", { "lineHeight": "14px", "letterSpacing": "0.08em", "fontWeight": "600" }],
        "headline-sm": ["24px", { "lineHeight": "30px", "fontWeight": "600" }]
      }
    }
  },
  plugins: [forms, containerQueries],
}
