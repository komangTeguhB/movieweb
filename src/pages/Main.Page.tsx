import { useEffect, useState } from "react";
import MoviesContainer from "./../components/Movies/MoviesContainer";
import { StyledContentContainer } from "../styles/StyledContentContainer";
import api from "./../api";

export default function Main() {
    const [movies, setMovies] = useState([]);
    const [activeTopRated, setActiveTopRated] = useState("");
    const [activePopular, setActivePopular] = useState("active");
    const [searchText, setSearchText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        executeGetPopularMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    function executeGetTopRatedMovies() {
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
    }

    function executeGetPopularMovies() {
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
    }

    function searchMovie(val: string) {
        setIsLoading(true);
        api.searchMovies(val)
        .then((data) => {
            setIsLoading(false);
            setMovies(data.results);
        })
        .catch((error) => {
            setIsLoading(false);
            setError(error.message);
        })
    }

    function handleFilterClicked(val: string) {
        setSearchText("");
        if (val === "topRated") {
            setActiveTopRated(activeTopRated === "" ? "active" : "");
            setActivePopular("");
            executeGetTopRatedMovies();
        } else {
            setActivePopular(activePopular === "" ? "active" : "");
            setActiveTopRated("");
            executeGetPopularMovies();
        }
    }


    function handleOnKeypress(e: React.KeyboardEvent<any>) {
        if (e.key === "Enter") {
            searchMovie(searchText);
        }
    }
    
    return (
        <StyledContentContainer>
            <div className="top-filter-container">
                <div className="input-filters">
                    <input className="input-style" onKeyDown={(e) => handleOnKeypress(e)} onChange={(e) =>  setSearchText(e.target.value)}></input>
                    <button className="search-btn-style" onClick={() => searchMovie(searchText)}>Search</button>
                </div>
                <div className="button-filters">
                    <button className={`topRated-btn-style ${activeTopRated}`} onClick={() => handleFilterClicked("topRated")}>Top Rated</button>
                    <button className={`popular-btn-style ${activePopular}`} onClick={() => handleFilterClicked("popular")}>Popular</button>
                </div>
            </div>
            <MoviesContainer movies={movies} loading={isLoading} error={error}></MoviesContainer>
        </StyledContentContainer>
    )
}