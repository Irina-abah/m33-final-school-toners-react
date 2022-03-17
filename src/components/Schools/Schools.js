import OneSchool from "./OneSchool/OneSchool";
import "./Schools.css";

const Schools = ({schools, onChangeQuantity}) => {
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
            />
          ))
        }
      </ol>
    </section>
  )
}

export default Schools;