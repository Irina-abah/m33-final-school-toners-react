import Location from "./Location/Location";
import "./OneSchool.css";
import React, { useLayoutEffect } from "react";

import mainApi from "../../../utils/MainApi";

const OneSchool = ({school, onChangeQuantity, setIsSuccess, isSuccess, onClose}) => {

  // const [toners, setToners] = React.useState([]);

  // React.useEffect(() => {
  //   mainApi.getToners()
  //   .then((data) => {
  //     setToners(data)
  //     console.log(data)
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // }, [])

  // const locationid = school.locations.find((item) => {
  //   return toners.find((toner) => {
  //     let arr = []
  //     if (toner.locationId === item.schoolId) {
  //       arr.push(toner.locationId)
  //     }
  //     return arr;
  //   })
  // })

  // console.log(locationid)

  const toners = school.locations.forEach((location) => {
    let tonerlist = location.toners;
    console.log(tonerlist)

    const array = [...tonerlist]
    console.log(array)
    return array;
});

console.log(toners)


  // const totalPrice = data.reduce(
  //   function (sum, item) {
  //     return sum + item.quantity
  //   }, 0
  // )

  // const locations = [].concat(...school.locations);


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
              setIsSuccess={setIsSuccess}
              isSuccess={isSuccess}
              onClose={onClose}
              />
          ))
          }
        </ul>
      </div>
      <p className="total">Total amount of toners:</p>
      {/* <div>toners
        {toners}
      </div> */}
    </li>
    </>
  )
}

export default OneSchool;