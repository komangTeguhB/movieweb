import { useEffect, useState } from "react";
import MoviesContainer from "./../components/Movies/MoviesContainer";
import api from "./../api";
import { StyledCommonContainer } from "./../styles/StyledContentContainer";

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
        <StyledCommonContainer>
            <div className="top-page-container">
                <div className="left-container">
                    <h2 style={{marginBottom: "0px"}}>Top Rated Movies</h2>
                </div>
                <div className="right-container">
                </div>
            </div>
            <MoviesContainer movies={movies} loading={isLoading} error={error} favoriteAble={true}></MoviesContainer>
        </StyledCommonContainer>
    )
}