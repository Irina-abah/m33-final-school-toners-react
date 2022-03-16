import { VscAccount } from 'react-icons/vsc';
import { RiLogoutCircleLine } from "react-icons/ri";
import "./Account.css";
import { useNavigate } from "react-router-dom";

const Account = ({onLogout}) => {

  const navigate = useNavigate();

  function handleProfile() {
    navigate('/profile');
  }

  return (
    <div className="header-profile">
      <div className="profile-item">
        <VscAccount className="header__profile-icon" alt="Profile icon"/>
        <button className="button button_type_account" onClick={handleProfile}>My Account</button>
      </div>
      <div className="profile-item">
        <RiLogoutCircleLine/>
        <button type="button" onClick={onLogout}>Log out</button>
      </div>
    </div>
  )
}

export default Account;