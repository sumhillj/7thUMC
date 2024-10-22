import { MOVIES } from "../mocks/movies";
import { useState, useEffect } from "react";
import axios from "axios";

const MoviesPage = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
        const getMovies = async () => {
            const movies = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, {
                headers: {
                    Authorization: `Bearer wusl7575**`,
                }
            })
            setMovies(movies);
        }
        getMovies()
    }, []);
    
    return (
        <S.CardList>
            {movies.data?.results.map((movie) => (
                <Card key={movie.id} movie={movie}/>
            ))}
        </S.CardList>
    )
};

export default MoviesPage;
