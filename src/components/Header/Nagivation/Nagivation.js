import { NavLink } from 'react-router-dom';
import Account from '../../Profile/Account/Account';
import { IoSchoolOutline } from "react-icons/io5";
import { MdOutlineInventory2 } from "react-icons/md";
import "./Navigation.css";
import React from 'react';
import { LoggedInUserContext } from "../../../contexts/CurrentUserContext";

const Navigation = ({onSignOut }) => {

  const loggedIn = React.useContext(LoggedInUserContext);

  return (
    <div className="nav-items">
      {loggedIn ? (
        <nav className="navigation">
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
        </nav>
      ) : (
        <nav className="navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink className="link header__link_type_signup" to="/signup">Register</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="link header__link_type_signin" to="/signin">Log in</NavLink>
            </li>
          </ul>
        </nav>
      )}
    </div>
  )
};

// const Navigation = ({onSignOut }) => {
//   return (
//     <div className="nav-items">
//         <nav>
//           <ul className="nav-list">
//             <div className="item-wrapper">
//               <IoSchoolOutline/>
//               <li className="nav-item">
//                 <NavLink className="link"to="/schools">All Schools</NavLink>
//               </li>
//             </div>
//             <div className="item-wrapper">
//               <MdOutlineInventory2/>
//               <li className="nav-item">
//                 <NavLink className="link" to="/toners">Toners</NavLink>
//               </li>
//             </div>
//           </ul>
//         </nav>
//         <Account onSignOut={onSignOut}/>
//     </div>
//   )
// };


export default Navigation;