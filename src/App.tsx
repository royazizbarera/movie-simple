import React from "react";
import { CssBaseline, CssVarsProvider } from "@mui/joy";
import theme from "./configs/theme";
import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routers/RoutesApp";
// import "@fontsource/quicksand";
import "@fontsource/roboto";
import ScrollToTop from "./views/components/ScrollToTop";
import { UserProvider } from "./contexts/useAuth";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <CssVarsProvider theme={theme}>
          <CssBaseline />
          <ScrollToTop />
          <RoutesApp />
        </CssVarsProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
