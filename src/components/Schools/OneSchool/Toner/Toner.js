import "./Toner.css";
import React from "react";
import Popup from "../../../Popup/Popup";

const Toner = ({ toner, onChangeQuantity, isSuccess, onClose}) => {

  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }


  return (
    <li>
      <div className="toner-info">
        <p className="infoitem">Toner name: <span>{toner.toner_name}</span></p>
        <p className="infoitem">Toner colour: {toner.colour}</p>
        <div className="quantity-wrapper">
        <p className="toner-quantity">Toner quantity: {toner.quantity}</p>
        <button className="button button_type_change"type="button" onClick={handleClick}>Change quantity</button>
        {isOpen && <Popup
          onClose={handleClick} 
          isSuccess={isSuccess} 
          item={toner} 
          onUpdateQuantity={onChangeQuantity}
        />}
        </div>
      </div>
     </li>
  )
}

export default Toner;