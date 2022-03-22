import { NavLink } from 'react-router-dom';
import Account from '../../Profile/Account/Account';
import { MdOutlineSchool } from "react-icons/md";
import { AiOutlinePrinter } from "react-icons/ai";
import { RiHome5Line } from "react-icons/ri";
import "./Navigation.css";
import React from 'react';
import { LoggedInUserContext } from "../../../contexts/CurrentUserContext";

const Navigation = ({onSignOut }) => {

  const loggedIn = React.useContext(LoggedInUserContext);

  return (
    <>
      {loggedIn ? (
        <>
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
                {/* <NavLink className="link" activeClassName="link_active" to="/schools">All Schools</NavLink> */}
                <NavLink className={({ isActive }) =>
              isActive ? "link_active" : "link"} to="/schools">All Schools</NavLink>
              </li>
            </div>
            <div className="item-wrapper">
              <AiOutlinePrinter/>
              <li className="nav-item">
                <NavLink className={({ isActive }) =>
              isActive ? "link_active" : "link"} to="/toners">Toners</NavLink>
              </li>
            </div>
          </ul>
          </nav>
          <Account onSignOut={onSignOut}/>
          </>
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
    </>
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