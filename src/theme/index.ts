/* SPDX-FileCopyrightText: 2014-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import { Theme } from "@emotion/react";
import { createTheme, PaletteMode, ThemeOptions } from "@mui/material";
import { createComponentThemeOptions } from "./components";

/**
 * Customized Material UI themes for "light" and "dark" modes.
 *
 * @see https://next.material-ui.com/customization/default-theme/
 */
const themes = (["light", "dark"] as PaletteMode[]).map((mode) => {
  const components: ThemeOptions["components"] =
    createComponentThemeOptions(mode);
  return createTheme(
    {
      palette: {
        mode,
        primary: {
          main: mode === "light" ? "rgb(24,119,242)" : "rgb(45,136,255)",
        },
        background: {
          default: mode === "light" ? "rgb(218, 224, 230)" : "rgb(0 0 0)",
        },
        neutral: {
          main: mode == "light" ? "#828486" : "#828486",
          contrastText: "#fff",
        },
      },

      typography: {
        fontFamily: [
          `-apple-system`,
          `"BlinkMacSystemFont"`,
          `"Segoe UI"`,
          `"Roboto"`,
          `"Oxygen"`,
          `"Ubuntu"`,
          `"Cantarell"`,
          `"Fira Sans"`,
          `"Droid Sans"`,
          `"Helvetica Neue"`,
          `sans-serif`,
        ].join(","),
      },
      components,
    },
    {
      typography: {
        h1: { fontSize: "2em" },
        h2: { fontSize: "1.5em" },
        h3: { fontSize: "1.3em" },
        h4: { fontSize: "1em" },
        h5: { fontSize: "0.8em" },
        h6: { fontSize: "0.7em" },
        button: { textTransform: "none" },
      },
    }
  );
});

export default {
  light: themes[0],
  dark: themes[1],
} as { [key in PaletteMode]: Theme };

declare module "@mui/material/styles" {
  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
  }
}

// declare module "@mui/material" {
//   interface Button {

//   }
// }