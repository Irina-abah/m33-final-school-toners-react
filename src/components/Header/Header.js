import "./Header.css";
import { Link} from 'react-router-dom';
import logo from "../../images/laurus-trust-logo.svg";
import Navigation from "./Nagivation/Nagivation";

const Header = ({onSignOut }) => {
  return (
    <header className="header">
      <Link className="header-link" to="/">
        <img className="header-logo" src={logo} alt="Laurus Trust logo"/>
      </Link>
      <Navigation>
        onSignOut={onSignOut}
      </Navigation> 
    </header>
  )
};

export default Header; 