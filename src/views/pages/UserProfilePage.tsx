import { Box, Typography, Grid } from "@mui/joy";
import MovieCard from "../components/MovieCard";
import AppAppBar from "../components/AppAppBar";
import UserCard from "../components/users/UserCard";
import MainLayout from "../layouts/MainLayout";
import movieController from "../../controllers/movieController";
import { useEffect, useState } from "react";



export default function UserProfilePage() {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    movieController
      .getMovies("")
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <AppAppBar />
      <MainLayout giveSpace pt={14}>
        <Grid
          container
          spacing={2}
          direction={"row"}
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            pb: 4,
          }}
        >
          <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography level="h1" pb={2}>
              User Profile
            </Typography>
            <UserCard />
          </Grid>

          {/* Favorite Film Section */}
          {/* <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
            <Box>
              <Grid
                container
                spacing={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2 }}
                sx={{ flexGrow: 1, justifyContent: "space-between" }}
              >
                {favoriteMovies.map((movie) => (
                  <Grid
                    key={movie.id}
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    xl={6}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <MovieCard
                      id={movie.id}
                      title={movie.title}
                      posterUrl={movie.posterUrl}
                      rating={movie.rating}
                      year={Number(movie.year)}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid> */}
        </Grid>
        {/* Post Movie */}
        <Box>
          <Typography level="h1" pb={2}>
            Post Movie
          </Typography>
          <Grid
            container
            spacing={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }}
            sx={{ flexGrow: 1, justifyContent: "left" }}
          >
            {movies.map((movie: any, index: number) => (
              <Grid
                xs={6}
                sm={4}
                md={3}
                lg={2}
                xl={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <MovieCard
                  key={index}
                  id={movie.id}
                  title={movie.title}
                  posterUrl={movie.posterUrl}
                  rating={movie.rating}
                  year={movie.releaseDate}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </MainLayout>
    </>
  );
}
