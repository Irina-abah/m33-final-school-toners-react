import OneSchool from "./OneSchool/OneSchool";
import SearchBar from "../SearchBar/SearchBar";
import "./Schools.css";
import React from "react";
import { searchSchoolByKeyword } from "../../utils/searchSchool";

const Schools = ({schools, onHandleSubmit, onChangeQuantity, setIsSuccess, isSuccess, onClose}) => {

  const [keyword, setKeyword] = React.useState('');

  const filteredData = searchSchoolByKeyword(schools, keyword);

  return (
      <section className="schools">
        <h2 className="section-title">List of all schools of Laurus Trust</h2>
        <SearchBar 
          setKeyword={setKeyword}
        />
        {(filteredData.length === 0) && <p className="schools_not-found">No schools found. Try again</p>}
        <ol className="schools-container">
          {
            filteredData.map((item, i) => (
              <OneSchool
                key={i}
                school={item}
                onChangeQuantity={onChangeQuantity}
                setIsSuccess={setIsSuccess}
                isSuccess={isSuccess}
                onClose={onClose}
                onSubmit={onHandleSubmit}
              />
            ))
          }
        </ol>
      </section>
  )
}

export default Schools;