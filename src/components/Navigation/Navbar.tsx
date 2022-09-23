import * as styled from './styles';
import Logo from '../../assets/logo.png';
import Burger from './Burger';

type Props = {
  children?: any;
}

export default function Navbar(props: Props) {
  return (
    <>
      <styled.Nav>
        <styled.Logo src={Logo} alt="logo" />
      </styled.Nav>
      <Burger />
      {props.children}
    </>
  )
}