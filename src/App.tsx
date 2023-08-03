import React from "react";
import AppRoutes from "./Rourtes";
import { AppBox } from "./components/User/styles";
import { createGlobalStyle } from "styled-components";
import AmaranthWoff from "./fonts/amaranth-v18-latin-italic.woff2";
import AmaranthWoff2 from "./fonts/amaranth-v18-latin-regular.woff2";

interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => {
  const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Roboto Condensed';
  src: url(${AmaranthWoff}) format('woff2'),
       url(${AmaranthWoff2}) format('woff');
}
`;
  const GlobalStyle = createGlobalStyle`
  body {
    padding:0;
    margin:0;
    background-color: Silver;
    background-image: url("https://img.freepik.com/free-photo/light-gray-concrete-wall_53876-89532.jpg?w=1380&t=st=1691082589~exp=1691083189~hmac=adc9fd760a3ee8a9e5d1ab17c078b90fb7bfe25a2db1dd5b9c2ef8a92f5d3c04");
    background-repeat:no-repeat;
    background-size:cover;
    font-family: 'Roboto Condensed', sans-serif;
  }
`;
  return (
    <AppBox>
      <FontStyles />
      <GlobalStyle />
      <AppRoutes />
    </AppBox>
  );
};

export default App;
