import React from 'react';
import UserEntry from '../UserEntry/UserEntry';
import {useFormValidation} from '../../utils/ValidateForm';

function Login({onLogin, isLoading}) {

  const validation = useFormValidation();
  const {email, password} = validation.values;

  const handleSubmit = (evt) => {
    evt.preventDefault();
      onLogin({email, password})
  }

  return (
    <section className="login">
    <UserEntry
    title="Welcome back!"
    buttonName="Login"
    message="Don't have an account?"
    link="/signup"
    linkName="Registration"
    onSubmit={handleSubmit}
    isFormValid={validation.isFormValid}
    isLoading={isLoading}>
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
        title="Enter youe email" 
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
          required 
        />
      </div>
      <span 
          className={`input-error ${!validation.isFormValid && "input-error_active"}`} 
          id="password-error">{validation.errors.password}
        </span>
    </UserEntry>
    </section>
  )
};

export default Login;