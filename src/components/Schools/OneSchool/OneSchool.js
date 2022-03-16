import Location from "./Location";

const OneSchool = ({school}) => {
  return (
    <li>
      <h3>Name: {school.school_name}</h3>
      <div>
        <h4 className="locations">Locations:</h4>
        <ul>
          { school.locations.map((location, i) => (
            <Location location={location} />
          ))
          }
        </ul>
      </div>
    </li>
  )
}

export default OneSchool;