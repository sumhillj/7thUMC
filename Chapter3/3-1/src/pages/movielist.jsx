import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const MovieList = () => {
  const { category } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      let url = "";
      if (category === "now-playing") url = "https://api.themoviedb.org/3/movie/now_playing";
      else if (category === "popular") url = "https://api.themoviedb.org/3/movie/popular";
      else if (category === "top-rated") url = "https://api.themoviedb.org/3/movie/top_rated";
      else if (category === "up-coming") url = "https://api.themoviedb.org/3/movie/upcoming";

      const options = {
        method: "GET",
        url: url,
        params: { language: "ko", page: "1" },
        headers: {
          accept: "application/json",
          Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmFjMmNiYjIwMzc1MDM1MjI1MDZjMTRkODFmYjA5OSIsIm5iZiI6MTcyOTE1ODE4Mi43NzY2NjEsInN1YiI6IjY3MDUxMjk4YmQ3Y2Q4NmRhNTFkNDk4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zw58j7Kvp4nSa4dgneq4D3U484OvQt9bgmjhYw37QJg",
        },
      };

      try {
        const response = await axios.request(options);
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [category]);


  return (
    <MovieGrid>
      {movies.map((movie) => (
        <MovieCard key={movie.id}>
          <MoviePoster
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <MovieInfo>
            <MovieTitle>{movie.title}</MovieTitle>
            <ReleaseDate>{movie.release_date}</ReleaseDate>
          </MovieInfo>
        </MovieCard>
      ))}
    </MovieGrid>
  );
};

export default MovieList;

const MovieGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0 60px;
  gap: 20px;
  min-width: 1200px;
`;

const MovieCard = styled.div`
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const MoviePoster = styled.img`
  width: 120px;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 0px;
`;

const MovieInfo = styled.div`
  text-align: left;
`;

const MovieTitle = styled.p`
  font-size: 15px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 0px;
`;

const ReleaseDate = styled.p`
  font-size: 10px;
  color: #aaaaaa;
`;