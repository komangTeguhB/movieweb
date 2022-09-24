import { useEffect, useState } from "react";
import MoviesContainer from "./../components/Movies/MoviesContainer";
import api from "./../api";


export default function TopRated() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setIsLoading(true);
        api.getTopRatedMovies()
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
            <h2 style={{marginBottom: "0px"}}>Top Rated Movies</h2>
            <MoviesContainer movies={movies} loading={isLoading} error={error}></MoviesContainer>
        </div>
    )
}