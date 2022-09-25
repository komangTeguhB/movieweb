import { useContext, useEffect, useState } from "react";
import { StyledGrid } from "./moviesStyles";
import { useNavigate } from "react-router-dom";
import imageBroken from "./../../assets/image_broken.png";
import { globalContext } from "../../store/GlobalStore";


type Props = {
    title: string;
    imageUrl: string;
    keyItem: string;
    date: string;
    movieId: number;
    favoriteAble?: boolean; 
}

export default function Grid(props: Props) {
    const [isFavorited, setIsFavorited] = useState(false);
    const { title, imageUrl, keyItem, date, movieId } = props;
    const localeDate = new Date(date);
    const imageBaseUrl = process.env.REACT_APP_IMAGE_MOVIE_URL;
    const navigate = useNavigate();
    const { globalState, dispatch } = useContext(globalContext);
    let localFavoriteMovies = globalState.favoriteMovies;

    useEffect(() => {
      const movieIsFavorited = localFavoriteMovies.findIndex((element: any) => element.id === movieId);
      if (movieIsFavorited > -1) {
        setIsFavorited(true);
      }
    },[])
    
    function handleOnMovieClick(id: number) {
      navigate(`/detail/${id}`);
    }

    function handleAddToFavorite() {
       const newObj =  {
          original_title: title,
          poster_path: imageUrl,
          release_date: date,
          id: movieId,
        };
        localFavoriteMovies.push(newObj);
        dispatch({ type: "SET_FAVORITE", value: localFavoriteMovies });
        setIsFavorited(true);
    }

    return (
       <StyledGrid>
          <div className="box-paper" id={keyItem} key={keyItem} onClick={() => handleOnMovieClick(movieId)}>
          <p className="grid-title">
            <b>{title}</b><br />
            <b className="grid-subtitle">{localeDate.toLocaleDateString()}</b>
          </p>
            <div
                className="image-container"
                id={"imgContainer-" + keyItem}
                key={"imgContainer-" + keyItem}
            >
              {imageUrl ? 
                <img
                  src={`${imageBaseUrl}${imageUrl}`}
                  alt="MovieImage"
                  id={"img-" + keyItem}
                  key={"img-" + keyItem}
                  width="190px"
                  height="250px"
                /> :
                <img
                  src={imageBroken}
                  alt="MovieImage"
                  id={"img-" + keyItem}
                  key={"img-" + keyItem}
                  width="190px"
                  height="250px"
                /> 
              }
            </div>
          </div>
          {props.favoriteAble && <button className="addFavorite-btn-style" onClick={() => handleAddToFavorite()} disabled={isFavorited}>Add to favorite</button>}
        </StyledGrid>
    )
}