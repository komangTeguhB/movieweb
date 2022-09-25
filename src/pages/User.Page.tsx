import { useContext } from "react";
import { StyledCommonContainer } from "../styles/StyledContentContainer"
import { globalContext } from "../store/GlobalStore";
import MoviesContainer from "../components/Movies/MoviesContainer";


export default function User() {
    const { globalState } = useContext(globalContext);
    let localFavoriteMovies = globalState.favoriteMovies;

    return (
        <StyledCommonContainer>
            <div className="top-page-container">
                <div className="left-container">
                    <h2 style={{marginBottom: "0px"}}>User</h2>
                </div>
                <div className="right-container">
                </div>
            </div>
            {localFavoriteMovies.length > 0 ?
            <MoviesContainer movies={localFavoriteMovies} loading={false} error={""}></MoviesContainer>
            :
            <h2>No favorite movies at the moment</h2>
            }
        </StyledCommonContainer>
    )
}