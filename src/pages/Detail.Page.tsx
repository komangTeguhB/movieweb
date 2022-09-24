import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StyledDetailMovieContainer } from "../styles/StyledContentContainer";
import loadingIndicator from "./../assets/loading_icon.gif";
import backdropBroken from "./../assets/backdrop_broken.jpg";
import api from "./../api";
import { globalContext } from "../store/GlobalStore";

export default function Detail() {
    const params = useParams();
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
    const [localComment, setLocalComment] = useState("");
    const [movieId,] = useState(params.movieId ? parseInt(params.movieId) : 0 );
    const imageBaseUrl = process.env.REACT_APP_IMAGE_MOVIE_URL;
    const { globalState, dispatch } = useContext(globalContext);
    let localInteractions = globalState.interactions;

    useEffect(() => {
        setIsLoading(true);
        api.getMovieDetail(movieId)
        .then((data) => {
            setIsLoading(false);
            setDetail(data);
        })
        .catch((error) => {
            setIsLoading(false);
            setError(error.message);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const handleComment = () => {
        const now = new Date();
        const newObj =  {
            movieId: movieId,
            name: "Komang",
            email: "KomangCucokMeong@gmail.com",
            date: now.toLocaleDateString(),
            time: now.toLocaleTimeString(),
            comment: localComment,
        };
        localInteractions.push(newObj);
        dispatch({ type: "SET_INTERACTIONS", value: localInteractions });
    }

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
                            <div>
                                <input onChange={(e) => setLocalComment(e.target.value)}></input>
                                <button onClick={() => handleComment()}>Submit</button>
                            </div>
                            <div>
                                {
                                    localInteractions.length > 0 ?
                                    localInteractions.filter((el: any) => el.movieId === movieId).map((element: any, index: number) => (
                                        <>
                                            <p key={`interactions1-${index}` }>Name: {element.name}</p>
                                            <p key={`interactions2-${index}` }>Email: {element.email}</p>
                                            <p key={`interactions3-${index}` }>Date: {element.date}</p>
                                            <p key={`interactions4-${index}` }>Time: {element.time}</p>
                                            <p key={`interactions5-${index}` }>Comment: {element.comment}</p>
                                        </>
                                    ))
                                    :
                                    <></>
                                }
                            </div>
                        </div>
                    </div>
                </div>
        </StyledDetailMovieContainer>
        </>
    )
}
