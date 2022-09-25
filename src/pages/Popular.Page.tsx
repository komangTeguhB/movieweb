import { useEffect, useState } from "react";
import MoviesContainer from "./../components/Movies/MoviesContainer";
import { StyledCommonContainer } from "./../styles/StyledContentContainer";
import api from "./../api";
import { NavLink } from "react-router-dom";


export default function Popular() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const user = "Aubameong (aubameong@gmail.com)";
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
        <StyledCommonContainer>
            <div className="top-page-container">
                <div className="left-container">
                    <h2 style={{marginBottom: "0px"}}>Popular Movies</h2>
                </div>
                <div className="right-container">
                    <NavLink  to="/user" className="user-label-style">
                        {user}
                    </NavLink>
                </div>
            </div>
            <MoviesContainer movies={movies} loading={isLoading} error={error}></MoviesContainer>
        </StyledCommonContainer>
    )
}