import Toner from "../Toner/Toner";
import "./Location.css";

const Location = ({location, onChangeQuantity, setIsSuccess, isSuccess, onClose}) => {
  
  const tonersClassName = `toners ${(location.toners.length > 1) ? "toners-many" : ""}`; 

  return (
    <li className="location">
      <div className="location-info">
        <p className="infoitem">Location name: <span>{location.location_name}</span></p>
        <p className="infoitem">Printer model: {location.printer_model}</p>
        <p className="infoitem">Printer type: {location.printer_type}</p>
      </div>
      <div className={tonersClassName}>
        <h4 className="toners-title">Toners:</h4>
        <ul className="toners-list">
          { location.toners.map((toner, i) => (
            <Toner 
              key={i} 
              toner={toner} 
              toners={location.toners}
              id={toner.id}
              quantity={toner.quantity}
              onChangeQuantity={onChangeQuantity}
              setIsSuccess={setIsSuccess}
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