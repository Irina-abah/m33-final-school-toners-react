import React from 'react';
import UserEntry from '../UserEntry/UserEntry';
import {useFormValidation} from "../../utils/ValidateForm";
import "./Register.css";

const Register = ({onRegister, isLoading}) => {

  const validation = useFormValidation();
  const {name, email, password} = validation.values;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onRegister({name, email, password})
  }

  return (
    <section className="login">
      <UserEntry
        title="Welcome to New User"
        buttonName="Register"
        message="Already registered?"
        link="/signin"
        linkName="Login"
        onSubmit={handleSubmit}
        isFormValid={validation.isFormValid}
        isLoading={isLoading}>
        <div className="user-entry__container">
          <label className="user-entry__lable" htmlFor="profile-name">Name</label>
          <input 
          type="text" 
          className={`form-input form__input_type_sign ${!validation.validity.name && "form-input-error"}`}
          id="profile-name"
          name="name"
          value={validation.values.name || ''}
          onChange={validation.handleChange}
          minLength="2" 
          maxLength="40" 
          title="Enter your name"
          disabled={isLoading}
          required />
        </div>
        <span 
          className={`input-error ${!validation.isFormValid && "input-error_active"}`} 
          id="profile-name-error">{validation.errors.name}
        </span>
        <div className="user-entry__container">
          <label className="user-entry__lable" htmlFor="email">E-mail</label>
          <input 
            type="email" 
            className={`form-input form__input_type_sign ${!validation.validity.email && "form-input-error"}`} 
            id="email"
            name="email" 
            value={validation.values.email || ''}
            onChange={validation.handleChange}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            title="Enter your email" 
            disabled={isLoading}
            required />
        </div>
        <span 
        className={`input-error ${!validation.isFormValid && "input-error_active"}`} 
        id="email-error">{validation.errors.email}
        </span>
        <div className="user-entry__container">
          <label className="user-entry__lable" htmlFor="password">Password</label>
          <input 
            type="password" 
            className={`form-input form__input_type_sign ${!validation.validity.password && "form-input-error"}`} 
            id="password"
            name="password"
            value={validation.values.password || ''}
            onChange={validation.handleChange}
            minLength="8"
            title="Enter your password" 
            disabled={isLoading}
            required />
        </div>
        <span 
          className={`input-error ${!validation.isFormValid && "input-error_active"}`}
          id="password-error">{validation.errors.password}
        </span>
      </UserEntry>
    </section>
  )
};

export default Register;