import { Box, Container } from "@mui/joy";
import AppAppBar from "../components/AppAppBar";

export default function MainLayout({
  children,
  appBar = false,
  giveSpace = false,
  mb = 4, 
  pt, // 14 rata rata penggunaan dengan app bar
}: {
  children?: React.ReactNode;
  appBar?: boolean;
  giveSpace?: boolean;
  props?: any;
  mb?: number;
  pt?: number;
}) {
  return (
    <>
      {appBar && <AppAppBar />}
      <Container
        component="main"
        maxWidth="lg"
        sx={{
          ...(!giveSpace && {
            gap: {
              xs: "unset",
              sm: "unset",
              md: "unset",
              lg: "unset",
              xl: "unset",
            },
          }),
          ...(!giveSpace && {
            padding: {
              xs: 0,
              sm: 0,
              md: 0,
              lg: 0,
              xl: 0,
            },
          }),
          ...(!giveSpace && {
            maxWidth: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "none",
              xl: "none",
            },
          }),
          display: "flex",
          flexDirection: "column",
          pt: pt || 0,
          mb: mb,
        }}
      >
        {appBar && <Box sx={{ pb: 8 }} />}
        {children}
      </Container>
    </>
  );
}
