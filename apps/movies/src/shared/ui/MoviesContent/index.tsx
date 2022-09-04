import React from "react";
import { Grid, Title } from "@mantine/core";
import { MovieCard } from "card";

const movies = [
  {
    id: 1,
    title: "Halo",
    image:
      "https://www.themoviedb.org/t/p/w440_and_h660_face/eO0QV5qJaEngP1Ax9w3eV6bJG2f.jpg",
  },
  {
    id: 2,
    title: "Doctor Strange",
    image:
      "https://www.themoviedb.org/t/p/w440_and_h660_face/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
  },
  {
    id: 3,
    title: "The Lost City",
    image:
      "https://www.themoviedb.org/t/p/w440_and_h660_face/neMZH82Stu91d3iqvLdNQfqPPyl.jpg",
  },
  {
    id: 4,
    title: "Shang-Chi",
    image:
      "https://www.themoviedb.org/t/p/w440_and_h660_face/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
  },
  {
    id: 5,
    title: "Turning Red",
    image:
      "https://www.themoviedb.org/t/p/w440_and_h660_face/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
  },
  {
    id: 6,
    title: "Encanto",
    image:
      "https://www.themoviedb.org/t/p/w440_and_h660_face/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
  },
  {
    id: 7,
    title: "Adam Project",
    image:
      "https://www.themoviedb.org/t/p/w440_and_h660_face/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg",
  },
  {
    id: 8,
    title: "Morbius",
    image:
      "https://www.themoviedb.org/t/p/w440_and_h660_face/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg",
  },
];

export const MoviesContent = () => {
  return (
    <>
      <Title pb={24}>Movies</Title>
      <Grid
        sx={{
          gap: "1rem",
        }}
      >
        {movies.map((movie) => {
          return <MovieCard {...movie} key={movie.title} showAddButton />;
        })}
      </Grid>
    </>
  );
};
