import { createGlobalStyle } from "styled-components";

// const theme = window.localStorage.getItem("theme");
// let mapTheme;

// (function themeSelect(theme) {
//   if (theme === "light") mapTheme = "street-v11";
//   else mapTheme = "dark-v10";
//   console.log(theme);
// })();

// "style", "mapbox://styles/mapbox/street-v11";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  .card {
    background: ${({ theme }) => theme.body};
  }
  `;

//   .map-container{
//    style: "mapbox://styles/mapbox/${mapSelector({ theme })}"
//   }
