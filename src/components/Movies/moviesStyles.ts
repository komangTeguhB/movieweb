import styled from "styled-components";
import { colors } from "../../colors";

export const StyledMoviesContainer = styled.div`
.page-container {    
    width: 100%;
    height: auto;
    display: flex;
    font-family: "Roboto";
    font-style: normal;
    color: ${colors.blackhole};
    flex-wrap: wrap;
    
    .content-container {
            flex: 100%;
            padding-top: 15px;
            padding-left: 30px;
            padding-right: 30px;
            padding-bottom: 60px;
            display: flex;

            .shadow-box {
                    display: flex;
                    flex-wrap: wrap;
                    width: 100%;
                    background-color: ${colors.white};
                    text-align: center;
                    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                    border-radius: 6px;
                    padding: 1%;
                    justify-content: space-evenly;
                    align-items: center;
                    min-width: 138px;

                    .grid-item {
                        flex: 15%;
                        padding: 20px;
                        font-size: 25px;
                        text-align: center;
                      }
            }
    }
}


`;

export const StyledGrid = styled.div`
font-family: "Roboto";
font-style: normal;
.box-paper {
    min-height: 325px;
    max-width: 350px;
  }
  .box-paper:hover {
    background-color: ${colors.lightGrey};
    color: ${colors.darkText};
    border-radius: 4px;
  
  }
  
  img {
    border-radius: 4px;
    border: 1px solid #000;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    min-height: 100px;
    max-height: 250px;
    min-width: 150px;
  }
  
  .grid-title {
    min-height: 12vh;
    padding-top: 10px;
    margin-bottom: 0px;
  }
  .grid-subtitle {
    font-size: 20px;
    color: ${colors.darkGray}
  }
  
  .image-container {
    padding-bottom: 10px;
  } 
`