import { NavLink } from "react-router-dom";
import * as styled from './styles';
import Logo from '../../assets/logo.png';


type Props = {
  open: boolean;
}

function RightNav(props: Props) {
  return (
    <>
      <styled.Ul open={props.open}>
        <styled.LogoUl src={Logo} alt="Logo" />

        <NavLink  to="/"
            style={
                ({isActive}) => (
                isActive 
                ? {
                    fontWeight: "bold",
                    color: "#0DADEA"
                }
                :{}
                )
            }
        end>
          <li>Main</li>
        </NavLink>
        <NavLink to="/popular"
            style={
                ({isActive}) => (
                isActive 
                ? {
                    fontWeight: "bold",
                    color: "#0DADEA"
                }
                :{}
                )
            }
        >
          <li>Popular Movies</li>
        </NavLink>
        <NavLink to="/topRated"
          style={
                ({isActive}) => (
                isActive 
                ? {
                    fontWeight: "bold",
                    color: "#0DADEA"
                }
                :{}
                )
            }
        >
          <li>Top Rated Movies</li>
        </NavLink>
        <NavLink to="/user"
          style={
                ({isActive}) => (
                isActive 
                ? {
                    fontWeight: "bold",
                    color: "#0DADEA"
                }
                :{}
                )
            }
        >
          <li>User</li>
        </NavLink>
      </styled.Ul>
    </>
  )
}

export default RightNav