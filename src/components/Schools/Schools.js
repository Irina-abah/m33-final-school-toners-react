import OneSchool from "./OneSchool/OneSchool";
import SearchBar from "../SearchBar/SearchBar";
import "./Schools.css";
import React from "react";

const Schools = ({schools, onHandleSubmit, onChangeQuantity, setIsSuccess, isSuccess, onClose, schoolsNotFound}) => {

  return (
      <section className="schools">
        <h2 className="section-title">List of all schools of Laurus Trust</h2>
        <SearchBar onSubmit={onHandleSubmit}/>
        {schoolsNotFound && <p className="schools_not-found">No schools found. Try again</p>}
        <ol className="schools-container">
          {
            schools.map((item, i) => (
              <OneSchool
                key={i}
                school={item}
                onChangeQuantity={onChangeQuantity}
                setIsSuccess={setIsSuccess}
                isSuccess={isSuccess}
                onClose={onClose}
              />
            ))
          }
        </ol>
      </section>
  )
}

export default Schools;