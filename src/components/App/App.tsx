import GlobalStyle from "@styles/styled-components.global";
import theme from "@styles/styled-components.theme";
import { ThemeProvider } from "styled-components";
import * as Styled from "./App.style";

const App = () => {
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
