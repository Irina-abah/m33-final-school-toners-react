import { NavLink } from 'react-router-dom';
import Account from '../../Profile/Account/Account';
import { MdOutlineSchool } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiHome5Line } from "react-icons/ri";
import "./Navigation.css";
import React from 'react';
import { LoggedInUserContext } from "../../../contexts/CurrentUserContext";

const Navigation = ({onSignOut}) => {

  const loggedIn = React.useContext(LoggedInUserContext);

  const [mobile, setMobile] = React.useState(false);

  const handleClick = () => {
    setMobile(!mobile)
  }

  return (
    <>
      {loggedIn ? (
        <>
        <div className={mobile ? "nav-mobile" : "nav-wrap"}>
        <nav className="navigation">
          <ul className="nav-list">
          <div className="item-wrapper">
              <RiHome5Line/>
              <li className="nav-item">
                <NavLink className={({ isActive }) =>
                isActive ? "link_active" : "link"} to="/">Home</NavLink>
              </li>
            </div>
            <div className="item-wrapper">
              <MdOutlineSchool/>
              <li className="nav-item">
                <NavLink className={({ isActive }) =>
                isActive ? "link_active" : "link"} to="/schools">All Schools</NavLink>
              </li>
            </div>
          </ul>
          </nav>
          <Account 
            onSignOut={onSignOut}
          />
          </div>
          {mobile && <button type="button" className="button button_type_close" onClick={handleClick} aria-label="close"> 
          </button>}
          <GiHamburgerMenu className="hamburger" onClick={handleClick}/>
          </>
      ) : (
        <nav className="navigation-login">
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink className="link header__link_type_signup" to="/signup">Register</NavLink>
            </li>
            <li className="nav-item-sign">
              <NavLink className="link header__link_type_signin" to="/signin">Log in</NavLink>
            </li>
          </ul>
        </nav>
      )}
    </>
  )
};

export default Navigation;