import React from 'react';
import "./Profile.css";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import {useFormValidation} from "../../utils/ValidateForm";

const Profile = ({onUpdateUser, onSignOut, user}) => {

  // const currentUser = React.useContext(CurrentUserContext);
  const validation = useFormValidation();

  const {name, email} = validation.values;

  React.useEffect(() => {
      validation.setValues({
        name: user.name, 
        email: user.email})
  }, [user]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser(user.id, { name, email});
    validation.resetForm();
  }

  return (
    <section className="profile">
      <form 
        className="profile__info" 
        name="profile" 
        onSubmit={handleSubmit}>
        <h2 className="profile__title">{`Hello ${user.name}!`}</h2>
        <div className="profile__container">
          <div className="profile__container-item">
            <label className="profile__lable" htmlFor="profile-name">Your name</label>
            <input 
              type="text" 
              className={`form-input form__input_type_profile ${!validation.validity.name && "form-input-error"}`} 
              id="profile-name"
              name="name"
              value={validation.values.name || ""} 
              onChange={validation.handleChange}
              placeholder="Your name"
              minLength="2" 
              maxLength="40" 
              required />
            <span 
                className="profile__input-error" 
                id="profile-name-error">{validation.errors.name}
            </span>
          </div>
          <div className="profile__container-item">
            <label className="profile__lable" htmlFor="profile-email">E-mail</label>
            <input 
              type="email" 
              className={`form-input form__input_type_profile ${!validation.validity.email && "form-input-error"}`} 
              id="profile-email"
              name="email" 
              value={validation.values.email || ""} 
              onChange={validation.handleChange}
              placeholder="Your e-mail"
              minLength="2" 
              maxLength="40" 
              required 
            />
            <span 
                className="profile__input-error" 
                id="profile-email-error">{validation.errors.email}
            </span>
          </div> 
        </div> 
        <button 
          type="submit" 
          className={`button button_type_edit ${!validation.isFormValid ? "button_type_edit_disabled" : ""}`}
          disabled={!validation.isFormValid}>
          Edit
        </button>
        <Link className="link profile__signout-link" to='/' onClick={onSignOut}>Log out</Link>
      </form>
    </section> 
  )
};

export default Profile;