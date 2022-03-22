import React from 'react';
import { RiSearchLine } from "react-icons/ri";
import "./SearchBar.css";

const SearchBar = ({setKeyword}) => {

  function handleChange(e) {
    setKeyword(e.target.value.toLowerCase());
  }

  return (
    <section className="search-form">
      <div className="search-form__container">
        <RiSearchLine className="search-form__icon"/>
          <input 
            className="form-input search-form__input_type_school"
            type="text"
            id="search"
            name="school-search"
            onChange={handleChange}
            placeholder="Enter school name"
            title="School name"
            minLength="1"
            maxLength="50"
            required 
          />
      </div>      
    </section>
  )
}

export default SearchBar;