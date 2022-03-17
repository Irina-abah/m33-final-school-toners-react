import Toner from "../Toner/Toner";
import "./Location.css";

const Location = ({location, onChangeQuantity}) => {
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
            <Toner key={i} toner={toner} onChangeQuantity={onChangeQuantity}/>
          ))}
        </ul>
      </div> 
     </li>
  )
}

export default Location;