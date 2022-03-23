import Location from "./Location/Location";
import "./OneSchool.css";
import React from "react";

const OneSchool = ({school, onChangeQuantity, setIsSuccess, isSuccess, onClose}) => {

  let toners = [];
  school.locations.forEach((location) => {
      location.toners.forEach((toner) => {
          toners.push(toner);
      });
  });

  const result = toners.reduce((all, {toner_name: d, quantity: a}) => {

    all[d] = (all[d] || 0) + a;
    return all;

  }, {});

  const sumToners = Object.keys(result).map(key => ( {toner_name: key, quantity: result[key]}))

  return (
    <>
    <li className="school">
      <div className="school-wrap">
        <h3 className="school-name">{school.school_name}</h3>
        <div className="locations">
          <h4 className="locations-title">Locations:</h4>
          <ul className="locations-list">
            { school.locations.map((location, i) => (
              <Location 
                key={i} 
                location={location} 
                onChangeQuantity={onChangeQuantity} 
                setIsSuccess={setIsSuccess}
                isSuccess={isSuccess}
                onClose={onClose}
                />
            ))
            }
          </ul>
        </div>
      </div>
      <div className="total">
      <h4 className="total-title">Total amount of toners:</h4>
      <div className="total-list">
        {sumToners.map((toner, i) => (
            <p className="infoitem" key={i}>{toner.toner_name}: {toner.quantity}</p>
          ))}
      </div>
        
      </div>
    </li>
    </>
  )
}

export default OneSchool;