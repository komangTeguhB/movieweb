import { StyledGrid } from "./moviesStyles";
import { useNavigate  } from "react-router-dom";
import imageBroken from "./../../assets/image_broken.png";

type Props = {
    title: string;
    imageUrl: string;
    keyItem: string;
    date: string;
    movieId: number;
}

export default function Grid(props: Props) {
    const { title, imageUrl, keyItem, date, movieId } = props;
    const localeDate = new Date(date);
    const imageBaseUrl = process.env.REACT_APP_IMAGE_MOVIE_URL;
    const navigate = useNavigate ();

    function handleOnMovieClick(id: number) {
      navigate(`/detail/${id}`);
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
        </StyledGrid>
    )
}