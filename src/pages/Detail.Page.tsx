import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StyledDetailMovieContainer } from "../styles/StyledContentContainer";
import loadingIndicator from "./../assets/loading_icon.gif";
import backdropBroken from "./../assets/backdrop_broken.jpg";
import api from "./../api";

export default function Detail() {
    const [isLoading, setIsLoading] = useState(false);
    const [detail, setDetail] = useState({
        backdrop_path: "",
        budget: 0,
        id: "",
        original_title: "",
        overview: "",
        popularity: 0,
        poster_path: "",
        release_date: "",
        revenue: 0,
        status: "",
        tagline: "",
        title: "",
        vote_average: 0,
        vote_count: 0,
        genres: [{id: "", name: ""}],
    });
    const [error, setError] = useState("");
    const params = useParams();
    const imageBaseUrl = process.env.REACT_APP_IMAGE_MOVIE_URL;

    useEffect(() => {
        if (params.movieId) {
            setIsLoading(true);
            api.getMovieDetail(parseInt(params.movieId))
            .then((data) => {
                setIsLoading(false);
                setDetail(data);
            })
            .catch((error) => {
                setIsLoading(false);
                setError(error.message);
            })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <>
        <h1>Movie Detail Page </h1>
        <StyledDetailMovieContainer>
                <div className="page-container">
                    <div className="content-container">
                        <div className="shadow-box">
                            {isLoading ? (
                                <div className="detail-container">
                                    <div className="loading-container">
                                        <img src={loadingIndicator} alt="loading"></img>
                                    </div>
                                </div>
                                ) :
                                    error !== "" ?
                                    <h2 style={{color: "red"}}>Fetching error: {error}</h2> : 
                                    (
                                        <>
                                            {/* <div className="backdrop-container">
                                                <img src={`${imageBaseUrl}${detail.backdrop_path}`} alt="backdrop" className="backdrop"></img>
                                            </div> */}
                                            <div className="detail-container">
                                                <div className="left-container">
                                                    {detail.backdrop_path ?
                                                        <img src={`${imageBaseUrl}${detail.poster_path}`} alt="backdrop"></img> :
                                                        <img src={backdropBroken} alt="backdrop" width="550px" height="350px"></img>
                                                    }
                                                </div>
                                                <div className="right-container">
                                                    <p><b>Title: </b>{detail.title}</p>
                                                    <p><b>Original Title: </b>{detail.original_title}</p>
                                                    <p><b>Release Date: </b>{detail.release_date}</p>
                                                    <p><b>Description: </b>{detail.overview}</p>
                                                    <p><b>Genres:</b>
                                                        {detail.genres.map((element, index) => (
                                                            <p key={`gnere-${index}`} style={{marginLeft: "10px"}}>- {element.name}</p>    
                                                        ))}
                                                    </p>
                                                </div>
                                            </div>
                                        </>
                                    )
                            }
                        </div>
                    </div>
                </div>
        </StyledDetailMovieContainer>
        </>
    )
}
