import { extendTheme } from "native-base";

export const theme = extendTheme({
  colors: {
    "bg-primary": "#222222",
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: "dark",
  },
});
