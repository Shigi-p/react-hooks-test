import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

  console.log(movie);
  console.log(movie.Year);

  const style = {
    maxWidth: '340px',
    margin: '10px auto'
  };

  return (
    <Card style={style}>
      <CardHeader
        title={movie.Title}
      />
      <CardMedia
        component="img"
        alt={`The movie titled: ${movie.Title}`}
        image={poster}
        title={movie.Year}
      />
  <CardContent>
    <Typography component="h2">
      { movie.Year }
    </Typography>
  </CardContent>
    </Card>
  );
};


export default Movie;