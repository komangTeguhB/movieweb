import { NavLink } from "react-router-dom";
import * as styled from './styles';
import Logo from '../../assets/logo.png';
import { colors } from "../../colors";


type Props = {
  open: boolean;
}

function RightNav(props: Props) {
  const activeStyle = {
    fontWeight: "bold",
    color: colors.blueActive,
    borderBottom: `5px solid ${colors.blueActive}`
  }
  return (
    <>
      <styled.Ul open={props.open}>
        <styled.LogoUl src={Logo} alt="Logo" />

        <NavLink  to="/"
            style={
                ({isActive}) => (
                isActive 
                ? activeStyle
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
                ? activeStyle
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
                ? activeStyle
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
                ? activeStyle
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