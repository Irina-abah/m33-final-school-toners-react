import OneSchool from "./OneSchool/OneSchool";

const Schools = ({schools, location}) => {
  return (
    <section>
      <h2>List of all schools of Laurus Trust</h2>
      <ul className="schools-container">
        {
          schools.map((item, i) => (
            <OneSchool
              key={i}
              school={item}
              // location={item.locations}
            />
          ))
        }
      </ul>
    </section>
  )
}

export default Schools;