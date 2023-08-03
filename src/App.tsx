import React from "react";
import AppRoutes from "./Rourtes";
import { AppBox } from "./components/styles";
import { createGlobalStyle } from "styled-components";

interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => {
  const GlobalStyle = createGlobalStyle`
  body {
    padding:0;
    margin:0;
    background-color:gray;
  }
`;
  return (
    <AppBox>
      <GlobalStyle/>
      <AppRoutes />
    </AppBox>
  );
};

export default App;
