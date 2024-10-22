import {Link} from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
    return (
        <nav>
            <NavButtons to={'/'}>홈 페이지로 이동</NavButtons>
            <NavButtons to='/movies'>영화 목록 페이지로 이동</NavButtons>
        </nav>
    );
};

export default Navbar;

const NavButtons = styled(Link)`
  background-color: ${props => props.color || 'blue'};
  border: none;
  border-radius: 10px;
  padding: 10px;
  color: white;
`