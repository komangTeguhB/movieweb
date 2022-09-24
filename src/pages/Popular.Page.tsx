import { useEffect, useState } from "react";
import MoviesContainer from "./../components/Movies/MoviesContainer";
import api from "./../api";


export default function Popular() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setIsLoading(true);
        api.getPopularMovies()
        .then((data) => {
            setIsLoading(false);
            setMovies(data.results);
        })
        .catch((error) => {
            setIsLoading(false);
            setError(error.message);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    return (
        <div>
            <h1>Popular Movies</h1>
            <MoviesContainer movies={movies} loading={isLoading} error={error}></MoviesContainer>
        </div>
    )
}