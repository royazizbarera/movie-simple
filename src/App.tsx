import React from "react";
import { CssBaseline, CssVarsProvider } from "@mui/joy";
import theme from "./configs/theme";
import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routers/RoutesApp";
// import "@fontsource/quicksand";
import "@fontsource/roboto";
import ScrollToTop from "./views/components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <CssVarsProvider theme={theme}>
        <CssBaseline />
        <ScrollToTop />
        <RoutesApp />
      </CssVarsProvider>
    </BrowserRouter>
  );
}

export default App;
