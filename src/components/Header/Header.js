import "./Header.css";
import { Link} from 'react-router-dom';
import logo from "../../images/laurus-trust-logo.svg";
import Navigation from "./Nagivation/Nagivation";
import { GiHamburgerMenu } from "react-icons/gi";
import React from 'react';

const Header = ({onSignOut}) => {

  const [mobile, setMobile] = React.useState(false);

  const handleClick = () => {
    setMobile(!mobile)
  }

  return (
    <header className="header">
      <Link className="header-link" to="/">
        <img className="header-logo" src={logo} alt="Laurus Trust logo"/>
      </Link>
      <Navigation
      onSignOut={onSignOut}
      mobile={mobile}
      />
      <GiHamburgerMenu className="hamburger" onClick={handleClick}/>
    </header>
  )
};

export default Header; 