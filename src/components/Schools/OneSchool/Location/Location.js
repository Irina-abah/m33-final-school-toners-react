import Toner from "../Toner/Toner";
import "./Location.css";

const Location = ({location, onChangeQuantity, isOpen, isSuccess, onClose}) => {
  return (
    <li className="location">
      <div className="location-info">
        <p className="infoitem">Location name: <span>{location.location_name}</span></p>
        <p className="infoitem">Printer model: {location.printer_model}</p>
        <p className="infoitem">Printer type: {location.printer_type}</p>
      </div>
      <div className="toners">
        <h4 className="toners-title">Toners:</h4>
        <ul className="toners-list">
          { location.toners.map((toner, i) => (
            <Toner 
              key={i} 
              toner={toner} 
              id={toner.id}
              onChangeQuantity={onChangeQuantity}
              isOpen={isOpen}
              isSuccess={isSuccess}
              onClose={onClose}
              />
          ))}
        </ul>
      </div> 
     </li>
  )
}

export default Location;