import { NavLink } from 'react-router-dom';
import Account from '../../Profile/Account/Account';
import { IoSchoolOutline } from "react-icons/io5";
import { MdOutlineInventory2 } from "react-icons/md";
import "./Navigation.css";

const Navigation = ({loggedIn, onSignOut}) => {
  return (
    <div className="nav-items">
      {loggedIn ? (
        <>
          <ul className="nav-list">
            <div className="item-wrapper">
              <IoSchoolOutline/>
              <li className="nav-item">
                <NavLink className="link"to="/schools">All Schools</NavLink>
              </li>
            </div>
            <div className="item-wrapper">
              <MdOutlineInventory2/>
              <li className="nav-item">
                <NavLink className="link" to="/toners">Toners</NavLink>
              </li>
            </div>
          </ul>
          <Account onSignOut={onSignOut}/>
        </>
      ) : (
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink className="link header__link_type_signup" to="/signup">Register</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="link header__link_type_signin" to="/signin">Log in</NavLink>
          </li>
        </ul>
      )}
    </div>
  )
};

export default Navigation;