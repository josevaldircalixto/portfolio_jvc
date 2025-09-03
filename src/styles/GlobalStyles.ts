import { createGlobalStyle } from "styled-components";
import { colors, fonts } from "./tokens";

export const GlobalStyles = createGlobalStyle`
  :root { color-scheme: dark; }
  * { box-sizing: border-box; }
  html, body, #root { height: 100%; }

  body {
    margin: 0;
    background: ${colors.bg};
    color: ${colors.text};
    font-family: ${fonts.mono};    
  }

  a { color: inherit; text-decoration: none; }

  code, .mono {
    font-family: ${fonts.mono};
  }
`;
