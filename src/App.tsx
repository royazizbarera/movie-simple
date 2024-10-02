import React from "react";
import { CssBaseline, CssVarsProvider, Box, Container, Grid } from "@mui/joy";
import LoginForm from "./views/components/LoginForm";
import theme from "./configs/theme";
import AppAppBar from "./views/components/AppAppBar";
import MovieCard from "./views/components/MovieCard";
import "@fontsource/quicksand"; // Defaults to weight 400
function App() {
  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <AppAppBar />
      <Container
        component="main"
        maxWidth="lg"
        sx={{ display: "flex", flexDirection: "column", my: 4, gap: 4 }}
      >
        <Box sx={{ pb: 8 }} />
        {/* Test grid movie */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            justifyContent: "center",
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{ flexGrow: 1, justifyContent: "left" }}
          >
            {Array.from({ length: 20 }).map((_, index) => (
              <Grid
                key={index}
                xs={6} // 12 kolom penuh pada layar kecil
                sm={4} // 6 kolom pada layar sedang
                md={3} // 4 kolom pada layar medium ke atas
                lg={2} // 3 kolom pada layar besar
                xl={2} // 2 kolom pada layar ekstra besar
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <MovieCard />
              </Grid>
            ))}
          </Grid>
        </Box>
        {/* AppBar tetap di atas tanpa padding */}

        {/* Konten di bawah AppBar dengan padding */}
        <Box
          sx={{
            padding: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <LoginForm />
          <LoginForm />
          {/* Grid responsif untuk MovieCard */}
          <Box
            sx={{
              display: "grid",
              gap: 2,
              // Menggunakan breakpoint untuk grid yang responsif
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)", // 1 kolom untuk layar kecil (mobile)
                sm: "repeat(2, 1fr)", // 2 kolom untuk layar menengah (tablet)
                md: "repeat(5, 1fr)", // 3 kolom untuk layar lebih besar (desktop)
              },
            }}
          >
            <MovieCard />
          </Box>
        </Box>
      </Container>
    </CssVarsProvider>
  );
}

export default App;
