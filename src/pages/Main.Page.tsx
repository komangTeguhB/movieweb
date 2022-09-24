import { useEffect, useState } from "react";
import MoviesContainer from "./../components/Movies/MoviesContainer";
import { getDefaultOptions } from "./../api";

export default function Main() {
    const [movies, setMovies] = useState([]);
    const baseUrl = process.env.REACT_APP_API_BASE_URL;
    const api_key = process.env.REACT_APP_MOVIEDB_KEY;
    useEffect(() => {
        fetch(`${baseUrl}/popular?api_key=${api_key}`, getDefaultOptions)
        .then((response: any) => {
            if (response.ok) {
                return response.json();
            }
            throw response;
        })
        .then((data) => {
            setMovies(data.results);
        })
        .catch((error) => {
            console.log(error);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    return (
        <div>
            <MoviesContainer movies={movies}></MoviesContainer>
        </div>
    )
}