import { globalStyle } from "@vanilla-extract/css";

globalStyle('*', {
  boxSizing: 'border-box',
  padding: 0,
  margin: 0,
});

globalStyle("html, body", {
  maxWidth: "100vw",
  minHeight: "100vh",

  backgroundColor: "var(--gray-50)",

  fontFamily: `
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
  `,
});
