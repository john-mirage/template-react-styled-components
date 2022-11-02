const FONT_ROOT_SIZE = 16;
const FONT_FAMILY_STACK = [
  "ui-sans-serif",
  "system-ui",
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  '"Noto Sans"',
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
  '"Noto Color Emoji"',
];

const theme = {
  fontRootSize: FONT_ROOT_SIZE,
  fontFamilyStack: FONT_FAMILY_STACK.join(","),
  pxToRem: (px: number) => `${String(px / FONT_ROOT_SIZE)}rem`,
  backgroundColor: "#212529",
};

export default theme;
