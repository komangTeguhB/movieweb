import { useEffect, useState } from "react";
import MoviesContainer from "./../components/Movies/MoviesContainer";
import { StyledContentContainer } from "../styles/StyledContentContainer";
import { getDefaultOptions } from "./../api";

export default function Main() {
    const [movies, setMovies] = useState([]);
    const [activeFilter, setActiveFilter] = useState("");
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

    function handleFilterClicked(val: string) {
        //console.log(val);
        if (activeFilter === "") {
            setActiveFilter("active")
        } else {
            setActiveFilter("")
        }
    }
    
    return (
        <StyledContentContainer>
            <div className="top-filter-container">
                <div className="input-filters">
                    <input className="input-style"></input>
                    <button className="search-btn-style">Search</button>
                </div>
                <div className="button-filters">
                    <button className={`topRated-btn-style ${activeFilter}`} onClick={() => handleFilterClicked("topRated")}>Top Rated</button>
                    <button className="popular-btn-style">Popular</button>
                </div>
            </div>
            <MoviesContainer movies={movies}></MoviesContainer>
        </StyledContentContainer>
    )
}