import Toner from "./Toner";

const Location = ({location}) => {
  return (
    <li>
      <div>
        <p>Location name: {location.location_name}</p>
        <p>Printer model: {location.printer_model}</p>
        <p>Printer type: {location.printer_type}</p>
      </div>
      <div>
        <h4 className="locations">Toners:</h4>
        <ul>
          { location.toners.map((toner, i) => (
            <Toner toner={toner}/>
          ))}
        </ul>
      </div> 
     </li>
  )
}

export default Location;