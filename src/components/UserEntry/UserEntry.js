
import { Link } from "react-router-dom";
import "./UserEntry.css";

const UserEntry = ({
  title, 
  onSubmit, 
  children, 
  isFormValid, 
  isLoading,
  buttonName, 
  message, 
  link, 
  linkName
}) => {

  return (
    <div className="user-entry">
      <form 
        className="user-entry__info" 
        name="user-entry" 
        onSubmit={onSubmit}>
          <h2 className="user-entry__title">{title}</h2>
          <div className="profile__container">
            {children}
          </div>
          <button 
            type="submit" 
            className={`button button_type_sign ${!isFormValid ? "button_type_sign_disabled" : ""}`} disabled={isLoading}>
            {buttonName}
          </button>
          <p className="user-entry__message">
          {message} 
          <Link to={link} className="link user-entry__link">
            {linkName}
          </Link>
        </p>
      </form>
    </div>
  )
};

export default UserEntry;