import OneSchool from "./OneSchool/OneSchool";
import "./Schools.css";
import React from "react";

const Schools = ({schools, setSchools, onChangeQuantity, setIsSuccess, isSuccess, onClose}) => {

  // React.useEffect(() => {
  //   setSchools(schools);
  // }, [schools, setSchools]); 

  return (
    <section className="schools">
      <h2 className="section-title">List of all schools of Laurus Trust</h2>
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