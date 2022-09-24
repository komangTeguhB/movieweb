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