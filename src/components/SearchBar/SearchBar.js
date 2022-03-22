import React from 'react';
import { RiSearchLine } from "react-icons/ri";
import "./SearchBar.css";

const SearchBar = ({onSubmit}) => {

  const [keyword, setKeyword] = React.useState('');
  const [error, setError] = React.useState('');
  const [isFormValid, setIsFormValid] = React.useState(false);

  function handleChange(evt) {
    setKeyword(evt.target.value);
    console.log(keyword)
    setError("sorry, there is an error");
    setIsFormValid(evt.target.closest('form').checkValidity());
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isFormValid) {
      onSubmit(keyword)
    } else {
      setError("sorry, there is an error");
    }
  }

  return (
    <section className="search-form">
      <form 
      className="search-form__container" 
      name="search" 
      onSubmit={handleSubmit}>
        <div className="search-form__block">
          <RiSearchLine className="search-form__icon"/>
          <div className="form-wrapper">
            <input 
              className="form-input search-form__input_type_school"
              type="text"
              id="search"
              name="movie-search"
              onChange={handleChange}
              placeholder="Enter school name"
              title="School name"
              minLength="1"
              maxLength="30"
              required />
            <span
            className={`input-error input-error_type_school ${!isFormValid && "input-error_active"}`} 
            id="search-error">{error}
            </span>
          </div>
        </div>
        <button 
          type="submit" 
          className={`button button_type_search ${!isFormValid ? "button_type_search_disabled" : ""}`} 
          aria-label="search school">Search
        </button>
            
      </form>
    </section>
  )
}

export default SearchBar;