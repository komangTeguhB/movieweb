import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StyledDetailedContainer } from "../styles/StyledContentContainer";
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

    function handleComment() {
       if (localComment !== "") {
        storeComment();
       }
    }

    function storeComment() {
        const now = new Date();
        const newObj =  {
            movieId: movieId,
            name: "Aubameong",
            email: "Aubameong@gmail.com",
            date: now.toLocaleDateString(),
            time: now.toLocaleTimeString(),
            comment: localComment,
        };
        localInteractions.push(newObj);
        dispatch({ type: "SET_INTERACTIONS", value: localInteractions });
        setLocalComment("");
    }

    return (
        <StyledDetailedContainer>
                <div className="top-page-container">
                    <div className="left-container">
                        <h2 style={{marginBottom: "0px"}}>Movie Detail</h2>
                    </div>
                    <div className="right-container">
                    </div>
                </div>
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
                                                    <p style={{paddingRight: "50px"}}><b>Description: </b>{detail.overview}</p>
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
                            <div className="input-comment-container">
                                <textarea className="input-comment-style" rows={4} value={localComment} onChange={(e) => setLocalComment(e.target.value)} placeholder="Write a comment..."></textarea>
                                <button className="submit-comment-style" onClick={() => handleComment()}>Submit</button>
                            </div>
                            <h3>Comments:</h3>
                            <div className="comments-container">
                                {
                                    localInteractions.length > 0 ?
                                    localInteractions.filter((el: any) => el.movieId === movieId).map((element: any, index: number) => (
                                        <div className="comments-user-container">
                                            <p key={`interactions1-${index}` } className="comments-user-name">{element.name} ({element.email})</p>
                                            <p key={`interactions3-${index}` } className="comments-user-date">{element.date} {element.time}</p>
                                            <p key={`interactions5-${index}` } className="comments-user-comment">{element.comment}</p>
                                        </div>
                                    ))
                                    :
                                    <></>
                                }
                            </div>
                        </div>
                    </div>
                </div>
        </StyledDetailedContainer>
    )
}
