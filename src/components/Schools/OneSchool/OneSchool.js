import Location from "./Location/Location";

const OneSchool = ({school}) => {
  return (
    <li className="school">
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