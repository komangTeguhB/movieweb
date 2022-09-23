import styled from "styled-components";
import { colors } from "../colors";

export const StyledContentContainer = styled.div`
.page-container {    
    width: 100%;
    height: auto;
    display: flex;
    font-family: "Roboto";
    font-style: normal;
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
                    flex-direction: column;
                    width: 100%;
                    background-color: ${colors.white};
                    text-align: center;
                    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                    border-radius: 6px;
                    padding: 12px;
            }
    }
}
`;