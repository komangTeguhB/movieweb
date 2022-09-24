import { StyledMoviesContainer } from "./moviesStyles";
import Grid from "./Grid";
import loadingIndicator from "./../../assets/loading_icon.gif";

type Props = {
    movies: object[];
    loading: boolean;
    error?: string;
}

export default function Main(props: Props) {
    const renderMovieGrid = (items: object[]) => {
        return items.map((element: any, index: number) => (
                <div className="grid-item">
                    <Grid title={element.original_title} imageUrl={element.poster_path} keyItem={`grid-${index}`}></Grid>
                </div>
            ))
    }

    return (
        <StyledMoviesContainer>
            <div className="page-container">
                <div className="content-container">
                    <div className="shadow-box">
                        {props.loading ? 
                         (<>
                            <img src={loadingIndicator} alt='loading'/>
                         </>)
                         :
                          props.error ?
                            <h2 style={{color: "red"}}>Fetching error: {props.error}</h2> :
                                    props.movies.length > 0 ?
                                        renderMovieGrid(props.movies)
                                        : <></>
                        }
                        
                    </div>
                </div>
            </div>
        </StyledMoviesContainer>
    )
}