import { Link } from "react-router-dom";
import './Navbar.css';
function Navbar() {
    return ( <>
    <div className="NavbarWrapper">
      <div className="navlinkWrapper">
    <Link to="/">HOME</Link>
    <Link to="/about">ABOUT</Link>
  <br></br>
    
    <Link to="/cuisine">COUSINE</Link><br/>
    <Link to="/menue">MENUES</Link><br></br>
    <Link to="/reservation">RESERVATION</Link>
    <Link to="/privatedining">PRIVATE DINING</Link>
    </div>
    <div className="line"></div>
    </div>
    </> );
}

export default Navbar;