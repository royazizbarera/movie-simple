import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAddOutlined";

export default function MovieCard() {
  return (
    <Card
      variant="outlined"
      sx={{
        width: "100%", // Width otomatis sesuai dengan parent
      }}
    >
      <CardOverflow>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{
            position: "absolute",
            top: "0.5rem",
            right: "0.5rem",
            zIndex: 100,
          }}
        >
          <BookmarkAddIcon />
        </IconButton>
        <AspectRatio ratio="2/3">
          <img
            src="	https://image.tmdb.org/t/p/w185/tNoRpzsrOOFISEtXbllD0RgfzVt.jpg"
            srcSet="	https://image.tmdb.org/t/p/w185/tNoRpzsrOOFISEtXbllD0RgfzVt.jpg&dpr=2 2x"
            loading="lazy"
            alt="Movie Poster"
            style={{ width: "100%", height: "auto" }}
          />
        </AspectRatio>
      </CardOverflow>

      <CardContent orientation="vertical">
        <Typography
          level="title-md"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            // width: "100%",
          }}
        >
          Yosemite National Park
        </Typography>
        <Typography level="body-xs">2021</Typography>
      </CardContent>
    </Card>
  );
}
