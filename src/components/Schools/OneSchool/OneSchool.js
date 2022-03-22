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

  // let toners = [];
  //   school.locations.forEach((location) => {
  //       location.toners.forEach((toner) => {
  //           // If an index is not found (returns -1), push new toner into the array. Otherwise, increase toner quantity.
  //           const foundIndex = toners.findIndex(e => e.toner_name === toner.toner_name)
  //           if (foundIndex === -1)
  //           {
  //               // Toner doesn't exist, add new
  //               toners.push(toner);
  //           }
  //           else
  //           {
  //               // Toner exists, add additional quantity
  //               toners[foundIndex].quantity += toner.quantity;
  //           }
  //       });
  //   });

  // console.log(res);

  // console.log(toners)

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
        {sumToners.map((toner) => (
            <p className="infoitem" key={toner.id}>{toner.toner_name}: {toner.quantity}</p>
          ))}
      </div>
        
      </div>
    </li>
    </>
  )
}

export default OneSchool;