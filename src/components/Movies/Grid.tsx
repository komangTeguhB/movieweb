import { StyledGrid } from "./moviesStyles";

type Props = {
    title: string;
    imageUrl: string;
    keyItem: string;
}

export default function Grid(props: Props) {
    const { title, imageUrl, keyItem } = props;
    const imageBaseUrl = process.env.REACT_APP_IMAGE_MOVIE_URL;
    return (
       <StyledGrid>
          <div className="box-paper" id={keyItem} key={keyItem}>
          <p className="grid-title"><b>{title}</b></p>
            <div
                className="image-container"
                id={"imgContainer-" + keyItem}
                key={"imgContainer-" + keyItem}
            >
                <img
                src={`${imageBaseUrl}${imageUrl}`}
                alt="MovieImage"
                id={"img-" + keyItem}
                key={"img-" + keyItem}
                width="190px"
                height="250px"
                />
            </div>
          </div>
        </StyledGrid>
    )
}