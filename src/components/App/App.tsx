import GlobalStyle from "@styles/styled-components.global";
import theme from "@styles/styled-components.theme";
import { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";
import * as Styled from "./App.style";

const App: FunctionComponent = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Styled.App></Styled.App>
      </ThemeProvider>
    </>
  );
};

export default App;
