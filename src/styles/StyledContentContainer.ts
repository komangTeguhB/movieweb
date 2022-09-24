import styled from "styled-components";
import { colors } from "../colors";

export const StyledContentContainer = styled.div`
.top-filter-container {    
    padding: 30px;
    padding-bottom: 0px;
    display: flex;
    flex-wrap: wrap;
    text-align: left;
        
    .button-filters {
        flex: 10%;
        text-align: right;

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

export const StyledDetailMovieContainer = styled.div`
.page-container {    
    width: 100%;
    height: auto;
    display: flex;
    font-family: "Roboto";
    font-style: normal;
    font-size: 22px;
    color: ${colors.blackhole};

    .content-container {
            width: 100%;
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
`;
