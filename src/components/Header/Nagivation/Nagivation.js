import { NavLink } from 'react-router-dom';
import Account from '../../Profile/Account/Account';
import { MdOutlineSchool } from "react-icons/md";
import { AiOutlinePrinter } from "react-icons/ai";
import { RiHome5Line } from "react-icons/ri";
import "./Navigation.css";
import React from 'react';
import { LoggedInUserContext } from "../../../contexts/CurrentUserContext";

const Navigation = ({onSignOut, mobile}) => {

  const loggedIn = React.useContext(LoggedInUserContext);

  return (
    <>
      {loggedIn ? (
        <React.Fragment className={mobile ? "nav-mobile" : "" }>
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
          </React.Fragment>
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