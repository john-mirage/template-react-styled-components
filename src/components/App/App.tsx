import GlobalStyle from "@styles/styled-components.global";
import theme from "@styles/styled-components.theme";
import { ThemeProvider } from "styled-components";
import * as SC from "./App.style";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <SC.App>
          <SC.Title>
            React with <span>Styled components</span>
          </SC.Title>
        </SC.App>
      </ThemeProvider>
    </>
  );
};

export default App;
