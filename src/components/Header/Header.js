import "./Header.css";
import { Link, Route } from 'react-router-dom';
import logo from "../../images/laurus-trust-logo.png";
import Navigation from "./Nagivation/Nagivation";

const Header = ({loggedIn}) => {
  return (
    <header className="header">
      <Link to="/">
        <img className="header-logo" src={logo} alt="Laurus Trust logo"/>
      </Link>
      <Navigation>
        loggedIn={loggedIn}
      </Navigation> 
    </header>
  )
};

export default Header; 