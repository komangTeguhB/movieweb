import styled from "styled-components";
import { colors } from "../colors";

export const StyledContentContainer = styled.div`
font-family: "Roboto";
font-style: normal;

.top-filter-container {    
    padding: 30px;
    padding-top: 0px;
    padding-bottom: 0px;
    display: flex;
    flex-wrap: wrap;
    text-align: left;

    .button-filters {
        flex: 10%;
        text-align: right;
        padding-top: 30px;

        .topRated-btn-style {
                min-width: 120px;
                margin-right: 10px;
                margin-bottom: 10px;
                padding: 10px;
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                border-radius: 6px;
                border: 1px solid ${colors.lightGrey}
                
               
        }
        .topRated-btn-style.active {
                background-color: ${colors.blackhole};
                color: ${colors.lightGrey};
        }
        .topRated-btn-style:hover {
                background-color: ${colors.blackhole};
                color: ${colors.white};
        }

        .popular-btn-style {
                min-width: 120px;
                margin-right: 10px;
                padding: 10px;
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                border-radius: 6px;
                border: 1px solid ${colors.lightGrey}
        }
        .popular-btn-style.active {
                background-color: ${colors.blackhole};
                color: ${colors.lightGrey};
        }
        .popular-btn-style:hover {
                background-color: ${colors.blackhole};
                color: ${colors.white};
                border-radius: 4px;
        }
    }

    .input-filters {
        flex: 52%;
        padding-top: 30px;

        .search-btn-style {
                min-width: 120px;
                margin-left: 15px;
                padding: 10px;
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                border-radius: 6px;
                border: 1px solid ${colors.lightGrey}
        }
        .search-btn-style:hover {
                background-color: ${colors.blackhole};
                color: ${colors.white};
                border-radius: 4px;
        }

        .input-style {
                padding: 10px;
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                border-radius: 6px;
                border: 1px solid ${colors.lightGrey}
        }
    }
    
}
`;

export const StyledDetailedContainer = styled.div`
.top-page-container {
    display: flex;
    flex-wrap: wrap;
    padding-left: 32px;
    padding-right: 32px;
    font-family: "Roboto";
    font-style: normal;
    
        .left-container {
            display: flex;
            flex: 50%;
            justify-content: left;
            border-bottom: 3px solid ${colors.blueActive};
        }

        .right-container {
            display: flex;
            flex: 50%;
            justify-content: right;

            .user-label-style {
                font-size: 18px;
                line-height: 20px;
                padding-top: 25px;
            }
        }
}
.page-container {    
    width: 100%;
    height: auto;
    display: flex;
    flex: wrap;
    font-family: "Roboto";
    font-style: normal;
    font-size: 22px;
    color: ${colors.blackhole};

    .content-container {
            flex: 100%;
            padding-top: 15px;
            padding-left: 30px;
            padding-right: 30px;
            padding-bottom: 60px;
            display: flex;

            .shadow-box {
                    display: flex;
                    flex: 100%;
                    width: 100%;
                    background-color: ${colors.white};
                    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                    border-radius: 6px;
                    padding: 1%;
                    padding-bottom: 100px;
                    flex-direction: column;
                    
                    .backdrop-container{
                        flex: 100%;
                        max-width: 100%;
                        max-height: 300px;
                        overflow: hidden;
                    }

                    .backdrop {
                        width: 1230px;
                    }

                    .detail-container {
                        display: flex;
                        flex-wrap: wrap;
                        padding: 20px;
                        flex: 100%;
                        border-bottom: 1px solid ${colors.lightGrey};
                        .left-container {
                          flex: 50%;
                          margin-top: 26px;
                        }
                        .right-container {
                          flex: 50%;
                          text-align: left;

                          .addFavorite-btn-style {
                            min-width: 250px;
                            min-height: 60px;
                            margin-right: 10px;
                            margin-bottom: 10px;
                            padding: 10px;
                            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                            border-radius: 6px;
                            border: 1px solid ${colors.lightGrey}
                          }
                          .addFavorite-btn-style:hover {
                              background-color: ${colors.blackhole};
                              color: ${colors.white};
                          }
                        }
                        .loading-container{
                          flex: 100%;
                        }
                    }

                    .input-comment-container {
                        display: flex;
                        flex: 100%;
                        justify-content: center;
                        flex-direction: column;
                        padding: 90px;
                        padding-top: 20px;
                        padding-bottom: 20px;
                    }

                    .input-comment-style {
                        min-height: 60px;
                        font-size: 20px;
                        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                        border-radius: 6px;
                        border: 1px solid ${colors.lightGrey}
                    }

                    .submit-comment-style {
                        margin-top: 10px;
                        height: 35px;
                        font-size: 20px;
                        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                        border-radius: 6px;
                        border: 1px solid ${colors.lightGrey}
                    }

                    .submit-comment-style:hover {
                        background-color: ${colors.blackhole};
                        color: ${colors.white};
                    }

                    .comments-container {
                        display: flex;
                        flex: 100%;
                        justify-content: center;
                        flex-direction: column;
                        
                        .comments-user-container {
                                display: flex;
                                text-align: left;
                                flex-direction: column;
                                padding: 50px;
                                padding-top: 10px;
                                padding-bottom: 10px;
                                border-bottom: 1px solid ${colors.lightGrey};

                                .comments-user-name {
                                  margin: 5px;
                                }
                                }
                                .comments-user-date {
                                  margin: 5px;
                                }
                                .comments-user-comment {
                                        margin: 5px;
                                }
                        }
                    }

                    
                }
                    
            }
    }
}
`;

export const StyledCommonContainer = styled.div`
    .top-page-container {
        display: flex;
        flex-wrap: wrap;
        padding-left: 32px;
        padding-right: 32px;
        font-family: "Roboto";
        font-style: normal;
        
            .left-container {
                display: flex;
                flex: 50%;
                justify-content: left;
                border-bottom: 3px solid ${colors.blueActive};
            }

            .right-container {
                display: flex;
                flex: 50%;
                justify-content: right;

                .user-label-style {
                    font-size: 18px;
                    line-height: 20px;
                    padding-top: 25px;
                }
            }
    }
`;

export const StyledUserContainer = styled.div`
.top-page-container {
    display: flex;
    flex-wrap: wrap;
    padding-left: 32px;
    padding-right: 32px;
    font-family: "Roboto";
    font-style: normal;
    
        .left-container {
            display: flex;
            flex: 50%;
            justify-content: left;
            border-bottom: 3px solid ${colors.blueActive};
        }

        .right-container {
            display: flex;
            flex: 50%;
            justify-content: right;

            .user-label-style {
                font-size: 18px;
                line-height: 20px;
                padding-top: 25px;
            }
        }
}
.page-container {    
    width: 100%;
    height: auto;
    display: flex;
    flex: wrap;
    font-family: "Roboto";
    font-style: normal;
    font-size: 22px;
    color: ${colors.blackhole};

    .content-container {
            flex: 100%;
            padding-top: 15px;
            padding-left: 30px;
            padding-right: 30px;
            padding-bottom: 60px;
            display: flex;

            .shadow-box {
                    display: flex;
                    flex: 100%;
                    width: 100%;
                    background-color: ${colors.white};
                    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                    border-radius: 6px;
                    padding: 1%;
                    padding-bottom: 100px;
                    flex-direction: column;
                    
                    .backdrop-container{
                        flex: 100%;
                        max-width: 100%;
                        max-height: 300px;
                        overflow: hidden;
                    }

                    .backdrop {
                        width: 1230px;
                    }

                    .detail-container {
                        display: flex;
                        flex-wrap: wrap;
                        padding: 20px;
                        flex: 100%;
                        border-bottom: 1px solid ${colors.lightGrey};
                        .left-container {
                          flex: 50%;
                          margin-top: 26px;
                        }
                        .right-container {
                          flex: 50%;
                          text-align: left;
                        }
                        .loading-container{
                          flex: 100%;
                        }
                    }

                }
                    
            }
    }
}
`;
