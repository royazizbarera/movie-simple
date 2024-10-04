import * as React from "react";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import StarIcon from "@mui/icons-material/Star";
import { Box } from "@mui/joy";
import { Link } from "react-router-dom";
import AspectRatio from "@mui/joy/AspectRatio";
import IconButton from "@mui/joy/IconButton";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAddOutlined";

interface MovieCardProps {
  id?: number;
  title?: string;
  posterUrl?: string;
  rating?: number;
  year?: number;
}

export default function MovieCard({
  id,
  title,
  posterUrl,
  rating,
  year,
}: MovieCardProps) {
  return (
    
      <Box sx={{ display: "flex", maxWidth: "200px", width: "100%" }}>
        <Card
          variant="outlined"
          sx={{
            width: "100%", // Width otomatis sesuai dengan parent
            gap: 0,
          }}
        >
          <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
            <Link to={`/movie/${id}`}>
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
                  src={posterUrl}
                  loading="lazy"
                  alt="Movie Poster"
                  style={{ width: "100%", height: "auto" }}
                />
              </AspectRatio>
            </Link>
          </CardOverflow>

          <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
            <CardContent orientation="vertical" sx={{ pt: 0 }}>
              {/* Rating */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                }}
              >
                <StarIcon sx={{ color: "star.main" }} />
                <Typography level="body-md">{rating}</Typography>
              </Box>
              <Typography
                level="title-md"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  // width: "100%",
                }}
              >
                {title}
              </Typography>
              <Typography level="body-xs">{year}</Typography>
            </CardContent>
          </CardOverflow>
        </Card>
      </Box>
  );
}