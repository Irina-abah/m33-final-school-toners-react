import Location from "./Location/Location";
import "./OneSchool.css";

const OneSchool = ({school, onChangeQuantity, isOpen, isSuccess, onClose}) => {
  return (
    <>
    <li className="school">
      <h3 className="school-name">{school.school_name}</h3>
      <div className="locations">
        <h4 className="locations-title">Locations:</h4>
        <ul className="locations-list">
          { school.locations.map((location, i) => (
            <Location 
              key={i} 
              location={location} 
              onChangeQuantity={onChangeQuantity} 
              isOpen={isOpen}
              isSuccess={isSuccess}
              onClose={onClose}
              />
          ))
          }
        </ul>
      </div>
      <p className="total">Total amount of toners:</p>
    </li>
    </>
  )
}

export default OneSchool;